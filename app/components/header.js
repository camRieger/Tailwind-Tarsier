import NavBlock from "@/app/components/navBlock";

export default function Header({ title, levels, level, optionSetter, completedLevels }) {
  return (
    <header className="flex rounded-4xl w-auto h-full bg-amber-600">
      <h1 className="flex-3 flex items-center justify-center text-xl lg:text-4xl truncate px-2">
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