"use client";

export default function ResultModal({ result, onClose }) {
  if (!result) return null;

  const isSuccess = result === "correct" || result === "already";

  return (
    <div
      className="absolute inset-0 h-full flex items-center justify-center bg-black/50 rounded-md z-10"
      onClick={onClose}
    >
      <div
        className="bg-indigo-950 rounded-xl p-8 flex flex-col items-center gap-4 max-w-xs text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {result === "already" && (
          <>
            <span className="text-4xl">🏆</span>
            <p className="text-green-400 font-bold text-lg">Already Completed!</p>
            <p className="text-amber-200 text-sm">You've already solved this one. Feel free to experiment!</p>
          </>
        )}
        {result === "correct" && (
          <>
            <span className="text-4xl">🎉</span>
            <p className="text-green-400 font-bold text-lg">Congratulations!</p>
            <p className="text-amber-200 text-sm">You've completed the level.</p>
          </>
        )}
        {result === "incorrect" && (
          <>
            <span className="text-4xl">🐛</span>
            <p className="text-red-400 font-bold text-lg">Not quite!</p>
            <p className="text-amber-200 text-sm">The bug got away. Try again!</p>
          </>
        )}
        <button
          onClick={onClose}
          className={`mt-2 px-6 py-2 rounded-lg font-bold transition-colors
            ${isSuccess
              ? "bg-green-400 text-indigo-950 hover:bg-green-300"
              : "bg-red-400 text-indigo-950 hover:bg-red-300"
            }`}
        >
          {isSuccess ? "Keep Experimenting" : "Try Again"}
        </button>
      </div>
    </div>
  );
}