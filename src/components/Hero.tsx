"use client"

import MetroHero from "@/components/ui/scroll-locked-video-hero"
import { useState } from "react"

interface HeroProps {
  onTestRide: () => void
}

export default function Hero({ onTestRide }: HeroProps) {
  const [showCTA, setShowCTA] = useState(false)

  return (
    <MetroHero
      videoSrc="/hero_vehicle_1789939998167.png"
      title="RIDE FURTHER. CHARGE LESS."
      scrollHint="SCROLL TO EXPLORE"
      tagline="The Glider is built for the everyday commute — light in the city, steady on the highway, and cheap to keep charged."
      scrubDistance={2800}
      signature={false}
    />
  )
}