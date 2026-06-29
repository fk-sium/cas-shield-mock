import React from 'react'

export default function WebcamPlaceholder(){
  return (
    <div className="w-full h-72 md:h-96 rounded-xl bg-gradient-to-tr from-blue-50 to-white border-2 border-dashed border-gray-200 flex items-center justify-center">
      <div className="text-center text-slate-400">
        <div className="text-4xl">📷</div>
        <div className="mt-2">Webcam placeholder</div>
        <div className="text-xs mt-1 text-slate-400">Allow camera in a real app</div>
      </div>
    </div>
  )
}
