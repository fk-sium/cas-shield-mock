import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Login(){
  const nav = useNavigate()
  return (
    <div className="max-w-md mx-auto mt-12 px-6">
      <Card>
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-sm text-slate-600">Log in to track your progress and access saved attempts.</p>
        <form className="mt-6 grid gap-3">
          <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="Email" />
          <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="Password" type="password" />
          <div className="flex items-center justify-between mt-2">
            <label className="text-sm text-slate-600"><input type="checkbox" className="mr-2"/> Remember</label>
            <a className="text-sm text-brand" href="#">Forgot?</a>
          </div>
          <div className="mt-4">
            <Button onClick={(e)=>{e.preventDefault(); nav('/dashboard')}}>Sign in</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
