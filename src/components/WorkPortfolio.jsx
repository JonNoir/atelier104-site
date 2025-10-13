
import React from 'react'
import { SERIES } from '../data/siteData'
import useActiveWorkIndex from '../hooks/useActiveWorkIndex'

export default function WorkPortfolio({ si, setSi }) {
  const sel = SERIES[si]
  const figureIds = sel.works.map((w) => `work-${w.id}`)
  const active = useActiveWorkIndex(figureIds)
  const current = sel.works[active] || sel.works[0]

  return (
    <section className="pt-20 pb-10 text-white">
      <div className="px-8 md:px-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-9 order-2 md:order-1">
          {sel.works.map((w) => (
            <figure id={`work-${w.id}`} key={w.id} className="mb-12">
              <img src={w.image} alt={w.title} className="w-full h-[78vh] object-cover" />
            </figure>
          ))}
        </div>
        <aside className="col-span-12 md:col-span-3 order-1 md:order-2 md:pl-4">
          <div className="md:sticky md:top-24 text-[13px] text-white/85 space-y-4">
            <nav className="flex md:flex-col gap-3 text-[13px]">
              {SERIES.map((p, idx) => (
                <button key={p.id} onClick={() => setSi(idx)} className={`text-left underline-offset-4 ${idx===si? 'underline':''}`}>{p.serie}</button>
              ))}
            </nav>
            <div className="pt-2 text-white"><span className="font-medium">{current.title}</span></div>
            <div>{current.year} • {current.medium} • {current.size}</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
