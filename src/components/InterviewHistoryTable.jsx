import React from 'react'
import { motion } from 'framer-motion'
import { MoreHorizontal, Eye, Trash2, Download } from 'lucide-react'

const InterviewHistoryTable = () => {
  const interviews = [
    {
      id: 1,
      date: 'Jun 28, 2026',
      pack: 'Business Management',
      duration: '12 min',
      score: '85%',
      status: 'Completed',
    },
    {
      id: 2,
      date: 'Jun 26, 2026',
      pack: 'Economics',
      duration: '15 min',
      score: '78%',
      status: 'Reviewed',
    },
    {
      id: 3,
      date: 'Jun 24, 2026',
      pack: 'Medicine',
      duration: '10 min',
      score: '92%',
      status: 'Completed',
    },
    {
      id: 4,
      date: 'Jun 22, 2026',
      pack: 'Law',
      duration: '14 min',
      score: 'Pending',
      status: 'Pending',
    },
  ]

  const statusColors = {
    Completed: 'bg-emerald-100 text-emerald-700',
    Reviewed: 'bg-blue-100 text-blue-700',
    Pending: 'bg-amber-100 text-amber-700',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white rounded-xl card-shadow border border-slate-100 overflow-hidden"
      id="history"
    >
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Interview History</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Question Pack</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Score</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview, index) => (
              <motion.tr
                key={interview.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="border-b border-slate-100 hover:bg-slate-50/50 transition"
              >
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">{interview.date}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{interview.pack}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{interview.duration}</td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{interview.score}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[interview.status]}`}>
                    {interview.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition" title="View">
                      <Eye size={16} className="text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition" title="Download">
                      <Download size={16} className="text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition" title="Delete">
                      <Trash2 size={16} className="text-slate-400" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default InterviewHistoryTable
