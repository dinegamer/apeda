"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated logo */}
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 animate-ping">
            <div className="w-24 h-24 rounded-full border-4 border-accent/30" />
          </div>
          <div className="absolute inset-0 animate-pulse delay-150">
            <div className="w-24 h-24 rounded-full border-4 border-secondary/30" />
          </div>

          {/* Logo */}
          <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
            <Heart className="w-12 h-12 text-primary fill-primary animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-3">
          <h2 className="font-heading font-bold text-2xl text-white animate-pulse">APEDA-MALI</h2>
          <p className="text-white/80 text-sm">Chargement en cours...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-accent via-secondary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
