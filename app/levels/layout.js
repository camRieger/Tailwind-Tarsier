// levels/layout.js
"use client";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/app/components/header";
import { LevelProvider } from "./context";
import CodeVisualizer from "@/app/components/codeVisualizer";
import {useAuth} from "@/app/contexts/AuthContext";

const levels = [
  { id: "level1", label: "Problem 1" },
  { id: "level2", label: "Problem 2" },
  { id: "level3", label: "Problem 3" },
];

export default function LevelsLayout({ children }) {
  const { completedLevels } = useAuth();

  const pathname = usePathname();
  const router = useRouter();
  const selectedId = pathname.split("/").pop();

  return (
    <LevelProvider>
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-row gap-20 bg-[#B87A00] h-3/5 pt-10 px-10 pb-10">
          <div className="flex flex-col h-full w-full">
            <div className="h-1/5">
              <Header
                title="Tasty Bug"
                level={selectedId}
                levels={levels}
                optionSetter={(id) => router.push(`/levels/${id}`)}
                completedLevels={completedLevels}
              />
            </div>
            <div className="h-4/5 p-4">
              {children}
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-[#FFCF60] h-2/5">
          <div className="m-4 w-2/5 bg-amber-100 rounded-2xl">
            <CodeVisualizer />
          </div>
        </div>
      </div>
    </LevelProvider>
  );
}