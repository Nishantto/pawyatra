"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PawYatraLanding() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does the battery last?",
      a: "Between ~15 hours and up to 5 days depending on signal, update frequency, and temperature.",
    },
    {
      q: "Is it waterproof?",
      a: "The housing is weather-resistant for rain, snow and splashes. Avoid full submersion for extended periods.",
    },
    {
      q: "Does it work outside Nepal?",
      a: "It works where supported 2G service is available. Check local coverage before travel.",
    },
    {
      q: "Will it fit my pet?",
      a: "Yes—at 22 g and 18.3 mm thick, it suits most medium–large collars. Use a snug, non-slip fit.",
    },
  ];

  const specs = [
    { k: "Network", v: "2G" },
    { k: "Positioning", v: "GPS + BDS + LBS" },
    { k: "Battery", v: "500 mAh" },
    { k: "Standby", v: "15 hours – 5 days" },
    { k: "Size", v: "65.5 × 37 × 18.3 mm" },
    { k: "Weight", v: "22 g" },
    { k: "Charging", v: "Magnetic USB" },
    { k: "Operating Temp", v: "−20 °C to +55 °C" },
  ];

  return (
    <div className="font-sans text-slate-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
  <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4">
    {/* Left: Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/Images/logo.png" alt="PawYatra" width={40} height={40} />
      <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
        PawYatra
      </span>
    </Link>

    {/* Center: Links */}
    <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
      {["Features", "How It Works", "Specs", "Pricing", "FAQ"].map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase().replace(/ /g, "")}`}
          className="relative group"
        >
          {item}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-500 to-blue-500 transition-all group-hover:w-full"></span>
        </a>
      ))}
    </nav>

    {/* Right: CTA */}
    <div className="flex gap-2">
      <a
        href="#contact"
        className="px-4 py-2 rounded-full border border-slate-300 text-sm hover:bg-slate-100"
      >
        Contact
      </a>
      <a
        href="#book"
        className="px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition"
      >
        Order Now
      </a>
    </div>
  </div>
</header>

      {/* Hero (media left + text center + media right) */}
<section className="relative overflow-hidden py-20 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
  {/* soft radial glow */}
  <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8 items-center">
    {/* LEFT media stack */}
    <div className="hidden lg:grid grid-rows-2 gap-4">
      <div className="relative h-74 rounded-3xl overflow-hidden shadow-lg">
        <Image src="/Images/device-black.png" alt="PawYatra tracker" fill className="object-cover" />
      </div>
      <div className="relative h-74 rounded-3xl overflow-hidden shadow-lg">
        <video
          src="/Images/dog_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* CENTER text */}
    <div className="text-center lg:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700"
      >
        GPS tracking that feels invisible — safety that feels priceless.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mt-4"
      >
        Live location, Safe-Zone alerts, and an easy app — inspired by world-class trackers, built for your pets’ adventures.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
      >
        <a
          href="#book"
          className="px-6 py-3 rounded-full bg-green-600 text-white font-medium shadow-lg shadow-green-200 hover:scale-[1.03] hover:shadow-green-300 transition"
        >
          Buy Now
        </a>
        <a
          href="#how"
          className="px-6 py-3 rounded-full border border-green-600 text-green-700 font-medium hover:bg-green-50 hover:scale-[1.03] transition"
        >
          See How It Works
        </a>
      </motion.div>

      {/* trust chips */}
      <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-8 text-xs font-medium text-slate-700">
        {["Two Way Call", "Waterproof Design", "Live GPS & Alerts", "Lightweight"].map((b, i) => (
          <li key={i} className="px-3 py-1 rounded-full bg-white/80 border">
            {b}
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT media stack */}
    <div className="hidden lg:grid grid-rows-2 gap-4">
      <div className="relative h-75 rounded-3xl overflow-hidden shadow-lg">
        <Image src="/Images/colors.png" alt="Colors" fill className="object-cover" />
      </div>
      <div className="relative h-74 rounded-3xl overflow-hidden shadow-lg">
        <video
          src="/Images/collar.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* MOBILE: media grid below text */}
    <div className="grid grid-cols-2 gap-4 lg:hidden mt-8">
      <div className="relative h-40 rounded-3xl overflow-hidden shadow">
        <Image src="/Images/device-black.png" alt="PawYatra tracker" fill className="object-cover" />
      </div>
      <div className="relative h-40 rounded-3xl overflow-hidden shadow">
        <video src="/Images/dog_vid.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
      </div>
      <div className="relative h-36 rounded-3xl overflow-hidden shadow">
        <Image src="/Images/colors.png" alt="Colors" fill className="object-cover" />
      </div>
      <div className="relative h-36 rounded-3xl overflow-hidden shadow">
        <video src="/Images/collar.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>

      {/* How It Works + Mission */}
<section id="how" className="relative overflow-hidden py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
  {/* background glow */}
  <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

  <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
    
    {/* LEFT: Our Mission */}
    <div className="relative rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl p-8">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700">
        Our Mission
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Over <span className="font-bold text-green-700">35% of pets</span> will go missing during their lifetime,
        and sadly <span className="font-bold text-red-500">80% never make it back</span>.  
        PawYatra is on a mission to change that. We’re building a community-powered safety network
        with lightweight, affordable GPS tags for cats and dogs — so every neighborhood becomes safer
        for pets and the people who love them.
      </p>

      {/* mission stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm">
        <div className="p-4 rounded-xl bg-gradient-to-r from-green-100 to-green-50 shadow">
          <div className="text-xl font-bold text-green-700">35%</div>
          Go missing
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-red-100 to-red-50 shadow">
          <div className="text-xl font-bold text-red-600">80%</div>
          Never return
        </div>
      </div>
    </div>

    {/* RIGHT: How It Works */}
    <div className="relative rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl p-8">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700">
        How It Works
      </h2>

      {/* steps */}
      <ul className="space-y-6">
        {[
          {t: "Attach the tracker", d: "Clip the 22g GPS tag onto your pet’s collar in seconds."},
          {t: "Set Safe-Zones", d: "Create zones in the app — home, lodge, or campsite — and get instant alerts."},
          {t: "Track live", d: "Follow your pet’s movements in real-time on the map and share access with family."},
        ].map((item, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-slate-800">{item.t}</h3>
              <p className="text-sm text-slate-600">{item.d}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* media */}
      <div className="mt-10 relative rounded-2xl overflow-hidden shadow-lg">
      </div>
    </div>
  </div>
</section>


      {/* Feature Panels */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Panel 1: Live Tracking */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow">
              <Image src="/Images/app-ui.png" alt="Live tracking map" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Live tracking when every second counts</h2>
              <p className="text-slate-600">See your pet move on the map in real-time and switch to a higher update rate during a search. Save battery when you’re relaxing at base camp.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Electronic Fence</li>
                <li>Low Battery Alarm</li>
                <li>Historical Tracking</li>
              </ul>
            </div>
          </div>

          {/* Panel 2: Virtual Fences */}
          <div className="grid md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-3">Electronic Fence With Safety Reminder</h3>
              <p className="text-slate-600">An electronic fence distance of 200-2,000 meters keeps pets safe within a secure area. Draw Safe-Zones around your home, lodge or campsite and get notified if your pet wanders out.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Create multiple zones</li>
                <li>Instant push notifications</li>
                <li>History of entries & exits</li>
              </ul>
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow order-1 md:order-2">
              <Image src="/Images/Virtual_Fences.PNG" alt="Activity & rest" fill className="object-cover" />
            </div>
          </div>

          {/* Panel 3: Waterproof & Dustproof Design */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-82 rounded-3xl overflow-hidden shadow">
              <Image src="/Images/water_proof.png" alt="Waterproof & Dustproof Design" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3">Waterproof & Dustproof Design</h3>
              <p className="text-slate-600">Engineered to withstand water, mud, and dirt, ensuring consistent performance in any environment.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Deep Waterproof</li>
                <li>Mud-Resistant</li>
                <li>Dustproof</li>
                <li>Anti-Bite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 ">Product Information</h2>
            <ul className="divide-y rounded-2xl border">
              {specs.map((s, i) => (
                <li key={i} className="flex justify-between gap-4 p-4">
                  <span className="font-medium text-slate-700">{s.k}</span>
                  <span className="text-slate-600">{s.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-102 rounded-3xl overflow-hidden shadow order-1 md:order-2">
            <div className="relative h-102 rounded-3xl overflow-hidden shadow">
              <Image src="/Images/device_size_detail.png" alt="Device Size Details" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Press / Featured In */}
    <section id="press" className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
      As Featured In
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80">
      {/* Example logos — replace with your own */}
      <a
        href="https://www.buzzfeed.com/kristatorres/i-put-a-tracking-device-on-my-kid-and-this-is-how"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 transition"
      >
        <img
          src="https://cdn.prod.website-files.com/58e7d4ae6077c264e391112a/6005e4742651c51e365ba600_BuzzFeed.png"
          alt="BuzzFeed"
          className="h-10 object-contain"
        />
      </a>

      <a
        href="https://www.wired.com/review/review-jiobit-location-monitor/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 transition"
      >
        <img
          src="https://cdn.prod.website-files.com/58e7d4ae6077c264e391112a/6005dea015382d750114a3e2_Digital%20Trends.jpeg"
          alt="Digital Trends"
          className="h-10 object-contain"
        />
      </a>

      <a
        href="https://www.cnbc.com/2018/04/21/jiobit-tracker-tells-parents-when-kids-straying-from-safe-places.html"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 transition"
      >
        <img
          src="https://cdn.prod.website-files.com/58e7d4ae6077c264e391112a/6005de9e8d0b9814cd60a720_CNBC.png"
          alt="CNBC"
          className="h-10 object-contain"
        />
      </a>

      <a
        href="https://www.pcmag.com/reviews/jiobit"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 transition"
      >
        <img
          src="https://cdn.prod.website-files.com/58e7d4ae6077c264e391112a/6005dea425d8dd524594eca8_PCMag.png"
          alt="PCMag"
          className="h-10 object-contain"
        />
      </a>

      <a
        href="https://www.tomsguide.com/us/best-gps-child-trackers,review-2884.html"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 transition"
      >
        <img
          src="https://cdn.prod.website-files.com/58e7d4ae6077c264e391112a/6005dea78d0b9805d960a724_Tom%27s%20Guide.png"
          alt="Tom's Guide"
          className="h-10 object-contain"
        />
      </a>
    </div>
  </div>
</section>


      {/* Device Shop CTA */}
      <section id="shop" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get the PawYatra Tacker</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow bg-white">
              <Image src="/Images/colors.png" alt="PawYatra Tag" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Lightweight, Collar-friendly, Pet Safety</h3>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>22 g, 65.5 × 37 × 18.3 mm</li>
                <li>Magnetic USB charging</li>
                <li>−20 °C to +55 °C operating range</li>
                <li>Works where supported 2G is available</li>
              </ul>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-bold">NPR 6,999</span>
                <a href="#book" className="px-5 py-2.5 rounded-full bg-green-600 text-white hover:bg-green-700">Buy Device</a>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">Sim Card is required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {plan: "Starter", price: "NPR 699/mo", desc: "Tracking + Safe Zones"},
              {plan: "Trek+", price: "NPR 999/mo", desc: "Live Tracking + Activity & Rest"},
              {plan: "Family Pack", price: "NPR 2499/mo", desc: "3 devices + Multi-Pet Dashboard"},
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md">
                <h3 className="font-semibold mb-2">{p.plan}</h3>
                <p className="text-2xl font-bold mb-2">{p.price}</p>
                <p className="text-sm text-slate-600 mb-4">{p.desc}</p>
                <a href="#book" className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700">
                  Choose {p.plan}
                </a>
                <p className="text-[11px] text-slate-500 mt-3">Subscription includes SIM/data. Device sold separately. Coverage depends on local networks.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border rounded-lg">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full text-left p-4 flex justify-between"
                >
                  <span>{f.q}</span>
                  <span>{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && <p className="px-4 pb-4 text-sm text-slate-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <div>
            pawyatra@gmail.com · +977 9705250411 · Tripureshwor, Kathmandu
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/pawyatra/">Instagram</Link>
            <Link href="https://www.tiktok.com/@pawyatra">TikTok</Link>
            <Link href="https://www.linkedin.com/company/pawyatra">LinkedIn</Link>
          </div>
          <div className="mt-4 md:mt-0">© 2025 PawYatra</div>
        </div>
      </footer>
    </div>
  );
}
