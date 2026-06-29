import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import FAQItem from '../components/FAQItem'

export default function Landing(){
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Practice Your Pre-CAS Interview Before It Matters</h1>
          <p className="mt-4 text-slate-600">Experience a realistic recorded interview simulation designed to help students prepare confidently for university Pre-CAS interviews.</p>
          <div className="mt-6 flex gap-4">
            <a href="/interview"><Button>Start Practice</Button></a>
            <a href="#how"><Button variant="ghost">Learn More</Button></a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="text-sm text-slate-600">Modern UI • Realistic Questions • Recording</div>
            <div className="text-sm text-slate-600">Timing Guidance • Helpful Feedback • Track Progress</div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white card-shadow">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold">Quick Preview</h3>
              <p className="text-sm text-slate-600 mt-2">Short simulation of the interview environment with recording and timers.</p>
              <div className="mt-4 flex gap-2">
                <div className="w-16 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand font-medium">REC</div>
                <div className="w-16 h-10 rounded-lg bg-gray-100 flex items-center justify-center">00:45</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3"/></svg>} title="Realistic Questions">Curated, timed questions to simulate the Pre-CAS experience.</FeatureCard>
          <FeatureCard icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2H4a2 2 0 01-2-2V9.618a2 2 0 01.447-1.894L7 10"/></svg>} title="Recording">Record answers and review them to improve delivery and timing.</FeatureCard>
          <FeatureCard icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"/></svg>} title="Progress Tracking">Track attempts and see progress over time with a progress card.</FeatureCard>
        </div>
      </section>

      <section id="how" className="mt-16">
        <h2 className="text-2xl font-bold">How it Works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 card-shadow text-center">
            <div className="text-2xl">1</div>
            <h4 className="mt-3 font-semibold">Start a Practice</h4>
            <p className="text-sm text-slate-600 mt-2">Begin a timed simulation with curated questions.</p>
          </div>
          <div className="bg-white rounded-xl p-6 card-shadow text-center">
            <div className="text-2xl">2</div>
            <h4 className="mt-3 font-semibold">Record Answers</h4>
            <p className="text-sm text-slate-600 mt-2">Record your responses with a visible timer.</p>
          </div>
          <div className="bg-white rounded-xl p-6 card-shadow text-center">
            <div className="text-2xl">3</div>
            <h4 className="mt-3 font-semibold">Review & Improve</h4>
            <p className="text-sm text-slate-600 mt-2">Playback answers and track improvements across attempts.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FAQItem q="Is this free to use?" a="This mock is a demo. Integrate it into a full product for production use." />
          <FAQItem q="Can I use my webcam?" a="Yes — in a real environment you would grant camera permissions to record answers." />
          <FAQItem q="Are questions customizable?" a="Yes — you can add custom question sets in an extended version." />
          <FAQItem q="How long are attempts?" a="Default timers guide typical Pre-CAS durations — customizable in settings." />
        </div>
      </section>

      <footer className="mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} CAS Shield Mock</div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-slate-600">Privacy</a>
            <a href="#" className="text-sm text-slate-600">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
