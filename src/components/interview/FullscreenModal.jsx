import React from 'react'
import { motion } from 'framer-motion'

export default function FullscreenModal({onClose}){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.2}} className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.25}} className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold">Return to Fullscreen</h3>
        <p className="text-sm text-slate-600 mt-2">Please return to fullscreen to continue your interview. The recording is paused until you return.</p>
        <div className="mt-4 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-brand text-white">Return to Fullscreen</button>
        </div>
      </motion.div>
    </motion.div>
  )
}
