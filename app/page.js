import Image from "next/image";
import ProblemDescription from "@/app/components/problemDescription";
import CodeBlock from "@/app/components/codeBlock";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col h-screen w-full">
          <div className="grid grid-cols-2 gap-20 bg-[#B87A00] h-3/5 pt-10 px-10 pb-10">
            <ProblemDescription description={'description here'} />
            <CodeBlock code={'code here'} />
          </div>
          <div className="grid grid-cols-2 bg-[#FFCF60] h-2/5">
            RENDER
          </div>
      </main>
    </div>
  );
}
