export default function CodeBlock({code}) {
  return (
    <div className="bg-slate-500 overflow-x-auto flex flex-col justify-between rounded-md">
      <div className="bg-slate-900 text-center">
        CODE
      </div>
      <pre>{code}</pre>
      <input placeholder="Enter code here..." className="bg-white text-black placeholder-gray-500 pl-2" />
    </div>
  )
}