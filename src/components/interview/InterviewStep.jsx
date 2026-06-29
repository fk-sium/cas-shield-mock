import React, {useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam'
import Card from '../../components/Card'
import { useInterview } from '../../context/InterviewContext'
import { motion } from 'framer-motion'
import { Mic, Video, Maximize, Camera, Wifi } from 'lucide-react'
import FullscreenModal from './FullscreenModal'
import BottomBar from './BottomBar'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import QuestionCard from './QuestionCard'
import UploadAnimation from './UploadAnimation'

const PREP_SECONDS = 20
const RECORD_SECONDS = 120

export default function InterviewStep(){
  const { questions, current, setCurrent, setRecordings, recordings, setStartedAt, setCompletedAt, setStep } = useInterview()
  const webcamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const [isPreparing, setIsPreparing] = useState(false)
  const [prepSeconds, setPrepSeconds] = useState(PREP_SECONDS)
  const [isRecording, setIsRecording] = useState(false)
  const [recSeconds, setRecSeconds] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showFsModal, setShowFsModal] = useState(false)
  const [stream, setStream] = useState(null)

  // start interview when component mounts
  useEffect(()=>{
    setStartedAt(new Date())
    startQuestion()
    document.addEventListener('fullscreenchange', onFsChange)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return ()=>{
      document.removeEventListener('fullscreenchange', onFsChange)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      stopStream()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    let t
    if(isPreparing && prepSeconds > 0 && !paused){
      t = setTimeout(()=> setPrepSeconds(s => s-1), 1000)
    }
    if(isPreparing && prepSeconds === 0){
      setIsPreparing(false)
      startRecording()
    }
    return ()=> clearTimeout(t)
  },[isPreparing, prepSeconds, paused])

  useEffect(()=>{
    let t
    if(isRecording && recSeconds < RECORD_SECONDS && !paused){
      t = setTimeout(()=> setRecSeconds(s => s+1), 1000)
    }
    if(isRecording && recSeconds >= RECORD_SECONDS){
      stopRecording()
    }
    return ()=> clearTimeout(t)
  },[isRecording, recSeconds, paused])

  async function ensureStream(){
    if(stream) return stream
    try{
      const s = await navigator.mediaDevices.getUserMedia({video:{width:1280}, audio:true})
      setStream(s)
      if(webcamRef.current && !webcamRef.current.stream){
        try{ webcamRef.current.video.srcObject = s }catch(e){}
      }
      return s
    }catch(e){
      console.error('Could not get stream', e)
      return null
    }
  }

  async function startQuestion(){
    setPrepSeconds(PREP_SECONDS)
    setRecSeconds(0)
    setIsUploading(false)
    setUploadProgress(0)
    setPaused(false)
    setIsPreparing(true)
  }

  async function startRecording(){
    const s = await ensureStream()
    if(!s){
      alert('Unable to access camera or microphone.');
      setStep('permission')
      return
    }

    chunksRef.current = []
    try{
      const options = {mimeType: 'video/webm;codecs=vp8,opus'}
      const mr = new MediaRecorder(s, options)
      mediaRecorderRef.current = mr
      mr.ondataavailable = function(e){ if(e.data && e.data.size) chunksRef.current.push(e.data) }
      mr.onstop = handleRecordingStop
      mr.start()
      setIsRecording(true)
      setRecSeconds(0)
    }catch(e){
      console.error('MediaRecorder error', e)
      alert('Recording is not supported on this browser.')
      setStep('finish')
    }
  }

  function stopRecording(){
    try{
      if(mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive'){
        mediaRecorderRef.current.stop()
      }
    }catch(e){ console.warn(e) }
    setIsRecording(false)
  }

  function handleRecordingStop(){
    const blob = new Blob(chunksRef.current, {type: 'video/webm'})
    const duration = recSeconds * 1000
    // store recording locally
    setRecordings(prev => [...prev, {questionIndex: current, blob, duration, uploaded:false}])
    // simulate upload
    simulateUpload(blob).then(()=>{
      // after upload, advance
      const next = current + 1
      if(next >= questions.length){
        setCompletedAt(new Date())
        setStep('finish')
      }else{
        setCurrent(next)
        // small delay before next prep
        setTimeout(()=> startQuestion(), 800)
      }
    })
  }

  function simulateUpload(blob){
    setIsUploading(true)
    setUploadProgress(0)
    return new Promise(resolve=>{
      const total = 1200
      let sent = 0
      const id = setInterval(()=>{
        sent += Math.random()*120
        const pct = Math.min(100, Math.round((sent/total)*100))
        setUploadProgress(pct)
        if(pct >= 100){
          clearInterval(id)
          setIsUploading(false)
          setUploadProgress(100)
          // mark last recording as uploaded
          setRecordings(prev => prev.map((r,i)=> i===prev.length-1? {...r, uploaded:true, uploadedAt:new Date()} : r))
          setTimeout(()=> resolve(), 500)
        }
      }, 150)
    })
  }

  function onFsChange(){
    const el = document.fullscreenElement
    if(!el){
      // user left fullscreen
      if(isPreparing || isRecording){
        setPaused(true)
        setShowFsModal(true)
      }
    }else{
      // returned
      setPaused(false)
      setShowFsModal(false)
    }
  }

  function onVisibilityChange(){
    if(document.hidden){
      if(isRecording || isPreparing){
        setPaused(true)
        setShowFsModal(true)
      }
    }else{
      setPaused(false)
      setShowFsModal(false)
    }
  }

  function stopStream(){
    if(stream){
      stream.getTracks().forEach(t=> t.stop())
      setStream(null)
    }
  }

  const answered = recordings.length
  const remaining = questions.length - answered
  const estRemainingMs = remaining * RECORD_SECONDS * 1000

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-9">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-slate-500">Question {current+1} of {questions.length}</div>
              <div className="text-xs text-slate-400">Category: University Choice</div>
            </div>
            <div className="w-1/3">
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{width:0}} animate={{width: `${Math.round(((current+ (isRecording? recSeconds/RECORD_SECONDS:0))/questions.length)*100)}%`}} className="h-2 bg-brand" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden border relative bg-black">
                <Webcam audio={true} ref={webcamRef} mirrored className="w-full h-96 object-cover" />
                <div className="absolute top-3 left-3 bg-black/40 px-2 py-1 rounded-full text-white text-xs flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${isRecording? 'bg-red-500 animate-pulse':'bg-gray-400'}`}></div>
                  <div>{isRecording? 'REC' : (isPreparing? 'Preparing' : (isUploading? 'Uploading':'Idle'))}</div>
                </div>
                <div className="absolute bottom-3 left-3 text-white text-xs bg-black/40 px-2 py-1 rounded-md">{isRecording? `${String(Math.floor(recSeconds/60)).padStart(2,'0')}:${String(recSeconds%60).padStart(2,'0')}` : `${String(Math.floor(prepSeconds/60)).padStart(2,'0')}:${String(prepSeconds%60).padStart(2,'0')}`}</div>
                <div className="absolute top-3 right-3 text-white text-xs bg-black/40 px-2 py-1 rounded-md flex items-center gap-2">
                  <Mic size={14} /> <span className="text-xs">Mic</span>
                </div>
              </div>

              <div className="mt-4">
                <QuestionCard question={questions[current]} />
              </div>

              <div className="mt-4">
                {isUploading && <UploadAnimation progress={uploadProgress} />}
              </div>
            </div>

            <div>
              <RightPanel />
            </div>
          </div>
        </Card>

        <div className="mt-4">
          <BottomBar />
        </div>
      </div>

      <div className="lg:col-span-3">
        <LeftPanel answered={answered} remaining={remaining} estRemainingMs={estRemainingMs} />
      </div>

      {showFsModal && <FullscreenModal onClose={() => {
        const el = document.documentElement
        if(el.requestFullscreen) el.requestFullscreen().catch(()=>{})
      }} />}

    </div>
  )
}
