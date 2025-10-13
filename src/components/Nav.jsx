
import React from 'react'

export default function Nav({ route, onNavigate }) {
  return (
    <div className="fixed top-0 z-40 w-full" style={{ fontFamily: 'var(--font-stack, inherit)' }}>
      <div className="px-8 md:px-12 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="text-[18px] md:text-[20px] font-semibold cursor-pointer text-white tracking-[0.15em]">
          {/* real space avoids showing \u00A0 */}
          Atelier{' '}1.04
        </button>
        <nav className="flex items-center gap-6 text-[13px] text-white uppercase tracking-[0.25em]">
          {[
            { k: 'work', label: 'Work' },
            { k: 'editions', label: 'Editions' },
            { k: 'commission', label: 'Commission' },
            { k: 'info', label: 'Information' },
          ].map((item) => (
            <button
              key={item.k}
              onClick={() => onNavigate(item.k === 'work' ? 'home' : item.k)}
              className={`hover:opacity-70 ${route === item.k ? 'underline underline-offset-4' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
