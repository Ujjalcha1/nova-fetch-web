import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DeviceFrame({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] shadow-[0_25px_60px_rgba(0,0,0,.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-gray-400">Nova Fetch</span>
      </div>

      {children}
    </div>
  );
}
