import React from 'react'
import { motion } from 'framer-motion'
import { Search, Bell, User } from 'lucide-react'

const DashboardNav = () => {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-slate-200 sticky top-0 z-30"
    >
      <div className="md:ml-64 px-6 py-4 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-3 flex-1">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search interviews, packs..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition relative">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand rounded-full" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-900">{greeting}, Sium 👋</p>
              <p className="text-xs text-slate-500">Student</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-blue-700 text-white flex items-center justify-center font-bold hover:shadow-lg transition">
              MS
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default DashboardNav
