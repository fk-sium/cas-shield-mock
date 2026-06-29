import React from 'react'
import { motion } from 'framer-motion'
import { InterviewProvider } from '../context/InterviewContext'
import PermissionStep from '../components/interview/PermissionStep'
import SystemCheck from '../components/interview/SystemCheck'
import RulesStep from '../components/interview/RulesStep'
import InterviewStep from '../components/interview/InterviewStep'
import FinishPage from '../components/interview/FinishPage'

export default function Interview(){
  return (
    <InterviewProvider>
      <InnerInterview />
    </InterviewProvider>
  )
}

function InnerInterview(){
  const { step } = require('../context/InterviewContext').useInterview()

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-[70vh] max-w-7xl mx-auto px-6 py-10">
      {step === 'permission' && <PermissionStep />}
      {step === 'system' && <SystemCheck />}
      {step === 'rules' && <RulesStep />}
      {step === 'interview' && <InterviewStep />}
      {step === 'finish' && <FinishPage />}
    </motion.div>
  )
}
