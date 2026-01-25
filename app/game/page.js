"use client"
import { useState } from "react"
import Header from "@/app/components/header";
import CodeBlock from "@/app/components/codeBlock";
import ProblemDescription from "@/app/components/problemDescription";
import CodeVisualizer from "../components/codeVisualizer";

export default function Page(){

  const [problemCode, setProblemCode] = useState(
`<div className="flex flex-col h-full w-1/2 text-black">
  <div className="{answer}">
    <Header title={'Tasty Bug'}/>
    HEADERS
  </div>
  <div className="h-4/5">
    <ProblemDescription description={'sample description'} />
  </div>
</div>`
);

  const [problemAnswer, setProblemAnswer] = useState(problemCode);
  const [answer, setAnswer] = useState("");
  const solutions = ["flex flex-col bg-slate-500", "grid grid-cols-1 bg-slate-500"];
  const [answerThresh, setAnswerThresh] = useState();
  const inputArray = answer.split(' ');

  function ProcessRender(){
    setProblemAnswer(problemCode.replace("{answer}", answer))
  }

  async function ResultAnalyzer(){
    let counter = 0;
    let finalScore = 0;

    solutions.forEach(solution => {
      const solutionWords = solution.split(' ');
      inputArray.forEach(inWord => {
        solutionWords.forEach(solWord => {
          if(inWord === solWord){
            counter++;
          }
        });
      });
        if(counter > finalScore){
          finalScore = counter;
        }
        console.log(finalScore);
        counter = 0;
    });
    
    setAnswerThresh((finalScore/inputArray.length)*100);
  } 

  return(
    <div className="flex flex-col h-screen w-full absolute">
      <div className="flex flex-row gap-20 bg-[#B87A00] h-3/5 pt-10 px-10 pb-10">
        <div className="flex flex-col h-full w-1/2">
          <div className="h-1/5">
            <Header title={'Tasty Bug'}/>
          </div>
          <div className="h-4/5">
            <ProblemDescription description={'sample description'} />
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 justify-center">
          <CodeBlock
            template={problemCode}
            setAnswer={setAnswer}
            confirm={(e) => (ProcessRender(), ResultAnalyzer())}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#FFCF60] h-2/5">
        <CodeVisualizer
          code={problemAnswer}
        />
        {answerThresh}%
      </div>
    </div>
  )
}