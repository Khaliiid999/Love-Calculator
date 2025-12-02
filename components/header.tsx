"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-balance">
        💕 Love Calculator
      </h1>
      <p className="text-muted-foreground text-lg">Calculate with love, compute with style</p>
    </motion.div>
  )
}
