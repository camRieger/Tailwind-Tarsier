// level context
"use client"
import { createContext, useContext, useState } from "react"

const LevelContext = createContext(null)

export function LevelProvider({ children }) {
  const [answers, setAnswers] = useState([])
  const [visualizerConfig, setVisualizerConfig] = useState({
    containerClass: "justify-center",
    tarsierClass: "items-center justify-center",
    bugClass: "items-center justify-center",
    extras: []
  })

  return (
    <LevelContext.Provider value={{ answers, setAnswers, visualizerConfig, setVisualizerConfig }}>
      {children}
    </LevelContext.Provider>
  )
}

export function useLevelContext() {
  return useContext(LevelContext)
}