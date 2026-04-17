// levels/level1/page.js
"use client"
import {useEffect, useState} from "react"
import Problem1Description from "@/app/levelDescriptions/problem1Description"
import CodeBlock from "@/app/components/codeBlock"
import {useLevelContext} from "@/app/levels/context";

const mapData = {
  template:
`<div className={\`flex h-full w-full rounded-2xl {answer}\`}>
  <div>
    // The Tarsier!
  </div>
  <div>
    // His Tasty Bug!
  </div>
</div>`,
  solutions: ["bg-indigo-950", "bg-indigo-900", "bg-indigo-800"]
}

export default function Level1Page() {
  const { answer, setAnswer, setVisualizerConfig } = useLevelContext();
  const [submit, setSubmit] = useState(true);
  const [ correctAnswer, setCorrectAnswer ] = useState(false);

  useEffect(() => {
    const safeAnswer = answer.startsWith("bg-") ? answer : ""
    setVisualizerConfig({
      containerClass: `justify-center ${safeAnswer}`,
      tarsierClass: `items-center justify-center`,
      bugClass: "items-center justify-center"
    })
  }, [submit])

  function analyzeResult() {
    setCorrectAnswer(mapData.solutions.includes(answer))
  }

  return (
    <div className="flex flex-row h-full gap-20">
      <div className="w-1/2">
        <Problem1Description />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <CodeBlock
          template={mapData.template}
          setAnswer={setAnswer}
          confirm={() => { analyzeResult(); setSubmit(!submit) }}
        />
        {correctAnswer && (
          <p className="text-green-400 mt-4">Correct! Well done.</p>
        )}
      </div>
    </div>
  )
}