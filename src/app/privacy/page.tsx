import Footer from "@/components/global/footer";
import Link from "next/link";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, use our services, or communicate with us.
                This may include your name, email address, and financial
                information related to your subscriptions.
              </p>
              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to process your transactions, to send you
                technical notices and support messages, and to communicate with
                you about products, services, offers, and events.
              </p>
              <h2 className="text-2xl font-semibold">
                3. Information Sharing and Security
              </h2>
              <p>
                We do not share your personal information with third parties
                except as described in this policy. We take reasonable measures
                to help protect your personal information from loss, theft,
                misuse, unauthorized access, disclosure, alteration, and
                destruction.
              </p>
              <h2 className="text-2xl font-semibold">4. Your Choices</h2>
              <p>
                You may update, correct, or delete your account information at
                any time by logging into your online account or by contacting
                us. You may also opt out of receiving promotional communications
                from us by following the instructions in those messages.
              </p>
              <h2 className="text-2xl font-semibold">
                5. Changes to this Policy
              </h2>
              <p>
                We may change this privacy policy from time to time. If we make
                changes, we will notify you by revising the date at the top of
                the policy and, in some cases, we may provide you with
                additional notice.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
