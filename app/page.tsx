"use client"

import { useState } from "react"
import Header from "@/components/header"
import Calculator from "@/components/calculator"
import FloatingHearts from "@/components/floating-hearts"
import Background3D from "@/components/background-3d"

export default function Home() {
  const [result, setResult] = useState<string | null>(null)

  return (
    <div className="w-full h-screen overflow-hidden">
      <Background3D />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Header />
        <Calculator onResult={setResult} />
        <FloatingHearts />
      </div>
    </div>
  )
}
