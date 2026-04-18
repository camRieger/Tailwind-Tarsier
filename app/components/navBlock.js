'use client';

export default function NavBlock({ currentLevel, levels, optionSetter, completedLevels = [] }) {
  return (
    <div className="flex-2 flex items-center justify-center">
      <select
        value={currentLevel}
        onChange={(e) => optionSetter(e.target.value)}
        className="bg-amber-900 text-white px-4 py-2 rounded-lg"
      >
        {levels.map((level) => (
          <option key={level.id} value={level.id}>
            {level.label} {completedLevels.includes(level.id) ? "✓ " : ""}
          </option>
        ))}
      </select>
    </div>
  );
}