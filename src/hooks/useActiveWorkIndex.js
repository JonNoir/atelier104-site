
import { useEffect, useRef, useState } from 'react'

export default function useActiveWorkIndex(ids) {
  const [active, setActive] = useState(0)
  const lastIdx = useRef(0)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        let best = { idx: lastIdx.current, ratio: 0 }
        entries.forEach((e) => {
          const idx = els.findIndex((el) => el === e.target)
          if (e.intersectionRatio > best.ratio) best = { idx, ratio: e.intersectionRatio }
        })
        if (best.ratio >= 0.6 && best.idx !== lastIdx.current) {
          lastIdx.current = best.idx
          setActive(best.idx)
        }
      },
      { root: null, threshold: [0.25, 0.5, 0.6, 0.75, 0.9], rootMargin: '0px 0px -10% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids.join('|')])

  return active
}
