
import React from 'react'

export default function HomeLanding({ series, onSelect }) {
  const list = Array.isArray(series) ? series : []
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Home">
      <div className="relative z-10 px-8 md:px-12 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <div
          className="w-full text-center text-white/90 overflow-hidden"
          style={{ fontSize: 'clamp(12px, 2.2vw, 36px)', letterSpacing: '0.24em', maxWidth: '95vw' }}
        >
          Destruction is the observation of creation at ground zero
        </div>
        <div className="mt-32 flex gap-24 md:gap-32 select-none justify-center">
          {list.map((s, i) => (
            <button
              key={s.label || i}
              onClick={() => (typeof onSelect === 'function' ? onSelect(i) : null)}
              className="text-[14px] md:text-[18px] tracking-[0.3em] uppercase hover:opacity-70"
              aria-label={`Open Serie ${s.label || i}`}
            >
              {s.label || `1.${i}`}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
