"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, Environment } from "@react-three/drei"
import Scene from "./3d-scene"

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }} className="w-full h-full">
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="studio" />
      <Scene />
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0.2} fade speed={0.3} />
    </Canvas>
  )
}
