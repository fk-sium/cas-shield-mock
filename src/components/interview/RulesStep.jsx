import React, {useState} from 'react'
import Card from '../../components/Card'
import { useInterview } from '../../context/InterviewContext'

export default function RulesStep(){
  const { setStep } = useInterview()
  const [checked, setChecked] = useState(false)

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <h3 className="text-xl font-semibold">Interview Rules</h3>
        <p className="text-sm text-slate-600 mt-2">Please read the rules carefully before starting. These rules ensure your attempt is valid.</p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>You cannot pause the interview once a question recording has started.</li>
          <li>Recording starts automatically after the preparation countdown.</li>
          <li>Each question has a fixed recording time — stay within the limit.</li>
          <li>Remain visible on camera and speak clearly throughout.</li>
          <li>Avoid switching tabs or running other full-screen apps during recording.</li>
        </ul>

        <div className="mt-4 flex items-start gap-3">
          <input id="ack" type="checkbox" checked={checked} onChange={e=> setChecked(e.target.checked)} />
          <label htmlFor="ack" className="text-sm text-slate-700">I understand the rules and agree to follow them.</label>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button onClick={()=> setStep('system')} className="px-3 py-2 rounded-md bg-slate-100">Back</button>
          <button disabled={!checked} onClick={() => {
            // request fullscreen on start
            const el = document.documentElement
            if(el.requestFullscreen) el.requestFullscreen().catch(()=>{})
            setStep('interview')
          }} className={`px-4 py-2 rounded-md text-white ${checked? 'bg-brand':'bg-slate-300 cursor-not-allowed'}`}>Start Interview</button>
        </div>
      </Card>
    </div>
  )
}
