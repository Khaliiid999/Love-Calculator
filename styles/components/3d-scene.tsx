"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import * as THREE from "three"

export default function Scene() {
  const torusRef = useRef<Mesh>(null)
  const icosahedronRef = useRef<Mesh>(null)

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.003
      torusRef.current.rotation.y += 0.005
    }
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x -= 0.004
      icosahedronRef.current.rotation.y -= 0.005
    }
  })

  return (
    <>
      {/* Main Torus - Blush Pink */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.8, 100, 100]} />
        <meshPhongMaterial
          color={new THREE.Color(0xf07272)}
          emissive={new THREE.Color(0xf07272)}
          emissiveIntensity={0.3}
          shininess={100}
        />
      </mesh>

      {/* Rotating Icosahedron - Soft Pink Accent */}
      <mesh ref={icosahedronRef} position={[0, 0, 0]} scale={1.2}>
        <icosahedronGeometry args={[2, 0]} />
        <meshPhongMaterial
          color={new THREE.Color(0xffb3d9)}
          emissive={new THREE.Color(0xffb3d9)}
          emissiveIntensity={0.2}
          wireframe={false}
          opacity={0.3}
          transparent={true}
        />
      </mesh>

      {/* Floating Spheres */}
      {[1, -1].map((dir, i) => (
        <group key={i}>
          <mesh position={[3 * dir, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshPhongMaterial
              color={new THREE.Color(0xffcce5)}
              emissive={new THREE.Color(0xf07272)}
              emissiveIntensity={0.4}
            />
          </mesh>
        </group>
      ))}
    </>
  )
}
