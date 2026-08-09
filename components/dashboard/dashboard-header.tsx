import Link from "next/link";
import { Bell, ChevronDown } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex min-h-20 items-center justify-between border-b border-[#D9E2EC] bg-white px-5 sm:px-8">
      <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#102A43] font-bold text-white">
          B
        </div>
        <span className="font-bold">BFI</span>
      </Link>

      <div className="hidden lg:block">
        <p className="text-sm text-[#627D98]">Sexta-feira, 8 de agosto</p>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          aria-label="Notificações"
          className="relative rounded-xl border border-[#D9E2EC] p-2.5 text-[#246B9F] transition hover:bg-[#F4F7FB]"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D65A4A]" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-[#D9E2EC] px-3 py-2 text-sm font-semibold hover:bg-[#F4F7FB]"
        >
          Agosto 2026
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
