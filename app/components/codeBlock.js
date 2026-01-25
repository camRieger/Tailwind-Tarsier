export default function CodeBlock({ template, setAnswer, confirm }) {
  const codeParts = template.split("{answer}");

  return (
    <div className="bg-slate-500 overflow-x-auto flex flex-col rounded-md h-full pb-5">
      <div className="bg-slate-900 text-center">
        CODE
      </div>

      {/*display skeleton code here*/}
      <div className="flex flex-col h-full justify-center">
        <pre>
          {codeParts[0]}
          <input
          placeholder="Enter answer here..."
          className="bg-white text-black px-3 rounded-md"
          onChange={(e) => setAnswer(e.target.value)}
          />
          {codeParts[1]}
        </pre>
      </div>
      <div className="flex flex-col h-full justify-end items-center">
        <button 
        onClick={confirm}
        className="bg-[#417D06] p-2 rounded-lg w-1/5 text-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  )
}