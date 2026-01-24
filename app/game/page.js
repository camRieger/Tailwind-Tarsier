"use client"
import { useState } from "react"
import Header from "@/app/components/header";

export default function Page(){
    const [problemCode, setProblemCode] = useState(`<div className="bg-slate-200 
text-black rounded-t-3xl">
    <div className="h-1/10">
    <Header/>
    </div>
</div>`);
    const [inputSolution, setInputSolution] = useState("");

    return(
        <div className="flex flex-col h-screen w-full absolute">
          <div className="grid grid-cols-2 gap-20 bg-[#B87A00] h-3/5 pt-10 px-10 pb-10">
            <div className="bg-slate-200 text-black rounded-t-3xl">
              <div className="h-1/10">
                <Header/>
              </div>
              DESCRIPTION
            </div>
            <div className="bg-slate-500 overflow-x-auto flex flex-col justify-between rounded-md">
              <div className="bg-slate-900 text-center">CODE</div>
              <pre>
{`${problemCode}`}
              </pre>    
              <input placeholder="Enter code here..." className="bg-white text-black placeholder-gray-500 pl-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 bg-[#FFCF60] h-2/5">
            RENDER
          </div>
        </div>
    )
}