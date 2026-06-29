import React from 'react'

export default function QuestionCard({question}){
  return (
    <div className="p-4 rounded-lg bg-white border">
      <h4 className="font-semibold">Question</h4>
      <div className="mt-3 text-slate-700">{question}</div>
      <div className="mt-3 text-xs text-slate-500">Preparation time will count down, recording will start automatically.</div>
    </div>
  )
}
