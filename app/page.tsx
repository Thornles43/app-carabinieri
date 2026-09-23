"use client"

import Image from "next/image"
import { useState } from "react"
import { EmergencyCallButton } from "@/components/emergency-call-button"

export default function Page() {
  const [loadingLocation, setLoadingLocation] = useState(false)

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(40)
    }
  }

  const handleFindStation = () => {
    triggerHaptic()
    const queryTerm = encodeURIComponent("Stazione Carabinieri aperta ora")

    const navigateToMaps = (url: string) => {
      window.location.href = url
    }

    if ("geolocation" in navigator) {
      setLoadingLocation(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoadingLocation(false)
          const { latitude, longitude } = position.coords
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${queryTerm}&center=${latitude},${longitude}`
          navigateToMaps(mapsUrl)
        },
        () => {
          setLoadingLocation(false)
          const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${queryTerm}`
          navigateToMaps(fallbackUrl)
        },
        { timeout: 5000, enableHighAccuracy: true, maximumAge: 0 }
      )
    } else {
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${queryTerm}`
      navigateToMaps(fallbackUrl)
    }
  }

  return (
    <main className="light flex min-h-dvh flex-col items-center justify-between bg-[#f4f6fb] px-6 py-10">
      {/* Header */}
      <header className="flex w-full max-w-md flex-col items-center pt-6 text-center">
        <Image
          src="/Carabinieri.png"
          alt="Logo dell'Arma dei Carabinieri"
          width={200}
          height={200}
          priority
          className="mb-4 h-32 w-auto object-contain"
        />
        <h1 className="text-balance text-2xl font-bold tracking-tight text-[#1b2a49] sm:text-3xl">
          Stazione Carabinieri
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#c1121f]" aria-hidden="true" />
        <p className="mt-4 text-pretty text-base font-medium text-[#4a556b]">Seleziona la tua necessità</p>
      </header>

      {/* Actions */}
      <section className="flex w-full max-w-md flex-col gap-6" aria-label="Azioni disponibili">
        {/* Emergency button */}
        <EmergencyCallButton />

        {/* Find station button with automatic GPS search */}
        <button
          onClick={handleFindStation}
          disabled={loadingLocation}
          className="group relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#2a3d66] to-[#1b2a49] px-6 py-8 text-center shadow-[0_12px_0_0_#0d1526,0_20px_30px_-10px_rgba(27,42,73,0.6)] transition-all duration-150 active:translate-y-2 active:shadow-[0_4px_0_0_#0d1526,0_10px_20px_-10px_rgba(27,42,73,0.6)] disabled:opacity-75"
        >
          <span className="text-lg font-semibold uppercase tracking-wide text-white/80">
            🔵 {loadingLocation ? "Rilevamento..." : "Trova"}
          </span>
          <span className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            STAZIONE APERTA
          </span>
        </button>

        {/* Anti Violenza e Stalking 1522 */}
        <a
          href="tel:1522"
          onClick={triggerHaptic}
          className="flex items-center justify-center gap-3 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-100/70 p-4 shadow-sm transition active:scale-95"
        >
          <span className="text-xl">💜</span>
          <div className="text-left">
            <span className="block text-xs font-bold uppercase tracking-wider text-purple-700">
              Anti Violenza e Stalking
            </span>
            <span className="text-base font-extrabold text-purple-950">Chiama il 1522</span>
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="flex w-full max-w-md flex-col items-center pt-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-[#4a556b]/70">
          Servizio informativo per il cittadino
        </p>
        <p className="mt-1 text-xs text-[#4a556b]/60">In caso di pericolo immediato chiama sempre il 112</p>
      </footer>
    </main>
  )
}
