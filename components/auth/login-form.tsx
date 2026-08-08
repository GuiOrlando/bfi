"use client";

import { useState, type SubmitEvent } from "react";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    required
                />
            </div>

            <div>
                <div>
                    <label htmlFor="password">Senha</label>

                    <button
                        type="button"
                    >
                        Esqueci minha senha
                    </button>
                </div>

                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    required
                    minLength={6}
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Entrando..." : "Entrar"}
            </button>
        </form>
    );
}