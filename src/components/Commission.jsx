
import React from 'react'

export default function Commission() {
  return (
    <section className="pt-20 pb-10 text-white">
      <div className="px-8 md:px-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl tracking-[0.2em] uppercase">Private Commissions</h2>
          <p className="mt-3 text-white/80">A small number of appointments are accepted each year. Personal display rights included. Commercial licensing available upon request.</p>
          <ul className="mt-6 text-sm text-white/80 space-y-1">
            <li>Standard size: 80 × 60 cm</li>
            <li>Reservation deposit: 30%</li>
            <li>Framing and international shipping quoted separately</li>
          </ul>
          <p className="mt-4 text-white/70 italic">Commissioned works start from €3,000 for the standard size; larger formats are priced upon request.</p>
        </div>
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[15px]">First Name</label>
              <input type="text" className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white" />
            </div>
            <div>
              <label className="block text-[15px]">Last Name</label>
              <input type="text" className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white" />
            </div>
          </div>
          <div>
            <label className="block text-[15px]">Email</label>
            <input type="email" className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"/>
          </div>
          <div>
            <label className="block text-[15px]">Indicative Budget (EUR)</label>
            <input type="number" className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"/>
          </div>
          <div>
            <label className="block text-[15px]">Brief</label>
            <textarea className="mt-2 w-full min-h-[120px] bg-transparent border border-white/30 focus:border-white focus:ring-0 px-3 py-3 text-white"/>
          </div>
          <button className="border border-white px-8 py-3 hover:bg-white hover:text-black">Request availability</button>
        </form>
      </div>
    </section>
  )
}
