import React from 'react'

export default function FullscreenModal({onClose}){
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold">Return to Fullscreen</h3>
        <p className="text-sm text-slate-600 mt-2">Please return to fullscreen to continue your interview. The recording is paused until you return.</p>
        <div className="mt-4 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-brand text-white">Return to Fullscreen</button>
        </div>
      </div>
    </div>
  )
}
