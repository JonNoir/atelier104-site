import React, { useState } from 'react';
import { CONTACT } from '../data/siteData';

// TIP: move this into an env var when you can (Vite: import.meta.env.VITE_INTAKE_URL)
const INTAKE_URL = 'https://script.google.com/macros/s/AKfycbyEhrrzumYNNxWYIwMsUGz5kEQ8S-eBXP39axNCDaMRI-OSZA9Qlae-j1AMpwjWBGomiQ/exec';

export default function Commission() {
  const [form, setForm] = useState({ first: '', last: '', email: '', budget: '', brief: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [err, setErr] = useState('');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErr('');

    // simple client-side guard
    if (!form.first || !form.last || !form.email) {
      setStatus('error');
      setErr('Please fill your first name, last name, and email.');
      return;
    }

    const payload = {
      ...form,
      pageURL: window.location.href,
      ua: (typeof navigator !== 'undefined' && navigator.userAgent) ? navigator.userAgent : '',
    };

    // timeout safety (Apps Script can be slow if cold)
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000); // 15s

    try {
      const r = await fetch(INTAKE_URL /* + '?x-secret=YOUR_SECRET' if you added one */, {
        method: 'POST',
        // IMPORTANT: no headers so the browser doesn't preflight (CORS)
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });
      clearTimeout(t);

      // Apps Script should return {"ok": true}
      const json = await r.json().catch(() => ({}));
      if (!r.ok || json.ok !== true) {
        throw new Error(json.error || `Submission failed (HTTP ${r.status})`);
      }

      setStatus('sent');
      setForm({ first: '', last: '', email: '', budget: '', brief: '' });
      e.currentTarget.reset?.();
    } catch (error) {
      clearTimeout(t);
      setStatus('error');
      setErr(error.name === 'AbortError' ? 'Request timed out, please try again.' : (error.message || 'Something went wrong'));
      console.error(error);
    }
  };

  return (
    <section className="pt-20 pb-10 text-white">
      <div className="px-8 md:px-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl tracking-[0.2em] uppercase">Private Commissions</h2>
          <p className="mt-3 text-white/80">
            A small number of appointments are accepted each year. Personal display rights included.
            Commercial licensing available upon request.
          </p>
          <ul className="mt-6 text-sm text-white/80 space-y-1">
            <li>Standard size: 80 × 60 cm</li>
            <li>Reservation deposit: 30%</li>
            <li>Framing and international shipping quoted separately</li>
          </ul>
          <p className="mt-4 text-white/70 italic">
            Commissioned works start from €2,500 for the standard size; larger formats are priced upon request.
          </p>

          {status === 'sent' && (
            <div className="mt-6 text-sm text-green-400" role="status" aria-live="polite">
              Request received — thank you! We’ll reply to <span className="underline">{form.email || 'your email'}</span> shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 text-sm text-red-400" role="alert">
              {err || 'Could not submit. Please try again.'}
            </div>
          )}
        </div>

        <form className="space-y-8" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[15px]" htmlFor="first">First Name</label>
              <input
                id="first" name="first" type="text" required value={form.first} onChange={onChange}
                className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-[15px]" htmlFor="last">Last Name</label>
              <input
                id="last" name="last" type="text" required value={form.last} onChange={onChange}
                className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-[15px]" htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" required value={form.email} onChange={onChange}
              className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-[15px]" htmlFor="budget">Indicative Budget (EUR)</label>
            <input
              id="budget" name="budget" type="number" inputMode="numeric" value={form.budget} onChange={onChange}
              className="mt-2 w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 px-0 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-[15px]" htmlFor="brief">Brief</label>
            <textarea
              id="brief" name="brief" rows={5} value={form.brief} onChange={onChange}
              className="mt-2 w-full min-h-[120px] bg-transparent border border-white/30 focus:border-white focus:ring-0 px-3 py-3 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="border border-white px-8 py-3 hover:bg-white hover:text-black disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Request availability'}
          </button>
        </form>
      </div>
    </section>
  );
}
