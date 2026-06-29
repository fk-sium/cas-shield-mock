import React from 'react'
import { motion } from 'framer-motion'

const QuickActionCard = ({ icon: Icon, title, description, onClick, delay = 0 }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ delay, duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-xl p-6 card-shadow border border-slate-100 hover:shadow-lg hover:border-brand/30 transition text-left w-full group"
    >
      <div className="p-3 rounded-lg bg-brand/10 text-brand w-fit mb-3 group-hover:bg-brand/20 transition">
        <Icon size={24} />
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </motion.button>
  )
}

export default QuickActionCard
