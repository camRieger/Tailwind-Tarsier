"use client";
import Level from "@/app/levels/components/level";
import Problem3Description from "@/app/levels/levelDescriptions/problem3Description";
import Box from "@/public/Icon_box_hat_brown.png";
import Image from "next/image";

const mapData = {
  template:
    `<div>
      <div className={\`{answer0}\`}>
        // The Tarsier!
      </div>
      <div className={\`{answer1}\`}>
        // The Pesky Box!
      </div>
    </div>`,
  solutions: [["justify-end", "bottom-[50%]"]],
  validateAnswers: (answers) => {
    const tarsierCorrect = answers[0] === "justify-end"
    const match = answers[1]?.match(/^bottom-\[(\d+)%\]$/)
    const boxCorrect = match && parseInt(match[1]) >= 50
    return tarsierCorrect && boxCorrect
  }
};

function getVisualizerConfig(answers = []) {
  const tarsierAnswer = answers[0]?.startsWith("justify-") ? answers[0] : ""

  const rawBox = answers[1] ?? ""
  const match = rawBox.match(/^bottom-\[(\d+)%\]$/)
  const clampedBox = match
    ? `bottom-[${Math.min(parseInt(match[1]), 50)}%]`
    : "bottom-[20%]"

  return {
    containerClass: "justify-center bg-indigo-950",
    tarsierClass: `items-center ml-4 ${tarsierAnswer}`,
    bugClass: "items-center justify-start",
    extras: [
      {
        class: `absolute right-[30%] transition-all duration-300 ${clampedBox}`,
        element: <Image src={Box} alt="box" height={200} />
      }
    ]
  }
}

export default function Level3Page() {
  return (
    <Level
      levelId="level3"
      mapData={mapData}
      getVisualizerConfig={getVisualizerConfig}
      description={<Problem3Description />}
    />
  );
}