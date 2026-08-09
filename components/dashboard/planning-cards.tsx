import Link from "next/link";
import { Landmark, PiggyBank } from "lucide-react";

export default function PlanningCards() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2">
      <article className="flex items-center gap-4 rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="rounded-xl bg-[#246B9F]/10 p-3 text-[#246B9F]">
          <Landmark size={22} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Contas e reservas</p>
          <p className="mt-1 text-sm text-[#627D98]">
            Você possui 3 contas cadastradas.
          </p>
        </div>
        <Link
          href="/contas"
          className="text-sm font-bold text-[#246B9F] hover:underline"
        >
          Ver contas
        </Link>
      </article>

      <article className="flex items-center gap-4 rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="rounded-xl bg-[#2F9E71]/10 p-3 text-[#168254]">
          <PiggyBank size={22} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Planejamento financeiro</p>
          <p className="mt-1 text-sm text-[#627D98]">
            Você já alcançou 70% da sua meta mensal.
          </p>
        </div>
        <Link
          href="/metas"
          className="text-sm font-bold text-[#246B9F] hover:underline"
        >
          Ver metas
        </Link>
      </article>
    </section>
  );
}
