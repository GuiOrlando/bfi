import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BFI | Contas, Finanças e Investimentos",
    description: "Controle simples das suas contas, finanças e investimentos.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}