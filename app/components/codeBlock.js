export default function CodeBlock({template}) {
  return (
    <div className="bg-slate-500 overflow-x-auto flex flex-col rounded-md h-full">
      <div className="bg-slate-900 text-center">
        CODE
      </div>

      {/*display skeleton code here*/}
      <div className="flex flex-col h-full justify-center">
        <pre>
          {template}
        </pre>
      </div>

      <div className="flex flex-col h-full justify-center">
        <button >
          Confirm
        </button>
      </div>
    </div>
  )
}