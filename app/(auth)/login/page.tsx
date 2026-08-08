import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#F4F7FB] px-5 py-8 text-[#102A43] sm:px-8">
            <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#102A43]/10">
                <div className="hidden w-5/12 flex-col justify-between bg-[#102A43] p-10 text-white md:flex">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.2em] text-[#A9C7DE]">
                            BFI
                        </p>

                        <h1 className="mt-6 text-4xl font-bold leading-tight">
                            Suas finanças,
                            <br />
                            sob controle.
                        </h1>

                        <p className="mt-5 max-w-sm leading-relaxed text-[#d9e2ec]">
                            Organize contas, acompanhe seus investimentos e tome decisões com mais clareza.
                        </p>
                    </div>

                    <p className="text-sm text-[#A9C7DE]">
                        Contas, Finanças e Investimentos
                    </p>
                </div>

                <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
                    <div className="w-full max-w-md">
                        <div className="mb-9">
                            <p className="text-sm font-semibold tracking-[0.2em] text-[#246B9F] md:hidden">
                                BFI
                            </p>

                            <h2 className="mt-3 text-3xl font-bold">Entrar na sua conta</h2>

                            <p className="mt-2 text-sm text-[#627D98]">
                                Informe seus dados para acessar seu controle financeiro.
                            </p>                          
                        </div>

                        <LoginForm />

                        <p className="mt-8 text-center text-sm text-[#627D98]">
                            Ainda não possui uma conta?{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#246B9F] hover:underline"
                            >
                                Criar conta
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}