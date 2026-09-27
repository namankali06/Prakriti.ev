import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import TestRideModal from "./TestRideModal"

export type LayoutContextType = {
  openTestRide: () => void
}

export default function Layout() {
  const [testRideOpen, setTestRideOpen] = useState(false)

  const openTestRide = () => setTestRideOpen(true)

  return (
    <div className="overflow-x-hidden bg-white min-h-screen flex flex-col">
      <Navbar onTestRide={openTestRide} />
      <main id="main-content" className="flex-1">
        <Outlet context={{ openTestRide } satisfies LayoutContextType} />
      </main>
      <Footer />
      {testRideOpen && <TestRideModal onClose={() => setTestRideOpen(false)} />}
    </div>
  )
}
