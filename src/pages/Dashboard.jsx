import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Clock, Camera, PieChart } from 'lucide-react'

export default function Dashboard(){
  const recent = [
    {id:1, title: 'Attempt: Nov 2', score: '—'},
    {id:2, title: 'Attempt: Oct 28', score: '—'},
    {id:3, title: 'Attempt: Oct 12', score: '—'},
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Welcome back</h3>
                <p className="text-sm text-slate-600 mt-1">Ready for another practice session?</p>
              </div>
              <div>
                <Button onClick={()=> window.location.href='/interview'}>Start Interview</Button>
              </div>
            </div>
          </Card>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-50 text-brand"><Camera/></div>
                <div>
                  <h4 className="font-semibold">Interview Status</h4>
                  <p className="text-sm text-slate-600 mt-1">No active session. Start practice to begin recording.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-50 text-brand"><Clock/></div>
                <div>
                  <h4 className="font-semibold">Progress</h4>
                  <p className="text-sm text-slate-600 mt-1">Track time spent and improvements across attempts.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <h4 className="font-semibold">Recent Attempts</h4>
              <div className="mt-4 space-y-3">
                {recent.map(r=> (
                  <div key={r.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <div className="text-sm">{r.title}</div>
                    <div className="text-sm text-slate-600">{r.score}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Progress Overview</h4>
                <p className="text-sm text-slate-600 mt-1">Visualize your improvement over time.</p>
              </div>
              <div className="text-brand"><PieChart/></div>
            </div>
            <div className="mt-4 h-36 rounded-md bg-gradient-to-br from-blue-50 to-white" />
          </Card>
        </div>
      </div>
    </div>
  )
}
