import React from 'react'

export default function FAQItem({q,a}){
  return (
    <div className="bg-white p-4 rounded-xl card-shadow">
      <h4 className="font-semibold">{q}</h4>
      <p className="text-sm text-slate-600 mt-2">{a}</p>
    </div>
  )
}
