"use client"

import { useEffect, useState } from "react"

export function EmergencyCallButton() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Un puntatore "fine" (mouse) indica quasi sempre un desktop, dove il
    // dialer del telefono non esiste. Lo usiamo per mostrare un avviso utile.
    if (typeof window !== "undefined" && window.matchMedia) {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches)
    }
  }, [])

  const handleCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Feedback tattile sui dispositivi che lo supportano.
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(30)
    }

    // Se siamo dentro un iframe (es. anteprima), forziamo la navigazione
    // sulla finestra principale così il dialer del telefono si apre comunque.
    if (typeof window !== "undefined" && window.top && window.top !== window.self) {
      e.preventDefault()
      try {
        window.top.location.href = "tel:112"
      } catch {
        window.location.href = "tel:112"
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href="tel:112"
        onClick={handleCall}
        aria-label="Emergenza, chiama il 112"
        className="group relative flex w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#e23b47] to-[#b00d1a] px-6 py-8 text-center shadow-[0_12px_0_0_#7a0710,0_20px_30px_-10px_rgba(176,13,26,0.6)] transition-all duration-150 active:translate-y-2 active:shadow-[0_4px_0_0_#7a0710,0_10px_20px_-10px_rgba(176,13,26,0.6)]"
      >
        <span className="flex items-center gap-2 text-lg font-semibold uppercase tracking-wide text-white/90">
          <span className="relative flex h-3 w-3" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          Emergenza
        </span>
        <span className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">CHIAMA 112</span>
      </a>
      <p className="text-xs font-medium uppercase tracking-widest text-[#b00d1a]">Solo per emergenze reali</p>
      {isDesktop && (
        <p className="text-center text-xs text-[#4a556b]/70">Apri da smartphone per avviare la chiamata</p>
      )}
    </div>
  )
}
