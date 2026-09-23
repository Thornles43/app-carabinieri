"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { EmergencyCallButton } from "@/components/emergency-call-button"

// Icona SVG per il servizio Anti Violenza e Stalking
function AntiViolenceRibbonSVG({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2C9 2 7 4 7 7c0 3 2.5 6 5 9 2.5-3 5-6 5-9 0-3-2-5-5-5z" fill="currentColor" fillOpacity="0.2" />
      <path d="M8.5 13.5L4 21" />
      <path d="M15.5 13.5L20 21" />
      <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  )
}

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
    <main className="light flex min-h-dvh flex-col items-center justify-between bg-[#f4f6fb] px-6 py-6 text-slate-900 font-sans">
      {/* Header */}
      <header className="flex w-full max-w-md flex-col items-center text-center pt-2">
        <Image
          src="/Carabinieri.png"
          alt="Logo dell'Arma dei Carabinieri"
          width={120}
          height={120}
          priority
          className="mb-2 h-24 w-auto object-contain"
        />
        <h1 className="text-balance text-2xl font-black tracking-wider text-[#0b1425] uppercase">
          Stazione Carabinieri
        </h1>
        <div className="mt-1 flex gap-1 h-1 w-20 rounded-full bg-gradient-to-r from-[#c1121f] to-[#d4af37]" aria-hidden="true" />
        <p className="mt-2 text-sm font-medium text-[#4a556b] leading-tight">
          Servizio rapido di localizzazione e contatto
        </p>
      </header>

      {/* Avviso per dispositivi Desktop */}
      {!isMobile && (
        <div className="mt-3 w-full max-w-md rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2 shadow-sm">
          <span>💻</span>
          <span>Navighi da desktop? Per telefonare usa uno smartphone.</span>
        </div>
      )}

      {/* Sezione Azioni Principali */}
      <section className="mt-4 flex w-full max-w-md flex-col gap-4" aria-label="Azioni disponibili">
        {/* Blocco Emergenza 112 */}
        <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="w-full transform active:scale-95 transition-all">
            <EmergencyCallButton />
          </div>
        </div>

        {/* Pulsante Ricerca Automatica Diretta su Google Maps */}
        <a
          href="https://www.google.com/maps/search/Stazione+Carabinieri+aperte+ora/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerHaptic}
          className="group relative flex w-full flex-col items-center justify-center rounded-3xl bg-gradient-to-b from-[#1b2a49] to-[#0b1425] px-6 py-5 text-center shadow-[0_8px_16px_rgba(11,20,37,0.25)] transition-all active:translate-y-0.5 active:shadow-[0_4px_8px_rgba(11,20,37,0.25)] border border-white/10"
        >
          <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
            📍 TROVA STAZIONE PIÙ VICINA APERTA
          </span>
          <span className="mt-1 text-xs font-medium text-slate-300">
            Apre Google Maps ed esegue subito la ricerca
          </span>
        </a>

        {/* Pulsante Anti Violenza 1522 */}
        <a
          href="tel:1522"
          onClick={triggerHaptic}
          className="flex items-center justify-center gap-3 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-100/70 p-3.5 shadow-sm transition active:scale-95 w-full"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-white shadow-sm">
            <AntiViolenceRibbonSVG className="w-6 h-6" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-700">
              Anti Violenza e Stalking
            </span>
            <span className="text-sm font-extrabold text-purple-950">
              Chiama il 1522
            </span>
          </div>
        </a>

        {/* Altri Numeri di Emergenza Rapidi (118 e 115) */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
            Altri numeri di emergenza:
          </span>
          <div className="flex justify-center gap-3">
            <a 
              href="tel:118" 
              onClick={triggerHaptic} 
              className="flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-2 text-xs font-extrabold text-blue-800 shadow-sm transition active:scale-95"
            >
              🚑 118 Sanità
            </a>
            <a 
              href="tel:115" 
              onClick={triggerHaptic} 
              className="flex items-center gap-1.5 rounded-full bg-rose-100 px-4 py-2 text-xs font-extrabold text-rose-800 shadow-sm transition active:scale-95"
            >
              🚒 115 Vigili del Fuoco
            </a>
          </div>
        </div>
      </section>

      {/* Footer e Note Legali */}
      <footer className="mt-6 flex w-full max-w-md flex-col items-center text-center pb-2">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#4a556b]">
          Servizio informativo per il cittadino
        </p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
          Applicazione dimostrativa non ufficiale. Loghi e marchi appartengono ai legittimi proprietari. <br /> In caso di emergenza reale chiama il 112.
        </p>
      </footer>
    </main>
  )
}
    </main>
  )
}
