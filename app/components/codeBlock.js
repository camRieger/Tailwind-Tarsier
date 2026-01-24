export default function CodeBlock({template, userInput, setUserInput, onConfirm}) {
  return (
    <div className="bg-slate-500 overflow-x-auto flex flex-col rounded-md h-full">
      <div className="bg-slate-900 text-center">
        CODE
      </div>

      <div className="flex flex-col h-full justify-center">
        {/* From the template, split the output into text vs input sections*/}
        <pre className="p-4 font-mono whitespace-pre-wrap leading-relaxed">
          {template.map((item, index) => {
            // display 'text' template items as plaintext renders of the code
            if (item.type === "text" ) {
              return (
                <span key={index} className="text-white">
                {item.value}
                </span>
              );
            }

            // render 'input' template items as interactable user inputs that store user input
            if (item.type === "input") {
              return (
                <input
                  key={index}
                  className="bg-gray-800 text-white border-b border-yellow-400 mx-1 w-32"
                  value={userInput[item.id] || ""}
                  onChange={(e) =>
                  setUserInput(prev => ({
                    ...prev,
                    [item.id]: e.target.value
                  }))
                  }
                />
              )
            }

            // else return nothing
            return null;
          }
          )}
        </pre>
      </div>

      <div className="flex flex-col h-full justify-center">
        <button onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  )
}