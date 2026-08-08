"use client";

import { useRouter } from "next/navigation";
import { useState, type SubmitEvent } from "react";
import { apiFetch } from "@/lib/api";

type RegisterResponse = {
    message: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
};

export default function RegisterForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setErrorMessage("");
        setIsLoading(true);

        try {
            await apiFetch<RegisterResponse>("/api/auth/register", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            router.push("/dashboard");
            router.refresh();
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Não foi possível criar sua conta.",
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {errorMessage && (
                <div
                    role="alert"
                    className="rounded-xl border border-[#D65A4A]/30 bg-[#D65A4A]/10 px-4 py-3 text-sm text-[#A63C32]"
                >
                    {errorMessage}
                </div>
            )}

            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Nome completo
                </label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Seu nome"
                    autoComplete="name"
                    minLength={3}
                    maxLength={100}
                    required
                    disabled={isLoading}
                    className="w-full rounded-xl border border-[#D9E2EC] px-4 py-3 text-sm outline-none transition focus:border-[#246B9F] focus:ring-4 focus:ring-[#246B9F]/15 disabled:bg-[#F4F7FB]"
                />
            </div>

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    E-mail
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seuemail@exemplo.com"
                    autoComplete="email"
                    required
                    disabled={isLoading}
                    className="w-full rounded-xl border border-[#D9E2EC] px-4 py-3 text-sm outline-none transition focus:border-[#246B9F] focus:ring-4 focus:ring-[#246B9F]/15 disabled:bg-[#F4F7FB]"
                />
            </div>

            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold">
                    Senha
                </label>

                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Mínimo de 8 caracteres"
                    autoComplete="new-password"
                    minLength={8}
                    maxLength={72}
                    required
                    disabled={isLoading}
                    className="w-full rounded-xl border border-[#D9E2EC] px-4 py-3 text-sm outline-none transition focus:border-[#246B9F] focus:ring-4 focus:ring-[#246B9F]/15 disabled:bg-[#F4F7FB]"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#246B9F] px-4 py-3 font-semibold text-white transition hover:bg-[#1D5A88] disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isLoading ? "Criando conta..." : "Criar conta"}
            </button>
        </form>
    );
}