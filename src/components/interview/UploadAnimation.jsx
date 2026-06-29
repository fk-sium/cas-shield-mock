import React from 'react'
import { motion } from 'framer-motion'

export default function UploadAnimation({progress=0}){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className="p-4 rounded-lg bg-white border">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">Uploading Response...</div>
        <div className="text-xs text-slate-400">{progress}%</div>
      </div>
      <div className="mt-3 h-3 bg-slate-100 rounded-full overflow-hidden">
        <motion.div initial={{width:0}} animate={{width: `${progress}%`}} transition={{duration:0.5}} className="h-3 bg-brand" />
      </div>
    </motion.div>
  )
}
