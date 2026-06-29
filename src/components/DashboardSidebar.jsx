import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Home, Video, FileText, BarChart3, User, Settings, LogOut, Menu, X } from 'lucide-react'

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Video, label: 'Mock Interview', path: '/interview' },
    { icon: FileText, label: 'Interview History', path: '#history' },
    { icon: BarChart3, label: 'Reports', path: '#' },
    { icon: User, label: 'Profile', path: '#' },
    { icon: Settings, label: 'Settings', path: '#' },
  ]

  const isActive = (path) => location.pathname === path

  const sidebarContent = (
    <>
      <div className="p-6 border-b border-slate-200">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-brand text-white group-hover:bg-brand/90 transition">
            <ShieldCheck size={24} />
          </div>
          <span className="font-bold text-lg text-slate-900">CAS Shield</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const active = isActive(item.path)
          return (
            <motion.div key={index} whileHover={{ x: 4 }}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  active
                    ? 'bg-brand/10 text-brand font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 transition">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-slate-200 md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <aside className="relative w-64 h-full bg-white flex flex-col">
            {sidebarContent}
          </aside>
        </motion.div>
      )}
    </>
  )
}

export default DashboardSidebar
