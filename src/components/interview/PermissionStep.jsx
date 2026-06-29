import React, {useEffect, useRef, useState} from 'react'
import Card from '../../components/Card'
import { useInterview } from '../../context/InterviewContext'
import { CheckCircle, XCircle, Camera, Mic, Globe, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PermissionStep(){
  const { setStep, permissions, setPermissions } = useInterview()
  const videoRef = useRef(null)
  const [stream, setStream] = useState(null)
  const [browserInfo] = useState(navigator.userAgent)

  useEffect(()=>{
    async function startPreview(){
      try{
        const s = await navigator.mediaDevices.getUserMedia({video:{width:640}, audio:true})
        setStream(s)
        if(videoRef.current) videoRef.current.srcObject = s
        setPermissions(p => ({...p, camera:true, microphone:true}))
      }catch(e){
        try{
          const cam = await navigator.mediaDevices.getUserMedia({video:{width:640}})
          setStream(cam)
          if(videoRef.current) videoRef.current.srcObject = cam
          setPermissions(p => ({...p, camera:true}))
        }catch(err){
          setPermissions(p => ({...p, camera:false}))
        }
        try{
          const mic = await navigator.mediaDevices.getUserMedia({audio:true})
          setPermissions(p => ({...p, microphone:true}))
        }catch(err){
          setPermissions(p => ({...p, microphone:false}))
        }
      }
    }

    startPreview()

    return ()=>{
      if(stream){
        stream.getTracks().forEach(t=>t.stop())
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const canContinue = permissions.camera && permissions.microphone

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <motion.h3 initial={{y:6, opacity:0}} animate={{y:0, opacity:1}} className="text-xl font-semibold">Camera & Microphone Permissions</motion.h3>
          <p className="text-sm text-slate-600 mt-2">Allow access to your camera and microphone. This preview shows what your recording will look like.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.08}} className="rounded-xl overflow-hidden border">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-80 object-cover bg-black" />
              </motion.div>
              <div className="mt-2 text-sm text-slate-600">Webcam preview</div>
            </div>

            <div className="space-y-4">
              <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-brand"><Camera size={18} /></div>
                  <div>
                    <div className="text-sm font-medium">Camera</div>
                    <div className="text-xs text-slate-500">Live preview shows camera access</div>
                  </div>
                </div>
                <div>
                  {permissions.camera ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-400"/>}
                </div>
              </motion.div>

              <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.06}} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-brand"><Mic size={18} /></div>
                  <div>
                    <div className="text-sm font-medium">Microphone</div>
                    <div className="text-xs text-slate-500">Your microphone should capture clear audio</div>
                  </div>
                </div>
                <div>
                  {permissions.microphone ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-400"/>}
                </div>
              </motion.div>

              <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.12}} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-brand"><Globe size={18} /></div>
                  <div>
                    <div className="text-sm font-medium">Internet</div>
                    <div className="text-xs text-slate-500">{navigator.onLine ? 'Connected' : 'Offline'}</div>
                  </div>
                </div>
                <div>
                  {navigator.onLine ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-400"/>}
                </div>
              </motion.div>

              <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.14}} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-brand"><Monitor size={18} /></div>
                  <div>
                    <div className="text-sm font-medium">Browser</div>
                    <div className="text-xs text-slate-500">{navigator.userAgent.split('(')[0]}</div>
                  </div>
                </div>
                <div>
                  <CheckCircle className="text-green-500"/>
                </div>
              </motion.div>

              <div className="mt-4">
                <button disabled={!canContinue} onClick={()=> setStep('system')} className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-white ${canContinue? 'bg-brand hover:opacity-95':'bg-slate-300 cursor-not-allowed'}`}>
                  Continue
                </button>
                <div className="text-xs text-slate-500 mt-2">You must allow camera and microphone to continue.</div>
              </div>
            </div>
          </div>

        </Card>
      </div>

      <div>
        <Card>
          <h4 className="font-semibold">Browser Compatibility</h4>
          <p className="text-sm text-slate-600 mt-2">Recommended: Chrome or Edge on desktop. Mobile support is limited.</p>
          <div className="mt-4 text-sm text-slate-500">{browserInfo}</div>
        </Card>
      </div>
    </div>
  )
}
