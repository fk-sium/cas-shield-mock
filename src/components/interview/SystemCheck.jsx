import React, {useEffect, useState} from 'react'
import Card from '../../components/Card'
import { CheckCircle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInterview } from '../../context/InterviewContext'

export default function SystemCheck(){
  const { setStep, permissions } = useInterview()
  const [checks, setChecks] = useState({camera:false, microphone:false, internet:false, fullscreen:false, display:true})
  const [running, setRunning] = useState(true)

  useEffect(()=>{
    setRunning(true)
    const t = setTimeout(()=>{
      setChecks({
        camera: permissions.camera,
        microphone: permissions.microphone,
        internet: navigator.onLine,
        fullscreen: document.fullscreenEnabled,
        display: true
      })
      setRunning(false)
    },800)
    return ()=> clearTimeout(t)
  },[permissions])

  const allPass = Object.values(checks).every(Boolean)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <motion.h3 initial={{y:6, opacity:0}} animate={{y:0, opacity:1}} className="text-xl font-semibold">System Check</motion.h3>
          <p className="text-sm text-slate-600 mt-2">We'll run a quick check to make sure your device meets the requirements.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(checks).map(([k,v], idx)=> (
              <motion.div key={k} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay: 0.05 * idx}} className="flex items-center justify-between p-4 bg-white rounded-xl border">
                <div>
                  <div className="text-sm font-medium capitalize">{k.replace('_',' ')}</div>
                  <div className="text-xs text-slate-500 mt-1">{v ? 'Passed' : (running ? 'Checking...' : 'Failed')}</div>
                </div>
                <div>
                  {v ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-400"/>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={()=> setStep('permission')} className="px-4 py-2 rounded-md bg-slate-100">Back</button>
            <button disabled={!allPass} onClick={()=> setStep('rules')} className={`px-4 py-2 rounded-md text-white ${allPass? 'bg-brand':'bg-slate-300 cursor-not-allowed'}`}>Continue</button>
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <h4 className="font-semibold">What we check</h4>
          <p className="text-sm text-slate-600 mt-2">Camera, microphone, internet stability and fullscreen support are required for a reliable recorded interview experience.</p>
        </Card>
      </div>
    </div>
  )
}
