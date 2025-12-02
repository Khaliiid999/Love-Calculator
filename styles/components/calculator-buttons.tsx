"use client"

import { motion } from "framer-motion"

interface ButtonGridProps {
  onNumber: (num: string) => void
  onOperation: (op: string) => void
  onEquals: () => void
  onClear: () => void
  onScientific: (func: string) => void
}

export default function ButtonGrid({ onNumber, onOperation, onEquals, onClear, onScientific }: ButtonGridProps) {
  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]
  const operationButtons = [
    { label: "÷", value: "÷" },
    { label: "×", value: "×" },
    { label: "-", value: "-" },
    { label: "+", value: "+" },
  ]
  const scientificButtons = [
    { label: "sin", value: "sin" },
    { label: "cos", value: "cos" },
    { label: "tan", value: "tan" },
    { label: "log", value: "log" },
    { label: "ln", value: "ln" },
    { label: "√", value: "sqrt" },
    { label: "1/x", value: "1/x" },
    { label: "π", value: "π" },
  ]

  const buttonVariants = {
    whileHover: { scale: 1.05, boxShadow: "0 10px 30px rgba(244, 114, 182, 0.3)" },
    whileTap: { scale: 0.95 },
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Scientific Functions */}
      <div className="grid grid-cols-4 gap-2">
        {scientificButtons.map((btn) => (
          <motion.button
            key={btn.value}
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => onScientific(btn.value)}
            className="p-3 bg-gradient-to-br from-secondary to-secondary/80 text-primary font-semibold rounded-lg text-sm hover:from-accent hover:to-accent/80 transition-all shadow-md"
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Main Calculator Grid */}
      <div className="flex gap-3">
        {/* Numbers and decimals */}
        <div className="grid grid-cols-3 gap-2">
          {numberButtons.map((btn) => (
            <motion.button
              key={btn}
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => onNumber(btn)}
              className="w-16 h-16 bg-white text-primary font-bold text-xl rounded-xl shadow-lg border-2 border-primary/10 hover:bg-secondary transition-all"
            >
              {btn}
            </motion.button>
          ))}
        </div>

        {/* Operations */}
        <div className="flex flex-col gap-2">
          {operationButtons.map((btn) => (
            <motion.button
              key={btn.value}
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => onOperation(btn.value)}
              className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Special Buttons */}
        <div className="flex flex-col gap-2">
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={onClear}
            className="w-16 h-16 bg-destructive text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            C
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => onOperation("^")}
            className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            ^
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => onOperation("%")}
            className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            %
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={onEquals}
            className="w-16 h-16 bg-gradient-to-br from-accent to-primary text-white font-bold text-2xl rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
          >
            =
          </motion.button>
        </div>
      </div>
    </div>
  )
}
