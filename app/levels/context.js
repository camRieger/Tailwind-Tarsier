// level context
"use client"
import { createContext, useContext, useState } from "react"

const LevelContext = createContext(null)

export function LevelProvider({ children }) {
  const [answer, setAnswer] = useState("")
  const [visualizerConfig, setVisualizerConfig] = useState({
    containerClass: "justify-center",
    tarsierClass: "items-center justify-center",
    bugClass: "items-center justify-center",
  })

  return (
    <LevelContext.Provider value={{ answer, setAnswer, visualizerConfig, setVisualizerConfig }}>
      {children}
    </LevelContext.Provider>
  )
}

export function useLevelContext() {
  return useContext(LevelContext)
}