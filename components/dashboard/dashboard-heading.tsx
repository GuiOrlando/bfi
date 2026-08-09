import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardHeading({ firstName }: { firstName: string }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold text-[#246B9F]">VISÃO GERAL</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          Olá, {firstName}!
        </h1>
        <p className="mt-2 text-[#627D98]">
          Acompanhe como estão suas finanças neste mês.
        </p>
      </div>

      <Link
        href="/movimentacoes/nova"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F9E71] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#168254]"
      >
        <Plus size={19} />
        Nova movimentação
      </Link>
    </div>
  );
}
