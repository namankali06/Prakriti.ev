"use client"

import MetroHero from "@/components/ui/scroll-locked-video-hero"

export default function DemoMetroHero() {
  return (
    <>
      <MetroHero
        videoSrc="https://cdn.21st.dev/assets/mirror/21/21a77eac28eacbb7e142016eefeaa0b4a766619e51113629a3bc6df6af066c0f.mp4"
        title="THE CITY OPENS"
        scrollHint="SCROLL TO DRIVE"
        tagline="Every door in the city is already open."
        signature={false}
        scrubDistance={3000}
      />
      <section style={{ minHeight: "100vh", background: "#05070d", display: "flex", alignItems: "center", justifyContent: "center", color: "#f2f4f8", fontFamily: "system-ui" }}>
        <div style={{ maxWidth: 600, padding: 40, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, marginBottom: 24 }}>
            Welcome to the next section
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(242,244,248,0.7)" }}>
            The page unlocked! You can now scroll normally. Scroll back up to re-lock and replay the video.
          </p>
        </div>
      </section>
    </>
  )
}