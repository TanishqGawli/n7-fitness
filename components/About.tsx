"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >

          <p className="tracking-[0.4em] text-red-500">
            ABOUT N7 FITNESS
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            BUILT FOR{" "}
            <span className="text-red-600">PEOPLE</span>
            <br />
            WHO WANT MORE
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            N7 Fitness is more than a gym — it is a performance-driven space where discipline meets design.
            We focus on transformation through structured training, premium equipment, and a mindset built for long-term results.
          </p>

          {/* PREMIUM VALUE POINTS (REPLACEMENT FOR STATS) */}
          <div className="mt-14 space-y-6">

            <div className="border-l-2 border-red-600 pl-5">
              <h3 className="text-xl font-bold">Elite Training Environment</h3>
              <p className="text-gray-400">
                Designed for focus, intensity, and measurable progress without distractions.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-5">
              <h3 className="text-xl font-bold">Structured Transformation System</h3>
              <p className="text-gray-400">
                Every workout follows a clear progression path built for real results.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-5">
              <h3 className="text-xl font-bold">Premium Fitness Experience</h3>
              <p className="text-gray-400">
                From equipment to coaching mindset — everything is built to feel next-level.
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-[40px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop"
              alt="Gym"
              className="h-[700px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 rounded-3xl border border-white/10 bg-black/60 px-8 py-6 backdrop-blur-xl"
          >
            <p className="tracking-[0.3em] text-red-500">
              PREMIUM EXPERIENCE
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Train Like An Athlete
            </h3>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}