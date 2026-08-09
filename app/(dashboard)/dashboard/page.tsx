import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardHeading from "@/components/dashboard/dashboard-heading";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import PatrimonyAndGoal from "@/components/dashboard/patrimony-and-goal";
import PlanningCards from "@/components/dashboard/planning-cards";
import SummaryCards from "@/components/dashboard/summary-cards";
import TransactionsAndCategories from "@/components/dashboard/transactions-and-categories";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/login");
  }

  const firstName = user.name.trim().split(/\s+/)[0] || "Usuário";

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#102A43]">
      <DashboardSidebar user={user} />

      <section className="lg:pl-72">
        <DashboardHeader />

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10">
          <DashboardHeading firstName={firstName} />
          <SummaryCards />
          <PatrimonyAndGoal />
          <TransactionsAndCategories />
          <PlanningCards />
        </div>
      </section>
    </main>
  );
}
