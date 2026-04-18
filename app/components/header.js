import NavBlock from "@/app/components/navBlock";

export default function Header({ title, levels, level, optionSetter, completedLevels }) {
  return (
    <header className="flex rounded-4xl w-auto sm:h-1/2 md:h-full bg-amber-600">
      <h1 className="flex-3 flex items-center justify-center text-4xl sm:test-2xl">
        {title}
      </h1>
      <NavBlock
        optionSetter={optionSetter}
        levels={levels}
        currentLevel={level}
        completedLevels={completedLevels}
      />
    </header>
  )
}