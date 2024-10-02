import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChartIcon,
  CreditCardIcon,
  BellIcon,
  UsersIcon,
} from "lucide-react";
import Footer from "@/components/global/footer";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold">UniSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 max-w-7xl mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              UniSync Features
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChartIcon className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">AI-Powered Insights</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized recommendations to optimize your
                  subscriptions and save money.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CreditCardIcon className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Virtual Credit Card</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Manage all your subscriptions with a single, secure virtual
                  credit card.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BellIcon className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Smart Alerts</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Never miss a renewal or price change with our intelligent
                  notification system.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <UsersIcon className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Bill Splitting</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easily split shared subscriptions with friends, family, or
                  roommates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
