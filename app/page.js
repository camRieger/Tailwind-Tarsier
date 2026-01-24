import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="grid grid-cols-2 h-screen w-full">
          <div className="bg-[#B87A00]">
            Problem
          </div>
          <div className="bg-[#FFF1D6] p-10">
            Render
            <div className="bg-[#FFCF70] h-full">
              asd
            </div>
          </div>
      </main>
    </div>
  );
}
