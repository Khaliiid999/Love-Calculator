"use client"

import { motion } from "framer-motion"

interface DisplayProps {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <motion.div layout className="w-80 bg-white bg-opacity-90 rounded-3xl p-8 shadow-2xl border-2 border-primary/20">
      <div className="text-right">
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-5xl font-bold text-primary break-words"
        >
          {value.length > 12 ? value.substring(0, 12) + "..." : value}
        </motion.p>
      </div>
    </motion.div>
  )
}
