import React from 'react'

export default function FeatureCard({icon, title, children}){
  return (
    <div className="bg-white rounded-xl p-5 card-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-50 text-brand">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-slate-600 mt-1">{children}</p>
        </div>
      </div>
    </div>
  )
}
