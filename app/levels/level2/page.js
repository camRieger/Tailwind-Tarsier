"use client";
import Level from "@/app/levels/components/level";
import Problem2Description from "@/app/levels/levelDescriptions/problem2Description";

const mapData = {
  template:
    `<div>
    <div className={\`{answer}\`}>
      // The Tarsier!
    </div>
    <div>
      // His Tasty Bug!
    </div>
    </div>`,
  solutions: ["justify-end"]
};

// can't animate justify-end :(
function getVisualizerConfig(answer) {
  const safeAnswer = answer.startsWith("justify-") ? answer : ""
  return {
    containerClass: `justify-center bg-indigo-950`,
    tarsierClass: `items-center ml-4 ${safeAnswer}`,
    bugClass: "items-center justify-start"
  };
}

export default function Level2Page() {
  return (
    <Level
      levelId="level2"
      mapData={mapData}
      getVisualizerConfig={getVisualizerConfig}
      description={<Problem2Description />}
    />
  );
}