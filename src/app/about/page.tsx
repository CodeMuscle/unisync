import Footer from '@/components/global/footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold">UniSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 max-w-7xl mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About UniSync</h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <p>
                UniSync was founded in 2023 with a simple mission: to help people take control of their digital subscriptions.
                In today's world, where we subscribe to countless services, it's easy to lose track of what we're paying for and when.
              </p>
              <p>
                Our team of passionate developers and financial experts came together to create a solution that not only tracks
                your subscriptions but also provides intelligent insights to help you save money and optimize your digital life.
              </p>
              <p>
                With UniSync, we're not just building a product; we're creating a movement towards mindful digital consumption.
                We believe that by giving people the tools to understand and manage their subscriptions, we can help them make
                better financial decisions and reduce unnecessary spending.
              </p>
              <p>
                As we continue to grow and evolve, our commitment remains the same: to provide the most user-friendly,
                intelligent, and secure subscription management platform on the market. Join us in our mission to simplify
                the digital world, one subscription at a time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}