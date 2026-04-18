"use client";
import Level from "@/app/levels/components/level";
import Problem1Description from "@/app/levels/levelDescriptions/problem1Description";

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
  solutions: ["bg-indigo-950", "bg-indigo-900"]
};

function getVisualizerConfig(answer) {
  const safeAnswer = answer.startsWith("bg-") ? answer : ""
  return {
    containerClass: `justify-center ${safeAnswer}`,
    tarsierClass: "items-center justify-center",
    bugClass: "items-center justify-center"
  };
}

export default function Level1Page() {
  return (
    <Level
      levelId="level1"
      mapData={mapData}
      getVisualizerConfig={getVisualizerConfig}
      description={<Problem1Description />}
    />
  );
}