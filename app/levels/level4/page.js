"use client";
import Level from "@/app/levels/components/level";
import Problem4Description from "@/app/levels/levelDescriptions/problem4Description";
import Chasm from "@/public/chasm.png"

const mapData = {
  template:
    `<div className="flex items-center">
      <div className={\`{answer1}\`}>
        // The Tarsier!
      </div>
      <div className={\`{answer0}\`}>
        // The Gap!
      </div>
      <div>
        // His Tasty Bug!
      </div>
    </div>`,
  solutions: [["w-0", "justify-end"]],
  validateAnswers: (answers) => {
    const gapMatch = answers[0]?.match(/^w-(\d+)$/)
    const gapCorrect = gapMatch && parseInt(gapMatch[1]) === 0
    const tarsierCorrect = answers[1] === "justify-end"
    return gapCorrect && tarsierCorrect
  }
}

function getVisualizerConfig(answers = []) {
  const rawGap = answers[0] ?? ""
  const gapMatch = rawGap.match(/^w-(\d+)$/)
  const clampedGap = gapMatch
    ? `w-${Math.min(parseInt(gapMatch[1]), 32)}`
    : "w-32"

  const tarsierAnswer = answers[1]?.startsWith("justify-") ? answers[1] : "justify-start"

  return {
    containerClass: "bg-indigo-950 items-center justify-center",
    tarsierClass: `flex flex-1 items-center ml-4 ${tarsierAnswer}`,
    bugClass: "flex flex-1 justify-start items-center",
    extras: [
      {
        class: `h-full flex-shrink-0 flex items-center justify-center`,
        element: (
          <img
            src={Chasm.src}
            alt="chasm"
            className={`${clampedGap} h-full object-fill transition-all duration-300`}
          />
        )
      }
    ]
  }
}

export default function Level4Page() {
  return (
    <Level
      levelId="level4"
      mapData={mapData}
      getVisualizerConfig={getVisualizerConfig}
      description={<Problem4Description />}
    />
  )
}