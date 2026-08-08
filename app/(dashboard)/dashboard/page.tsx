export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#f4f7fb] p-6 text-[#102a43] sm:p-10">
            <section className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#246b9f]">
                    BFI
                </p>

                <h1 className="mt-3 text-3xl font-bold">
                    Olá, Guilherme!
                </h1>

                <p className="mt-2 text-[#627d98]">
                    Seu painel financeiro será exibido aqui.
                </p>

                <div className="mt-8 rounded-2xl border border-[#d9e2ec] bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold">Dashboard em desenvolvimento</h2>

                    <p className="mt-2 text-sm text-[#627d98]">
                        Adicionar resumo de contas, despesas, receitas e investimentos
                    </p>
                </div>
            </section>
        </main>
    );
}