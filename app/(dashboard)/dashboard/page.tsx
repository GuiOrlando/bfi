import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Landmark,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  PiggyBank,
  Plus,
  ReceiptText,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const transactions = [
  {
    title: "Salário",
    category: "Receita",
    date: "08 ago. 2026",
    amount: 4200,
    type: "income",
    icon: Building2,
    color: "bg-[#2F9E71]/12 text-[#168254]",
  },
  {
    title: "Supermercado",
    category: "Alimentação",
    date: "07 ago. 2026",
    amount: -328.9,
    type: "expense",
    icon: ReceiptText,
    color: "bg-[#D65A4A]/12 text-[#C75339]",
  },
  {
    title: "Aporte em investimentos",
    category: "Investimentos",
    date: "06 ago. 2026",
    amount: -700,
    type: "expense",
    icon: TrendingUp,
    color: "bg-[#E0A13B]/15 text-[#9F7613]",
  },
  {
    title: "Netflix",
    category: "Assinaturas",
    date: "05 ago. 2026",
    amount: -44.9,
    type: "expense",
    icon: CreditCard,
    color: "bg-[#246B9F]/12 text-[#1B625E]",
  },
];

const categories = [
  { name: "Moradia", amount: 1250, percentage: 38, color: "bg-[#D65A4A]" },
  { name: "Alimentação", amount: 680, percentage: 21, color: "bg-[#E0A13B]" },
  { name: "Transporte", amount: 390, percentage: 12, color: "bg-[#246B9F]" },
  { name: "Lazer", amount: 265, percentage: 8, color: "bg-[#2F9E71]" },
];

const monthlyBalance = [
  { month: "Mar", value: 36 },
  { month: "Abr", value: 48 },
  { month: "Mai", value: 43 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 70 },
  { month: "Ago", value: 82 },
];

function SidebarLink({
  href,
  label,
  icon: Icon,
  active = false,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
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

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#102A43]">
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
              G
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Guilherme Orlando
              </p>
              <p className="truncate text-xs text-[#A9CFC3]">
                guilherme160702@gmail.com
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-sm text-[#C5DDD5] transition hover:text-white"
          >
            <LogOut size={16} />
            Sair da conta
          </button>
        </div>
      </aside>

      <section className="lg:pl-72">
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

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-[#246B9F]">
                VISÃO GERAL
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                Olá, Guilherme!
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
              <p className="mt-5 text-sm font-medium text-[#627D98]">
                Saldo total
              </p>
              <p className="mt-1 text-2xl font-bold">{formatCurrency(18750)}</p>
            </article>

            <article className="rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-[#2F9E71]/10 p-3 text-[#168254]">
                  <ArrowUpRight size={21} />
                </div>
                <span className="text-xs font-semibold text-[#627D98]">
                  Este mês
                </span>
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
                <span className="text-xs font-semibold text-[#627D98]">
                  Este mês
                </span>
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
        </div>
      </section>
    </main>
  );
}