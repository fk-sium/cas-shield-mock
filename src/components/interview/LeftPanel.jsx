import React from 'react'
import { motion } from 'framer-motion'

export default function LeftPanel({answered=0, remaining=0, estRemainingMs=0}){
  const estSec = Math.round(estRemainingMs/1000)
  const mm = String(Math.floor(estSec/60)).padStart(2,'0')
  const ss = String(estSec%60).padStart(2,'0')
  return (
    <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.45}} className="space-y-4">
      <div className="p-4 bg-white rounded-xl border">
        <div className="text-sm text-slate-500">Interview Progress</div>
        <div className="text-xl font-medium mt-2">Question {answered+1}</div>
      </div>
      <div className="p-4 bg-white rounded-xl border">
        <div className="text-sm text-slate-500">Answered</div>
        <div className="text-xl font-medium mt-2">{answered}</div>
      </div>
      <div className="p-4 bg-white rounded-xl border">
        <div className="text-sm text-slate-500">Remaining</div>
        <div className="text-xl font-medium mt-2">{remaining}</div>
      </div>
      <div className="p-4 bg-white rounded-xl border">
        <div className="text-sm text-slate-500">Estimated Remaining Time</div>
        <div className="text-xl font-medium mt-2">{mm}:{ss}</div>
      </div>
    </motion.div>
  )
}
