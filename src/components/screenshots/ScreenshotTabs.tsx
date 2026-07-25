"use client";

interface Props {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function ScreenshotTabs({ tabs, active, onChange }: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-full px-5 py-2 transition ${
            active === tab
              ? "bg-violet-600 text-white"
              : "bg-white/5 text-gray-400 hover:bg-white/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
