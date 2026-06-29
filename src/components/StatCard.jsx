import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ icon: Icon, label, value, trend, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-xl p-6 card-shadow border border-slate-100"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{label}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          {trend && (
            <p className="text-xs text-emerald-600 mt-2">↑ {trend} from last week</p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-brand/10 text-brand">
          <Icon size={24} />
        </div>
      </div>
    </motion.div>
  )
}

export default StatCard
