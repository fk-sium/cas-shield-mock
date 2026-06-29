import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

export default function Nav(){
  const loc = useLocation()
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-blue-100 text-brand">
            <ShieldCheck />
          </div>
          <span className="font-semibold text-lg">CAS Shield Mock</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className={`text-sm ${loc.pathname === '/' ? 'text-brand font-semibold' : 'text-slate-600'}`}>Home</Link>
          <Link to="/dashboard" className={`text-sm ${loc.pathname === '/dashboard' ? 'text-brand font-semibold' : 'text-slate-600'}`}>Dashboard</Link>
          <Link to="/login" className="text-sm text-slate-600">Login</Link>
          <Link to="/interview" className="ml-4 inline-flex items-center px-3 py-2 rounded-md bg-brand text-white text-sm shadow hover:opacity-95">Start Practice</Link>
        </nav>
      </div>
    </header>
  )
}
