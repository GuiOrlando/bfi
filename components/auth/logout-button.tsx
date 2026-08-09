"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogout() {
    setErrorMessage("");
    setIsLoading(true);

    try {
      await apiFetch<void>("/api/auth/logout", {
        method: "POST",
      });

      router.replace("/login");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível sair da conta.",
      );
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoading}
        className="flex items-center gap-2 text-sm text-[#C5DDD5] transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
      >
        <LogOut size={16} />
        {isLoading ? "Saindo..." : "Sair da conta"}
      </button>

      {errorMessage && (
        <p role="alert" className="mt-2 text-xs text-[#FFB4A8]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
