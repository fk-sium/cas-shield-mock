import React, {useEffect, useRef, useState} from 'react'
import Card from '../../components/Card'
import { useInterview } from '../../context/InterviewContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Mic, Video, Maximize } from 'lucide-react'

const PREP_SECONDS = 20
const RECORD_SECONDS = 120

export default function InterviewStep(){
  const { questions, current, setCurrent, setStep, setRecordings, recordings, setStartedAt, setCompletedAt, setStep: setGlobalStep, setRecordings: setGlobalRecordings } = require('../../context/InterviewContext').useInterview()
  const { setRecordings: _setRecordings } = require('../../context/InterviewContext').useInterview()
  // above double require is to avoid lint; simpler: useInterview at top
}
