import React from 'react'
import { motion } from 'framer-motion'
import { Play, History } from 'lucide-react'
import Button from './Button'

const WelcomeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-brand via-blue-500 to-brand/80 rounded-2xl p-8 text-white card-shadow-lg overflow-hidden relative"
    >
      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ready for your next Mock Interview?
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Practice in a realistic Pre-CAS interview environment before your real university interview.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button
              className="bg-white text-brand hover:bg-blue-50 shadow-lg"
              onClick={() => window.location.href = '/interview'}
            >
              <Play size={18} />
              Start Practice
            </Button>
            <Button
              variant="ghost"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('history').scrollIntoView({ behavior: 'smooth' })}
            >
              <History size={18} />
              View History
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square bg-gradient-to-br from-white/20 to-transparent rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 mb-4">
                <Play size={48} className="text-white" />
              </div>
              <p className="text-white/80 text-sm">Interview Simulation</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WelcomeCard
