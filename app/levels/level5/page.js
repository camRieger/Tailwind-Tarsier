"use client";
import Level from "@/app/levels/components/level";
import Problem5Description from "@/app/levels/levelDescriptions/problem5Description";
import Sign from "@/public/sign.png"

const mapData = {
  template:
    `<div>
      <p className={\`{answer}\`}>
        // The Sign!
      </p>
    </div>`,
  solutions: ["text-xl", "text-2xl"]
}

function getVisualizerConfig(answer) {
  const validSizes = [
    "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"
  ]
  const safeAnswer = validSizes.includes(answer) ? answer : "text-xs"

  return {
    containerClass: "bg-indigo-950 items-center justify-center",
    tarsierClass: "flex flex-1 items-center justify-end",
    bugClass: "flex flex-1 items-center justify-end mr-4",
    extras: [
      {
        class: "flex flex-1 items-center justify-center",
        element: (
          <div className="relative flex items-center justify-center">
            <img src={Sign.src} alt="sign" className="h-32 w-auto" />
            <p className={`absolute ${safeAnswer} text-slate-950 font-bold text-center transition-all duration-300`}>
              This way! {'-->'}
            </p>
          </div>
        )
      }
    ]
  }
}

export default function Level5Page() {
  return (
    <Level
      levelId="level5"
      mapData={mapData}
      getVisualizerConfig={getVisualizerConfig}
      description={<Problem5Description />}
    />
  )
}