
import React from 'react'
import { CONTACT } from '../data/siteData'

export default function About() {
  return (
    <section className="pt-24 pb-16 text-white px-8 md:px-12">
      <div className="max-w-4xl">
        <p className="text-[18px] leading-8">
          Atelier 1.04 is a conceptual art studio based in Prague. Its practice is rooted in a life lived between worlds—
          a perspective informed by its founder, the French artist Jonathan. Born in Cameroon and raised across continents,
          the artist developed a critical lens on the intersection of cultural and socio-economic realities. Working primarily
          in large-format ballpoint pen, Atelier 1.04's work deconstructs the core narratives of modern perception, investigating
          themes from the commodification of identity in the digital age to the corruption of national mythologies. The current
          series, <em>21st Century Pantheon</em>, is in development.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          <div>
            <div className="text-[18px]">Contact</div>
            <div className="mt-3"><a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
          </div>
          <div>
            <div className="text-[18px]">Instagram</div>
            <div className="mt-3"><a className="underline" href={CONTACT.instagram} target="_blank" rel="noreferrer">@atelier1.04</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
