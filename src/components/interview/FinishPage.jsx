import React from 'react'
import Card from '../../components/Card'
import { useInterview } from '../../context/InterviewContext'
import { useNavigate } from 'react-router-dom'

export default function FinishPage(){
  const { recordings, setStep, startedAt, setCompletedAt } = useInterview()
  const nav = useNavigate()

  const answered = recordings.length
  const avg = answered ? Math.round((recordings.reduce((s,r)=> s + (r.duration||0),0)/answered)/1000) : 0
  const completion = new Date().toLocaleString()

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <h2 className="text-2xl font-semibold">Congratulations!</h2>
        <p className="mt-2 text-slate-600">Mock Interview Completed.</p>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <div className="p-4 rounded-lg bg-slate-50">
            <div className="text-sm text-slate-500">Questions Answered</div>
            <div className="text-xl font-medium">{answered}</div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50">
            <div className="text-sm text-slate-500">Average Speaking Time (s)</div>
            <div className="text-xl font-medium">{avg}</div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50">
            <div className="text-sm text-slate-500">Completion Time</div>
            <div className="text-xl font-medium">{completion}</div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button onClick={()=> alert('Report generation simulated')} className="px-4 py-2 rounded-md bg-brand text-white">Generate Report</button>
          <button onClick={()=> nav('/dashboard')} className="px-4 py-2 rounded-md bg-slate-100">Return Dashboard</button>
        </div>
      </Card>
    </div>
  )
}
