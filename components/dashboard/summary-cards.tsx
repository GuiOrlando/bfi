import { ArrowDownRight, ArrowUpRight, TrendingUp, WalletCards } from "lucide-react";
import { formatCurrency } from "./format-currency";

export default function SummaryCards() {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-[#246B9F]/10 p-3 text-[#246B9F]">
            <WalletCards size={21} />
          </div>
          <span className="rounded-full bg-[#2F9E71]/10 px-2.5 py-1 text-xs font-bold text-[#168254]">
            +4,8%
          </span>
        </div>
        <p className="mt-5 text-sm font-medium text-[#627D98]">Saldo total</p>
        <p className="mt-1 text-2xl font-bold">{formatCurrency(18750)}</p>
      </article>

      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-[#2F9E71]/10 p-3 text-[#168254]">
            <ArrowUpRight size={21} />
          </div>
          <span className="text-xs font-semibold text-[#627D98]">Este mês</span>
        </div>
        <p className="mt-5 text-sm font-medium text-[#627D98]">Receitas</p>
        <p className="mt-1 text-2xl font-bold text-[#168254]">
          {formatCurrency(4200)}
        </p>
      </article>

      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-[#D65A4A]/10 p-3 text-[#C75339]">
            <ArrowDownRight size={21} />
          </div>
          <span className="text-xs font-semibold text-[#627D98]">Este mês</span>
        </div>
        <p className="mt-5 text-sm font-medium text-[#627D98]">Despesas</p>
        <p className="mt-1 text-2xl font-bold text-[#C75339]">
          {formatCurrency(2958.8)}
        </p>
      </article>

      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-[#E0A13B]/15 p-3 text-[#9F7613]">
            <TrendingUp size={21} />
          </div>
          <span className="rounded-full bg-[#2F9E71]/10 px-2.5 py-1 text-xs font-bold text-[#168254]">
            +{formatCurrency(700)}
          </span>
        </div>
        <p className="mt-5 text-sm font-medium text-[#627D98]">
          Investimentos
        </p>
        <p className="mt-1 text-2xl font-bold">{formatCurrency(12500)}</p>
      </article>
    </section>
  );
}
