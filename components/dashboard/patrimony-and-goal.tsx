import Link from "next/link";
import { MoreHorizontal, Target } from "lucide-react";
import { monthlyBalance } from "./dashboard-data";
import { formatCurrency } from "./format-currency";

export default function PatrimonyAndGoal() {
  return (
    <section className="mt-6 grid gap-6 xl:grid-cols-3">
      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold">Evolução do patrimônio</h2>
            <p className="mt-1 text-sm text-[#627D98]">
              Crescimento dos últimos seis meses.
            </p>
          </div>
          <button
            type="button"
            aria-label="Mais opções"
            className="rounded-lg p-2 text-[#627D98] hover:bg-[#F4F7FB]"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>

        <div className="mt-8 flex h-52 items-end justify-between gap-3 border-b border-[#D9E2EC] pb-1">
          {monthlyBalance.map((item) => (
            <div
              key={item.month}
              className="group flex h-full flex-1 flex-col justify-end"
            >
              <div className="relative flex justify-center">
                <span className="absolute -top-8 hidden rounded-md bg-[#102A43] px-2 py-1 text-xs font-semibold text-white group-hover:block">
                  {formatCurrency(item.value * 250)}
                </span>
                <div
                  className="w-full max-w-12 rounded-t-xl bg-[#2F9E71] transition group-hover:bg-[#246B9F]"
                  style={{ height: `${item.value}%` }}
                />
              </div>
              <p className="mt-3 text-center text-xs font-medium text-[#627D98]">
                {item.month}
              </p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold">Meta do mês</h2>
            <p className="mt-1 text-sm text-[#627D98]">
              Reserva de emergência
            </p>
          </div>
          <div className="rounded-xl bg-[#E0A13B]/15 p-2.5 text-[#9F7613]">
            <Target size={20} />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold">{formatCurrency(700)}</p>
            <p className="text-sm font-semibold text-[#168254]">70%</p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#E5EEEA]">
            <div className="h-full w-[70%] rounded-full bg-[#E0A13B]" />
          </div>
          <div className="mt-4 flex justify-between text-sm text-[#627D98]">
            <span>Meta: {formatCurrency(1000)}</span>
            <span>Faltam {formatCurrency(300)}</span>
          </div>
        </div>

        <Link
          href="/metas"
          className="mt-7 inline-flex text-sm font-bold text-[#246B9F] hover:underline"
        >
          Ver todas as metas
        </Link>
      </article>
    </section>
  );
}
