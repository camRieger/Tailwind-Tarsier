import TemplateBlock from "../utils/templateHelper";

export default function CodeBlock({ template, setAnswer, confirm }) {
  let codeParts = null;
  
  if(template){
    const formattedTemplate = TemplateBlock(template);
    codeParts = formattedTemplate.split("{answer}");
  }

  if(!template || !codeParts){
    return(
      <div>
        Loading Template...
      </div>
    )
  }
  return (
    <div className="bg-slate-500 overflow-x-auto flex flex-col rounded-md h-full pb-5">
      <div className="bg-slate-900 text-center">
        CODE
      </div>

      {/*display skeleton code here*/}
      <div className="flex flex-col h-full justify-center py-5 px-3">
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