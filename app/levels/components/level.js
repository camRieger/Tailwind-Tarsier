"use client"
import { useEffect, useState } from "react"
import CodeBlock from "@/app/components/codeBlock"
import ResultModal from "@/app/components/resultModal"
import { useLevelContext } from "@/app/levels/context"
import { useAuth } from "@/app/contexts/AuthContext"

export default function Level({ levelId, mapData, getVisualizerConfig, description }) {
  const { answer, setAnswer, setVisualizerConfig } = useLevelContext()
  const { user, completedLevels, completeLevel } = useAuth()
  const [modal, setModal] = useState(null)

  const alreadyCompleted = completedLevels.includes(levelId)

  useEffect(() => {
    if (alreadyCompleted && !modal) setModal("already")
  }, [alreadyCompleted])

  useEffect(() => {
    setVisualizerConfig(getVisualizerConfig(answer))
  }, [answer])

  function analyzeResult() {
    const isCorrect = mapData.solutions.includes(answer)
    if (isCorrect && user) completeLevel(levelId)
    setModal(isCorrect ? "correct" : "incorrect")
  }

  return (
    <div className="flex flex-row h-full gap-20">
      <div className="w-1/2 flex flex-col gap-2">
        {description}
      </div>
      <div className="relative w-1/2 h-full">
        <CodeBlock
          template={mapData.template}
          setAnswer={setAnswer}
          confirm={analyzeResult}
        />
        <ResultModal result={modal} onClose={() => setModal(null)} />
      </div>
    </div>
  )
}