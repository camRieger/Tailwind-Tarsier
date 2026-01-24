"use client"
import { useState } from "react"
import Header from "@/app/components/header";
import CodeBlock from "@/app/components/codeBlock";
import ProblemDescription from "@/app/components/problemDescription";

export default function Page(){
  const problemTemplate = [
    { type: "text", value: `<div className="text-black rounded-t-3xl">\n  <div className="` },
    { type: "input", id: "className" },
    { type: "text", value: `">\n    <h1> Test </h1>\n  </div>\n</div>` }
  ];

  const [userInput, setUserInput] = useState({});

  const [compiledCode, setCompiledCode] = useState("");

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
            template={problemTemplate}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#FFCF60] h-2/5">
        display is broken
      </div>
    </div>
  )
}