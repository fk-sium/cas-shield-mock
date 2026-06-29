import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Play, BarChart3 } from 'lucide-react'

const ActivityTimeline = () => {
  const activities = [
    {
      type: 'completed',
      title: 'Mock Interview Completed',
      description: 'Business Management - 10 Questions',
      time: '2 hours ago',
      icon: CheckCircle2,
    },
    {
      type: 'started',
      title: 'Interview Started',
      description: 'Economics - 15 Questions',
      time: '4 hours ago',
      icon: Play,
    },
    {
      type: 'report',
      title: 'Performance Report Generated',
      description: 'Overall Score: 82%',
      time: '1 day ago',
      icon: BarChart3,
    },
  ]

  return (
    <div className="bg-white rounded-xl p-6 card-shadow border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="p-2 rounded-full bg-brand/10 text-brand">
                  <Icon size={18} />
                </div>
                {index < activities.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-brand/30 to-transparent mt-2" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <p className="font-medium text-slate-900">{activity.title}</p>
                <p className="text-sm text-slate-500 mt-1">{activity.description}</p>
                <p className="text-xs text-slate-400 mt-2">{activity.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ActivityTimeline
