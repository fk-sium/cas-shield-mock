import React from 'react'
import { motion } from 'framer-motion'

export default function RightPanel(){
  return (
    <motion.div initial={{x:8, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.45}} className="p-4 bg-white rounded-xl border">
      <h4 className="font-semibold">Interview Tips</h4>
      <ul className="mt-3 text-sm text-slate-600 space-y-2">
        <li>Maintain eye contact with the camera.</li>
        <li>Speak naturally and clearly.</li>
        <li>Avoid memorised answers; be genuine.</li>
        <li>Smile occasionally to appear engaged.</li>
        <li>Answer confidently and concisely.</li>
      </ul>
    </motion.div>
  )
}
