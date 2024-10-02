import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MountainIcon,
  BarChartIcon,
  CreditCardIcon,
  BellIcon,
  UsersIcon,
  CheckIcon,
  RefreshCwIcon,
} from "lucide-react";
import Footer from "@/components/global/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">UniSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 max-w-7xl mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage All Your Subscriptions in One Place
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  UniSync helps you track, optimize, and save on your
                  subscriptions. Never overpay or forget a renewal again.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChartIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized recommendations to optimize your
                  subscriptions and save money.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CreditCardIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Virtual Credit Card</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Manage all your subscriptions with a single, secure virtual
                  credit card.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BellIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Smart Alerts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Never miss a renewal or price change with our intelligent
                  notification system.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <UsersIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Bill Splitting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easily split shared subscriptions with friends, family, or
                  roommates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary text-primary-foreground p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Connect Your Accounts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Securely link your bank accounts and credit cards to
                  automatically import your subscriptions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary text-primary-foreground p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Analyze Your Spending</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI analyzes your subscription spending patterns and
                  identifies potential savings.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary text-primary-foreground p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Optimize and Save</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Act on personalized recommendations to cancel, downgrade, or
                  find better alternatives for your subscriptions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary text-primary-foreground p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Monitor and Adjust</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Continuously track your subscriptions and receive ongoing
                  optimization suggestions as your needs change.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              What Our Users Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  "UniSync has saved me over $500 in the first year alone. It's
                  a game-changer!"
                </p>
                <p className="font-bold">- Sarah T.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  "I love how easy it is to split bills with my roommates. No
                  more awkward money conversations!"
                </p>
                <p className="font-bold">- Mike R.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  "The AI recommendations are spot-on. I've optimized all my
                  subscriptions effortlessly."
                </p>
                <p className="font-bold">- Emily L.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  "UniSync's virtual credit card feature has made managing my
                  subscriptions so much easier and secure."
                </p>
                <p className="font-bold">- Alex K.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Take Control?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of users who are saving money and simplifying
                their subscription management with UniSync.
              </p>
              <Button className="mt-4" size="lg">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
