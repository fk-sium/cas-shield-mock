import React, {createContext, useContext, useEffect, useMemo, useState, useRef} from 'react'

const InterviewContext = createContext(null)

export function useInterview(){
  return useContext(InterviewContext)
}

const DUMMY_QUESTIONS = [
  'Why did you choose Kingston University?',
  'Why did you choose this course of Business Management?',
  'Who is funding your studies and how will you support yourself?',
  'Why did you not choose to study in Bangladesh or your home country?',
  'What are your future career plans after graduation?',
  'How will this course help you achieve your career objectives?',
  'Why should we believe you are a genuine student and intend to study?',
  'Tell us about a time you demonstrated leadership in a professional or academic setting.',
  'How do you plan to manage your finances and accommodation while studying?',
  'Describe a challenge you faced and how it shaped your learning.'
]

export function InterviewProvider({children}){
  const [step, setStep] = useState('permission') // permission | system | rules | interview | finish
  const [permissions, setPermissions] = useState({camera:false, microphone:false})
  const [systemChecks, setSystemChecks] = useState({camera:false, microphone:false, internet:navigator.onLine, fullscreen: document.fullscreenEnabled, browser:true})
  const [questions] = useState(DUMMY_QUESTIONS)
  const [current, setCurrent] = useState(0)
  const [recordings, setRecordings] = useState([])
  const [startedAt, setStartedAt] = useState(null)
  const [completedAt, setCompletedAt] = useState(null)

  useEffect(()=>{
    function onOnline(){ setSystemChecks(s => ({...s, internet:true})) }
    function onOffline(){ setSystemChecks(s => ({...s, internet:false})) }
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return ()=>{
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  },[])

  const value = useMemo(()=>({
    step, setStep,
    permissions, setPermissions,
    systemChecks, setSystemChecks,
    questions, current, setCurrent,
    recordings, setRecordings,
    startedAt, setStartedAt,
    completedAt, setCompletedAt
  }),[step, permissions, systemChecks, questions, current, recordings, startedAt, completedAt])

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  )
}

export default InterviewContext
