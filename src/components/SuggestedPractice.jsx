import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Zap, Play } from 'lucide-react'

const SuggestedPractice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-6 card-shadow border border-slate-100"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
        <p className="text-xs font-semibold text-slate-500 uppercase">Suggested Today</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Business Management</h3>
        <p className="text-sm text-slate-500 mt-1">Question Pack</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-slate-600">
          <BookOpen size={18} className="text-brand" />
          <span className="text-sm">10 Questions</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Clock size={18} className="text-brand" />
          <span className="text-sm">15 Minutes Estimated</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Zap size={18} className="text-amber-500" />
          <span className="text-sm font-medium">Medium Difficulty</span>
        </div>
      </div>

      <button className="w-full py-3 px-4 rounded-lg bg-brand text-white hover:bg-brand/90 font-medium transition flex items-center justify-center gap-2 group">
        <Play size={18} className="group-hover:scale-110 transition" />
        Start Practice
      </button>
    </motion.div>
  )
}

export default SuggestedPractice
