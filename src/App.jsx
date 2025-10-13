
import React, { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import HomeLanding from './components/HomeLanding.jsx'
import WorkPortfolio from './components/WorkPortfolio.jsx'
import Editions from './components/Editions.jsx'
import Commission from './components/Commission.jsx'
import About from './components/About.jsx'
import { SERIES } from './data/siteData.js'

function runSelfTests() {
  try {
    if (!Array.isArray(SERIES)) console.warn('[TEST] SERIES is not an array')
    SERIES.forEach((s) => {
      if (!/^1\.0\d+$/.test(s.serie)) console.warn(`[TEST] Serie not in 1.0X format: ${s.serie}`)
      if (!Array.isArray(s.works) || s.works.length === 0) console.warn(`[TEST] Serie ${s.serie} has no works`)
      const ed = s.edition
      if (ed) {
        const nums = ed.numbers.map((n) => n.no)
        const uniq = new Set(nums)
        if (uniq.size !== nums.length) console.warn(`[TEST] Duplicate edition numbers in ${s.serie}`)
        if (ed.numbers.length !== ed.editionSize) console.warn(`[TEST] numbers length != editionSize in ${s.serie}`)
      }
    })
  } catch (e) {
    console.warn('[TEST] self-tests threw:', e)
  }
}

export default function App() {
  const [route, setRoute] = useState('home')
  const [selectedSeries, setSelectedSeries] = useState(0)

  useEffect(() => { runSelfTests() }, [])

  return (
    <div className="min-h-screen bg-canvas text-white text-[15px] leading-relaxed" style={{ fontFamily: 'var(--font-stack, inherit)' }}>
      <Nav route={route} onNavigate={(r) => setRoute(r)} />
      <main>
        {route === 'home' && (
          <HomeLanding
            series={SERIES.map((s) => ({ label: s.serie }))}
            onSelect={(i) => { setSelectedSeries(i); setRoute('work') }}
          />
        )}
        {route === 'work' && <WorkPortfolio si={selectedSeries} setSi={setSelectedSeries} />}
        {route === 'editions' && <Editions si={selectedSeries} setSi={setSelectedSeries} />}
        {route === 'commission' && <Commission />}
        {route === 'info' && <About />}
      </main>
    </div>
  )
}
