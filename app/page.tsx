"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Page() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : ""
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    setIsMobile(mobile)
  }, [])

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(40)
    }
  }

  return (
    <main 
      style={{ colorScheme: "light" }} 
      className="light min-h-dvh flex flex-col items-center justify-between bg-[#f2f5f9] px-4 py-6 text-slate-900 font-sans"
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-5 my-auto">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Image
            src="/Carabinieri.png"
            alt="Logo dell'Arma dei Carabinieri"
            width={100}
            height={100}
            priority
            className="h-20 w-auto object-contain mb-2"
          />
          <h1 className="text-xl font-extrabold tracking-tight text-[#0f172a] uppercase">
            Stazione Carabinieri
          </h1>
          <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[#d32f2f] to-[#f59e0b]" />
          <p className="mt-2 text-xs font-medium text-slate-500">
            Servizio rapido di localizzazione e contatto
          </p>
        </header>

        {/* Avviso Desktop */}
        {!isMobile && (
          <div className="w-full rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-center text-xs font-medium text-amber-800 shadow-sm">
            💻 Navighi da desktop? Per telefonare usa uno smartphone.
          </div>
        )}

        {/* Blocco 1: Emergenza 112 */}
        <div className="w-full rounded-3xl bg-white p-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-slate-100/80">
          <a
            href="tel:112"
            onClick={triggerHaptic}
            className="relative flex items-center justify-start gap-4 rounded-2xl bg-gradient-to-r from-[#dc2626] via-[#b91c1c] to-[#991b1b] p-4 text-white shadow-[0_8px_20px_-4px_rgba(220,38,38,0.4)] transition active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#dc2626] shadow-md ring-4 ring-white/20">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-100/90">
                Emergenza
              </span>
              <span className="text-2xl font-black tracking-tight text-white leading-tight">
                CHIAMA 112
              </span>
            </div>
          </a>
        </div>

        {/* Blocco 2: Trova Stazione */}
        <a
          href="https://www.google.com/maps/search/Stazione+Carabinieri+aperte+ora/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerHaptic}
          className="relative w-full overflow-hidden rounded-3xl bg-[#111827] p-5 text-white shadow-lg transition active:scale-[0.98] border border-slate-800"
        >
          {/* Overlay Vettoriale Mappa */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 400 150" preserveAspectRatio="none">
              <path d="M -50,30 Q 100,80 450,10 M 200,-20 Q 180,100 220,180 M -20,100 Q 150,40 420,130" stroke="#ffffff" strokeWidth="3" fill="none" />
              <path d="M 50,0 V 150 M 150,0 V 150 M 280,0 V 150 M 0,50 H 400 M 0,110 H 400" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-3">
            {/* Pin Mappa */}
            <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
              <div className="absolute left-0 top-1 text-red-500 drop-shadow">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="absolute right-0 bottom-1 text-red-600 scale-125 drop-shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>

            {/* Testo */}
            <div className="flex flex-col text-center flex-1">
              <span className="text-base font-extrabold tracking-tight leading-snug uppercase">
                Trova Stazione Più Vicina
              </span>
              <span className="text-[11px] font-medium text-slate-300 mt-0.5">
                Apre Google Maps ed esegue subito la ricerca
              </span>
            </div>

            {/* Icona Bussola */}
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
              <svg className="w-5 h-5 fill-current transform rotate-45" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
          </div>
        </a>

        {/* Blocco 3: Anti Violenza e Stalking 1522 */}
        <a
          href="tel:1522"
          onClick={triggerHaptic}
          className="flex w-full items-center justify-between rounded-3xl bg-gradient-to-r from-[#f3e8ff] via-[#fae8ff] to-[#f472b6]/20 p-4 shadow-sm border border-purple-100 transition active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            {/* Nastro Viola */}
            <div className="text-purple-600">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 2.2 1.3 4.1 3.2 5l-4.7 8.5c-.3.5-.1 1.1.4 1.4.2.1.4.1.6.1.3 0 .7-.2.9-.5l4.2-7.5 4.2 7.5c.2.3.5.5.9.5.2 0 .4 0 .6-.1.5-.3.7-.9.4-1.4l-4.7-8.5c1.9-.9 3.2-2.8 3.2-5C16.5 4 14.5 2 12 2zm0 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
            {/* Icona Telefono Quadrata */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7e22ce] text-white shadow-sm">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            {/* Testo */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7e22ce]">
                Anti Violenza e Stalking
              </span>
              <span className="text-sm font-black text-[#4c1d95]">
                Chiama il 1522
              </span>
            </div>
          </div>
        </a>

        {/* Altri Numeri di Emergenza */}
        <div className="flex flex-col items-center gap-2.5 w-full pt-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            Altri numeri di emergenza:
          </span>
          <div className="flex w-full justify-center gap-3">
            <a
              href="tel:118"
              onClick={triggerHaptic}
              className="flex items-center gap-1.5 rounded-full bg-[#e0f2fe] px-4 py-2 text-xs font-black text-[#0369a1] shadow-sm transition active:scale-95"
            >
              🚑 118 Sanità
            </a>
            <a
              href="tel:115"
              onClick={triggerHaptic}
              className="flex items-center gap-1.5 rounded-full bg-[#ffe4e6] px-4 py-2 text-xs font-black text-[#be123c] shadow-sm transition active:scale-95"
            >
              🚒 115 Vigili del Fuoco
            </a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-6 flex flex-col items-center text-center text-[10px] text-slate-400 max-w-sm">
        <p className="font-extrabold uppercase tracking-widest text-slate-500">
          Servizio informativo per il cittadino
        </p>
        <p className="mt-1 leading-tight">
          Applicazione dimostrativa non ufficiale. Loghi e marchi appartengono ai legittimi proprietari.
        </p>
      </footer>
    </main>
  )
}
