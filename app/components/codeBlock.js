// existing code by Kyle Carlos
import TemplateBlock from "../utils/template-helper";
import { useState } from "react";

export default function CodeBlock({ template, answerCount = 1, setAnswer, confirm }) {
  const [inputValues, setInputValues] = useState(Array(answerCount).fill(""))

  function handleChange(index, value) {
    setInputValues(prev => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
    setAnswer(index, value)
  }

  if (!template) {
    return <div>Loading Template...</div>
  }

  const formattedTemplate = TemplateBlock(template)
  const parts = formattedTemplate.split(/(\{answer\d+\}|\{answer\})/)

  return (
    <div className="bg-slate-500 flex flex-col rounded-md h-full pb-5 mb-4">
      <div className="bg-slate-900 text-center rounded-t-md">
        CODE
      </div>

      <div className="flex flex-col h-full py-4 px-3 text-sm">
        <pre>
          {parts.map((part, i) => {
            const match = part.match(/\{answer(\d+)?\}/)
            if (match) {
              const index = match[1] ? parseInt(match[1]) : 0
              return (
                <input
                  key={i}
                  value={inputValues[index] ?? ""}
                  placeholder="Enter answer here..."
                  className="bg-white text-black px-3 rounded-md"
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              )
            }
            return <span key={i}>{part}</span>
          })}
        </pre>
      </div>

      <div className="flex justify-center items-center mt-auto">
        <button
          onClick={confirm}
          className="bg-[#417D06] active:bg-[#2f5a04] p-2 mb-4 rounded-lg w-1/5 text-lg cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  )
}