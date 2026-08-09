import { Building2, CreditCard, ReceiptText, TrendingUp } from "lucide-react";

export const transactions = [
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

export const categories = [
  { name: "Moradia", amount: 1250, percentage: 38, color: "bg-[#D65A4A]" },
  {
    name: "Alimentação",
    amount: 680,
    percentage: 21,
    color: "bg-[#E0A13B]",
  },
  {
    name: "Transporte",
    amount: 390,
    percentage: 12,
    color: "bg-[#246B9F]",
  },
  { name: "Lazer", amount: 265, percentage: 8, color: "bg-[#2F9E71]" },
];

export const monthlyBalance = [
  { month: "Mar", value: 36 },
  { month: "Abr", value: 48 },
  { month: "Mai", value: 43 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 70 },
  { month: "Ago", value: 82 },
];
