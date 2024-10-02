import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Footer from "@/components/global/footer";

export default function PricingPage() {
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
              Pricing Plans
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  <span className="text-4xl font-bold">$9.99</span> / month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Up to 10 subscriptions
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Basic insights
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Email support
                  </li>
                </ul>
                <Button className="mt-6">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-center">Pro</h3>
                <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  <span className="text-4xl font-bold">$19.99</span> / month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Unlimited subscriptions
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Advanced AI insights
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Priority support
                  </li>
                </ul>
                <Button className="mt-6">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  <span className="text-4xl font-bold">Custom</span> pricing
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    All Pro features
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button className="mt-6">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
