"use client"
import { useEffect, useState } from "react"
import CodeBlock from "@/app/components/codeBlock"
import ResultModal from "@/app/components/resultModal"
import { useLevelContext } from "@/app/levels/context"
import { useAuth } from "@/app/contexts/AuthContext"

export default function Level({ levelId, mapData, getVisualizerConfig, description }) {
  const { answers, setAnswers, setVisualizerConfig } = useLevelContext()
  const { user, completedLevels, completeLevel } = useAuth()
  const [modal, setModal] = useState(null)

  const alreadyCompleted = completedLevels.includes(levelId)

  // reset answer array on mount
  useEffect(() => {
    setAnswers([])
    setVisualizerConfig(getVisualizerConfig(""))
  }, [levelId]);

  // count how many {answerN} placeholders exist in the template
  const answerCount = (mapData.template.match(/\{answer\d+\}/g) || []).length

  useEffect(() => {
    setAnswers(Array(Math.max(answerCount, 1)).fill(""))
    setVisualizerConfig(getVisualizerConfig(""))
  }, [levelId])

  // set up config for single field vs multiple field problems
  // first checks if any answers stored in the global context are still present
  // if so, waits for them to clear before loading
  // this prevents answers stored in multiple-field problems from breaking
  // single field ones
  useEffect(() => {
    if (answers.length === 0) return
    const expectedCount = (mapData.template.match(/\{answer\d+\}/g) || []).length
    if (answers.length > expectedCount + 1) return
    const config = answers.length <= 1
      ? getVisualizerConfig(answers[0] ?? "")
      : getVisualizerConfig(answers)
    setVisualizerConfig(config)
  }, [answers])

  // check if the user has completed the level already
  useEffect(() => {
    if (alreadyCompleted && !modal) setModal("already")
  }, [alreadyCompleted])

  // check if the submitted solution matches the correct solutions
  function analyzeResult() {
    const isCorrect = mapData.validateAnswers
      ? mapData.validateAnswers(answers)
      : mapData.solutions.some(solution =>
          Array.isArray(solution)
            ? solution.every((sol, i) => sol === answers[i])
            : solution === answers[0]
        )
    if (isCorrect && user) completeLevel(levelId)
    setModal(isCorrect ? "correct" : "incorrect")
  }

  function handleSetAnswer(index, value) {
    setAnswers(prev => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
  }

  return (
    <div className="flex flex-row h-full gap-20">
      <div className="w-1/2 flex flex-col gap-2">
        {description}
      </div>
      <div className="relative w-1/2 h-full">
        <CodeBlock
          template={mapData.template}
          answerCount={answerCount}
          setAnswer={(i, val) => handleSetAnswer(i, val)}
          confirm={analyzeResult}
        />
        <ResultModal result={modal} onClose={() => setModal(null)} />
      </div>
    </div>
  )
}