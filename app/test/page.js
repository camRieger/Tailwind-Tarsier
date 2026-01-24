"use client"
import Header from "@/app/components/header";
import { useState } from "react";

export default function Page({ inputAnswer = "", solution = [] }) {
  const [answerThresh, setAnswerThresh] = useState();
  const inputArray = inputAnswer.split(' ');
  
  async function ResultAnalyzer(){
    let counter = 0;
    let finalScore = 0;

    solution.forEach(solution => {
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
        counter = 0;
    });
    
    setAnswerThresh((finalScore/inputArray.length)*100);
  } 

  return (
    <div>
      <button onClick={ResultAnalyzer} className="p-2 bg-slate-500">Click</button>
      <p>Your answer was {answerThresh}% correct</p>
    </div>
  )
}
