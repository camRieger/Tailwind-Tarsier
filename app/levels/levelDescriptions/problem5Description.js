export default function Problem5Description() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl">
        The tarsier found a sign pointing to his bug — but he can't read it, it's far too small!
      </p>
      <p className="text-lg">
        Tailwind's <code className="bg-slate-700 px-1 rounded">text-</code> classes
        control the size of text on the page. They range from tiny to large:
      </p>
      <ul className="list-disc list-inside text-lg flex flex-col gap-1">
        <li><code className="bg-slate-700 px-1 rounded">text-xs</code> — extra small</li>
        <li><code className="bg-slate-700 px-1 rounded">text-sm</code> — small</li>
        <li><code className="bg-slate-700 px-1 rounded">text-base</code> — default size</li>
        <li><code className="bg-slate-700 px-1 rounded">text-lg</code> — large</li>
        <li><code className="bg-slate-700 px-1 rounded">text-xl</code> — extra large</li>
        <li><code className="bg-slate-700 px-1 rounded">text-2xl</code> — double extra large</li>
      </ul>
      <p className="text-lg">
        Make the text on the sign big enough for the tarsier to read — He just woke up, so lets help him out with some bigger text!
      </p>
    </div>
  )
}