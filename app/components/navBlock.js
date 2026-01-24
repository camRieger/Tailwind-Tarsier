'use client'

import { useRouter } from "next/navigation";

export default function NavBlock({ currentPage }) {
  const router = useRouter();

  const pages = [
    { label: "Problem 1", path: "/test" },
    { label: "Problem 2", path: "/" },
  ];

  return (
    <div className="flex-2 flex items-center justify-center ">
      <select
        value={currentPage}
        onChange={(e) => router.push(e.target.value)}
        className="bg-amber-900 text-white px-4 py-2 rounded-lg"
      >
        {pages.map((page) => (
          <option key={page.path} value={page.path}>
            {page.label}
          </option>
        ))}
      </select>
    </div>
  );
}