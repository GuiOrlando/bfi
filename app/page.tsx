const transactions = [
    {
      description: "Salário",
      category: "Receita",
      date: "05 ago. 2026",
      amount: "+ R$ 3.500,00",
      color: "#2f9e71",
    },
    {
      description: "Supermercado",
      category: "Alimentação",
      date: "04 ago. 2026",
      amount: "- R$ 328,40",
      color: "#d65a4a",
    },
    {
      description: "Aporte em BBSE3",
      category: "Investimentos",
      date: "03 ago. 2026",
      amount: "- R$ 350,00",
      color: "#246b9f",
    },
    {
      description: "Conta de energia",
      category: "Moradia",
      date: "02 ago. 2026",
      amount: "- R$ 142,80",
      color: "#d65a4a",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f4f7fb] p-6 text-[#102a43] md:p-10">
            <header className="mx-auto mb-8 flex max-w-7xl flex-col gap-5 rounded-2xl bg-[#102A43] p-6 text-white shadow-lg md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-medium text-[#a9c7de]">Bem vindo ao</p>
                    <h1 className="text-3xl font-bold">BFI</h1>
                    <p className="mt-1 text-sm text-[#d9e2ec]">Contas, Finanças e Investimentos</p>
                </div>

                <button className="rounded-lg bg-[#246b9f] px-5 py-3 text-sm font-semibold transition hover:bg-[#1D5A88] cursor-pointer">
                    + Novo lançamento
                </button>
            </header>

            <section className="mx-auto max-w-7xl">
                <div className="mb-6">
                    <p className="text-sm text-[#627d98]">Visão geral</p>
                    <h2 className="text-2xl font-bold">Resumo financeiro</h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <SummaryCard 
                        title="Patrimônio total"
                        value="R$ 28.350,00"
                        detail="Contas e investimentos"
                        color="#246b9f"
                    />

                    <SummaryCard 
                        title="Receitas do mês"
                        value="R$ 3.500,00"
                        detail="Entradas confirmadas"
                        color="#2F9E71"
                    />

                    <SummaryCard 
                        title="Despesas do mês"
                        value="R$ 1.284,60"
                        detail="Saídas confirmadas"
                        color="#D65A4A"
                    />

                    <SummaryCard 
                        title="Investido no mês"
                        value="R$ 700,00"
                        detail="Ações e FIIs"
                        color="#E0A13B"
                    />
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#627d98]">Movimentações</p>
                                <h2 className="text-xl font-bold">Lançamentos recentes</h2>
                            </div>

                            <button className="text-sm font-semibold text-[#246b9f] hover:underline cursor-pointer">
                                Ver todos
                            </button>
                        </div>

                        <div className="divide-y divide-[#D9E2EC]">
                            {transactions.map((transaction) => (
                                <article
                                  key={transaction.description}
                                  className="flex items-center justify-between gap-4 py-4"
                                >
                                  <div className="flex items-center gap-3">
                                      <div
                                          className="h-10 w-1 rounded-full"
                                          style={{ backgroundColor: transaction.color }}
                                      />

                                      <div>
                                          <h3 className="font-semibold">{transaction.description}</h3>
                                          <p className="text-sm text-[#627d98]">{transaction.category} · {transaction.date}</p>
                                      </div>
                                  </div>

                                  <p
                                    className="whitespace-nowrap font-bold"
                                    style={{ color: transaction.color }}
                                  >
                                    {transaction.amount}
                                  </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <aside className="rounded-2xl bg-white p-6 shadow:sm">
                        <p className="text-sm text-[#627d98]">Distribuição atual</p>
                        <h2 className="mb-6 text-xl font-bold">Carteira</h2>

                        <div className="space-y-5">
                            <PortfolioItem
                                name="Renda fixa"
                                percentage="92%"
                                color="#246b9f"
                            />

                            <PortfolioItem
                                name="Ações"
                                percentage="5%"
                                color="#2F9E71"
                            />

                            <PortfolioItem
                                name="FIIs"
                                percentage="3%"
                                color="#E0A13B"
                            />
                        </div>

                        <button className="mt-8 w-full rounded-lg border border-[#246b9f] px-4 py-3 text-sm font-semibold text-[#246B9F] transition hover:bg-[#EAF2F8] cursor-pointer">
                            Ver investimentos
                        </button>
                    </aside>
                </div>
            </section>
        </main>
    )
}

type SummaryCardProps = {
    title: string;
    value: string;
    detail: string;
    color: string;
};

type PortfolioItemProps = {
    name: string;
    percentage: string;
    color: string;
};

function SummaryCard({ title, value, detail, color }: SummaryCardProps) {
    return (
        <article className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-5 h-2 w-12 rounded-full" style={{ backgroundColor: color }} />

            <p className="text-sm text-[#627d98]">{title}</p>
            <strong className="mt-1 block text-2xl">{value}</strong>
            <p className="mt-2 text-sm text-[#627d98">{detail}</p>
        </article>
    );
}

function PortfolioItem({ name, percentage, color }: PortfolioItemProps) {
    return (
        <div>
            <div className="mb-2 flex justify-between text-sm">
                <span>{name}</span>
                <strong>{percentage}</strong>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#eaf0f5]">
                <div
                    className="h-full rounded-full"
                    style={{
                      width: percentage,
                      backgroundColor: color,
                    }}
                  />
            </div>
        </div>
    );
}