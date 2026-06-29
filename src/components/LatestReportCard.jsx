import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

const LatestReportCard = () => {
  const metrics = [
    { label: 'Overall Score', value: '85%', color: 'emerald' },
    { label: 'Confidence', value: 'Excellent', color: 'blue' },
    { label: 'Grammar', value: 'Good', color: 'amber' },
    { label: 'Fluency', value: 'Excellent', color: 'emerald' },
    { label: 'Eye Contact', value: 'Average', color: 'slate' },
    { label: 'Speaking Speed', value: 'Good', color: 'blue' },
  ]

  const colorMap = {
    emerald: 'bg-emerald-50 text-emerald-700',
    blue: 'bg-blue-50 text-blue-700',
    amber: 'bg-amber-50 text-amber-700',
    slate: 'bg-slate-100 text-slate-700',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl p-6 card-shadow border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <TrendingUp size={20} className="text-brand" />
            Latest Report
          </h3>
          <p className="text-sm text-slate-500 mt-1">Business Management - 2 hours ago</p>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition">
          <ArrowRight size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className={`rounded-lg p-4 ${colorMap[metric.color]}`}
          >
            <p className="text-xs font-medium opacity-75">{metric.label}</p>
            <p className="text-lg font-bold mt-1">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 px-4 rounded-lg bg-brand/10 text-brand hover:bg-brand/20 font-medium transition">
        View Full Report
      </button>
    </motion.div>
  )
}

export default LatestReportCard
