import React from 'react'
import { motion } from 'framer-motion'
import { Play, BarChart3, Clock, Zap } from 'lucide-react'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardNav from '../components/DashboardNav'
import StatCard from '../components/StatCard'
import WelcomeCard from '../components/WelcomeCard'
import ActivityTimeline from '../components/ActivityTimeline'
import SuggestedPractice from '../components/SuggestedPractice'
import QuickActionCard from '../components/QuickActionCard'
import LatestReportCard from '../components/LatestReportCard'
import DailyTips from '../components/DailyTips'
import InterviewHistoryTable from '../components/InterviewHistoryTable'

export default function Dashboard() {
  const quickActions = [
    {
      icon: Play,
      title: 'Start New Interview',
      description: 'Begin a fresh mock interview session',
      action: () => window.location.href = '/interview',
    },
    {
      icon: BarChart3,
      title: 'View Reports',
      description: 'Analyze your performance metrics',
      action: () => {},
    },
    {
      icon: Clock,
      title: 'Question Bank',
      description: 'Browse all available questions',
      action: () => {},
    },
    {
      icon: Zap,
      title: 'Settings',
      description: 'Customize your preferences',
      action: () => {},
    },
  ]

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <DashboardSidebar />

      <div className="flex-1 md:ml-64">
        <DashboardNav />

        <main className="p-4 md:p-8 md:pt-6">
          {/* Welcome Section */}
          <WelcomeCard />

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <StatCard
              icon={Play}
              label="Completed Interviews"
              value="14"
              trend="2 new"
              delay={0.1}
            />
            <StatCard
              icon={BarChart3}
              label="Average Score"
              value="84%"
              trend="+3 pts"
              delay={0.2}
            />
            <StatCard
              icon={Clock}
              label="Practice Hours"
              value="26h"
              trend="+4.2h"
              delay={0.3}
            />
            <StatCard
              icon={Zap}
              label="Current Streak"
              value="7 days"
              trend="On fire! 🔥"
              delay={0.4}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Activity Timeline */}
              <ActivityTimeline />

              {/* Latest Report */}
              <LatestReportCard />

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <QuickActionCard
                      key={index}
                      icon={action.icon}
                      title={action.title}
                      description={action.description}
                      onClick={action.action}
                      delay={0.5 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Interview History */}
              <InterviewHistoryTable />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Suggested Practice */}
              <SuggestedPractice />

              {/* Daily Tips */}
              <DailyTips />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white card-shadow"
              >
                <p className="text-sm text-slate-300 mb-2">Next Milestone</p>
                <p className="text-3xl font-bold mb-2">50 hrs</p>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div className="bg-brand h-2 rounded-full" style={{ width: '72%' }} />
                </div>
                <p className="text-xs text-slate-400">72% of the way to your goal</p>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500"
          >
            <p>© 2026 CAS Shield Mock. All rights reserved.</p>
          </motion.footer>
        </main>
      </div>
    </div>
  )
}
