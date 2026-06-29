import React from 'react'
import { motion } from 'framer-motion'
import { Check, Lightbulb } from 'lucide-react'

const DailyTips = () => {
  const tips = [
    'Maintain eye contact',
    'Speak naturally and clearly',
    'Avoid memorised answers',
    'Smile and be confident',
    'Stay within time limits',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-xl p-6 card-shadow border border-slate-100 h-fit"
    >
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={20} className="text-amber-500" />
        <h3 className="font-semibold text-slate-900">Daily Tips</h3>
      </div>

      <div className="space-y-3">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="mt-1 p-1 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
              <Check size={14} />
            </div>
            <p className="text-sm text-slate-600">{tip}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
        <p className="text-sm italic text-slate-700 font-medium">
          "Practice makes confidence."
        </p>
        <p className="text-xs text-slate-500 mt-2">Every interview is a step closer to success.</p>
      </div>
    </motion.div>
  )
}

export default DailyTips
