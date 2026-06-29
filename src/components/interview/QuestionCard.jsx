import React from 'react'
import { motion } from 'framer-motion'

export default function QuestionCard({question}){
  return (
    <motion.div initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.35}} className="p-4 rounded-lg bg-white border">
      <h4 className="font-semibold">Question</h4>
      <div className="mt-3 text-slate-700">{question}</div>
      <div className="mt-3 text-xs text-slate-500">Preparation time will count down, recording will start automatically.</div>
    </motion.div>
  )
}
