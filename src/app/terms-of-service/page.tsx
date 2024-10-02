import Footer from "@/components/global/footer";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing or using UniSync, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any part of these terms, you may not use our
                service.
              </p>
              <h2 className="text-2xl font-semibold">2. Use of Service</h2>
              <p>
                You must be at least 18 years old to use UniSync. You are
                responsible for maintaining the confidentiality of your account
                and password and for restricting access to your account.
              </p>
              <h2 className="text-2xl font-semibold">3. Privacy Policy</h2>
              <p>
                Your use of UniSync is also governed by our Privacy Policy,
                which can be found{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  here
                </Link>
                .
              </p>
              <h2 className="text-2xl font-semibold">
                4. Modifications to Service
              </h2>
              <p>
                UniSync reserves the right to modify or discontinue, temporarily
                or permanently, the service with or without notice.
              </p>
              <h2 className="text-2xl font-semibold">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of [Your Jurisdiction], without regard to its conflict
                of law provisions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
