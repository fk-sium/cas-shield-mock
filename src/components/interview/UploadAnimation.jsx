import React from 'react'
import { motion } from 'framer-motion'

export default function UploadAnimation({progress=0}){
  return (
    <div className="p-4 rounded-lg bg-white border">
      <div className="text-sm text-slate-600">Uploading Response...</div>
      <div className="mt-3 h-3 bg-slate-100 rounded-full overflow-hidden">
        <motion.div initial={{width:0}} animate={{width: `${progress}%`}} className="h-3 bg-brand" />
      </div>
    </div>
  )
}
