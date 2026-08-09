import Link from "next/link";
import {
  LayoutDashboard,
  ReceiptText,
  Target,
  TrendingUp,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import LogoutButton from "@/components/auth/logout-button";
import type { AuthenticatedUser } from "@/lib/auth";

function SidebarLink({
  href,
  label,
  icon: Icon,
  active = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-white/15 text-white"
          : "text-[#C5DDD5] hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={19} strokeWidth={2.2} />
      {label}
    </Link>
  );
}

export default function DashboardSidebar({
  user,
}: {
  user: AuthenticatedUser;
}) {
  const initial = Array.from(user.name.trim())[0]?.toUpperCase() ?? "U";

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col bg-[#102A43] px-5 py-7 lg:flex">
      <Link href="/dashboard" className="flex items-center gap-3 px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F9E71] text-lg font-bold text-white">
          B
        </div>

        <div>
          <p className="text-lg font-bold text-white">BFI</p>
          <p className="text-xs text-[#A9CFC3]">Minhas Finanças</p>
        </div>
      </Link>

      <nav className="mt-11 space-y-2">
        <SidebarLink
          href="/dashboard"
          label="Visão geral"
          icon={LayoutDashboard}
          active
        />
        <SidebarLink
          href="/movimentacoes"
          label="Movimentações"
          icon={ReceiptText}
        />
        <SidebarLink href="/contas" label="Minhas contas" icon={WalletCards} />
        <SidebarLink
          href="/investimentos"
          label="Investimentos"
          icon={TrendingUp}
        />
        <SidebarLink href="/metas" label="Metas financeiras" icon={Target} />
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F9E71] font-bold text-white">
            {initial}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {user.name}
            </p>
            <p className="truncate text-xs text-[#A9CFC3]">{user.email}</p>
          </div>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}
