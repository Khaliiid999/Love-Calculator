"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Display from "./calculator-display"
import ButtonGrid from "./calculator-buttons"

interface CalculatorProps {
  onResult?: (result: string | null) => void
}

export default function Calculator({ onResult }: CalculatorProps) {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleOperation = (op: string) => {
    const currentValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current
      case "-":
        return prev - current
      case "×":
        return prev * current
      case "÷":
        return prev / current
      case "=":
        return current
      case "^":
        return Math.pow(prev, current)
      case "%":
        return prev % current
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, Number.parseFloat(display), operation)
      setDisplay(String(result))
      onResult?.(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
    onResult?.(null)
  }

  const handleScientific = (func: string) => {
    const current = Number.parseFloat(display)
    let result = 0

    switch (func) {
      case "sin":
        result = Math.sin(current * (Math.PI / 180))
        break
      case "cos":
        result = Math.cos(current * (Math.PI / 180))
        break
      case "tan":
        result = Math.tan(current * (Math.PI / 180))
        break
      case "log":
        result = Math.log10(current)
        break
      case "ln":
        result = Math.log(current)
        break
      case "sqrt":
        result = Math.sqrt(current)
        break
      case "1/x":
        result = 1 / current
        break
      case "π":
        result = Math.PI
        break
    }

    setDisplay(String(result))
    onResult?.(String(result))
    setNewNumber(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col gap-4"
    >
      <Display value={display} />
      <ButtonGrid
        onNumber={handleNumber}
        onOperation={handleOperation}
        onEquals={handleEquals}
        onClear={handleClear}
        onScientific={handleScientific}
      />
    </motion.div>
  )
}
