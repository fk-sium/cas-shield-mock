import React, {useState} from 'react'
import Card from '../components/Card'
import WebcamPlaceholder from '../components/WebcamPlaceholder'
import Timer from '../components/Timer'
import Button from '../components/Button'

const questions = [
  'Tell us about yourself and why you chose your course.',
  'Describe a time you worked in a team to solve a problem.',
  'How do you manage time when you have multiple deadlines?'
]

export default function Interview(){
  const [index, setIndex] = useState(0)
  const [prepRunning, setPrepRunning] = useState(false)
  const [recording, setRecording] = useState(false)

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <WebcamPlaceholder />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-slate-600">Preparation</div>
                    <div className="text-sm"><Timer seconds={prepRunning?5:0} running={prepRunning} /></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={prepRunning? 'ghost':'primary'} onClick={()=> setPrepRunning(!prepRunning)}>{prepRunning? 'Stop Prep':'Start Prep'}</Button>
                    <Button variant={recording? 'ghost':'primary'} onClick={()=> setRecording(!recording)}>{recording? 'Stop Recording':'Start Recording'}</Button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-80">
                <Card>
                  <h4 className="font-semibold">Question</h4>
                  <div className="mt-3 text-slate-700">{questions[index]}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Recording: <span className="font-medium"><Timer seconds={recording?12:0} running={recording} /></span></div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button onClick={()=> setIndex(i => Math.max(0, i-1))}>Previous</Button>
                    <Button onClick={()=> setIndex(i => Math.min(questions.length-1, i+1))}>Next Question</Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <h4 className="font-semibold">Tips</h4>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              <li>Keep answers structured (Intro, Example, Reflection).</li>
              <li>Practice under timed conditions.</li>
              <li>Record and review to improve clarity and pacing.</li>
            </ul>
            <div className="mt-6">
              <Button onClick={()=> alert('Submission simulated')}>Submit Attempt</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
