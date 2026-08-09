import Link from "next/link";
import { CircleDollarSign } from "lucide-react";
import { categories, transactions } from "./dashboard-data";
import { formatCurrency } from "./format-currency";

export default function TransactionsAndCategories() {
  return (
    <section className="mt-6 grid gap-6 xl:grid-cols-5">
      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm sm:p-6 xl:col-span-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Movimentações recentes</h2>
            <p className="mt-1 text-sm text-[#627D98]">
              Últimos lançamentos realizados.
            </p>
          </div>
          <Link
            href="/movimentacoes"
            className="text-sm font-bold text-[#246B9F] hover:underline"
          >
            Ver todas
          </Link>
        </div>

        <div className="mt-5 divide-y divide-[#E5EEEA]">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            const isIncome = transaction.type === "income";

            return (
              <div
                key={`${transaction.title}-${transaction.date}`}
                className="flex items-center gap-3 py-4"
              >
                <div className={`rounded-xl p-2.5 ${transaction.color}`}>
                  <Icon size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">
                    {transaction.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#627D98]">
                    {transaction.category} · {transaction.date}
                  </p>
                </div>
                <p
                  className={`text-sm font-bold ${
                    isIncome ? "text-[#168254]" : "text-[#C75339]"
                  }`}
                >
                  {isIncome ? "+" : "-"}{" "}
                  {formatCurrency(Math.abs(transaction.amount))}
                </p>
              </div>
            );
          })}
        </div>
      </article>

      <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold">Despesas por categoria</h2>
            <p className="mt-1 text-sm text-[#627D98]">
              Distribuição em agosto.
            </p>
          </div>
          <CircleDollarSign size={22} className="text-[#246B9F]" />
        </div>

        <div className="mt-6 space-y-5">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between gap-4 text-sm">
                <span className="font-semibold">{category.name}</span>
                <span className="text-[#627D98]">
                  {formatCurrency(category.amount)}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E5EEEA]">
                <div
                  className={`h-full rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/movimentacoes"
          className="mt-7 inline-flex text-sm font-bold text-[#246B9F] hover:underline"
        >
          Analisar despesas
        </Link>
      </article>
    </section>
  );
}
