"use client"

import { motion } from "framer-motion"

export default function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.6,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeIn",
          }}
          className="absolute text-4xl"
        >
          💖
        </motion.div>
      ))}
    </div>
  )
}
