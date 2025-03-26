import { CalendarIcon, InstagramIcon } from "lucide-react";

export default function SKAllure() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-serif">
      <section className="bg-gradient-to-r from-pink-100 to-pink-200 py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-2">SK Allure</h1>
        <p className="text-lg italic">Manicures & Pedicures — Classy, Clean, Alluring</p>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-4 shadow">
            <h3 className="text-xl font-medium mb-2">Manicure</h3>
            <p className="mb-2">$50 — Includes cuticle care, shaping, polish, and massage.</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl w-full">
              Book Now
            </button>
          </div>
          <div className="border rounded-2xl p-4 shadow">
            <h3 className="text-xl font-medium mb-2">Pedicure</h3>
            <p className="mb-2">$50 — Includes exfoliation, nail care, massage, and polish.</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl w-full">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Hours</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Mon–Fri: 4:00 PM – 10:00 PM</li>
          <li>Sat–Sun: 9:00 AM – 8:00 PM</li>
          <li>Holidays: Follows weekend schedule</li>
        </ul>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
        <p>Cash App, Apple Pay, Venmo, PayPal, and Cash accepted.</p>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Loyalty Rewards</h2>
        <p>Earn a free manicure or pedicure after 5 visits! Just check in at each appointment and track your rewards with us.</p>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Referral Program</h2>
        <p>Love your nails? Tell a friend! Get $10 off your next service for every new client you refer to SK Allure.</p>
      </section>

      <section className="py-10 px-6 text-center">
        <a
          href="https://instagram.com/sk_allure_"
          target="_blank"
          className="inline-flex items-center text-pink-600 hover:text-pink-800 text-lg"
        >
          <InstagramIcon className="mr-2" /> Follow us on Instagram
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} SK Allure. All rights reserved.
      </footer>
    </main>
  );
}
