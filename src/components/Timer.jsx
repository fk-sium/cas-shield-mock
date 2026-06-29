import React, {useEffect, useState, useRef} from 'react'

export default function Timer({seconds: initial=0, running=true, className=''}){
  const [seconds, setSeconds] = useState(initial)
  const timerRef = useRef(null)

  useEffect(()=>{
    if(running){
      timerRef.current = setInterval(()=> setSeconds(s => s+1), 1000)
    }
    return ()=> clearInterval(timerRef.current)
  },[running])

  const mm = String(Math.floor(seconds/60)).padStart(2,'0')
  const ss = String(seconds%60).padStart(2,'0')
  return (
    <div className={`text-sm text-slate-700 ${className}`}>
      {mm}:{ss}
    </div>
  )
}
