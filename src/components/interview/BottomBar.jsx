import React from 'react'

export default function BottomBar(){
  return (
    <div className="p-3 bg-white rounded-xl flex items-center justify-between border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <div className="text-sm text-slate-600">Camera</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <div className="text-sm text-slate-600">Microphone</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <div className="text-sm text-slate-600">Internet</div>
        </div>
      </div>

      <div className="text-sm text-slate-500">Pressing Esc or exiting fullscreen will pause the interview.</div>
    </div>
  )
}
