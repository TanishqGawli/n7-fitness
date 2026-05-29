"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Membership() {
  const router = useRouter();

  return (
    <section id="membership" className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">
      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="tracking-[0.4em] text-red-500">
            MEMBERSHIP EXPERIENCE
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            TRAIN WITH <span className="text-red-600">POWER</span>
          </h2>
        </motion.div>

        {/* PREMIUM INFO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => router.push("/membership-plans")}
          className="relative mt-20 cursor-pointer overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-14 backdrop-blur-2xl"
        >
          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />

          <div className="relative space-y-6 text-center">
            <h3 className="text-3xl font-black md:text-4xl">
              Your Fitness Journey Starts Here
            </h3>

            <p className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed">
              Choose a membership that fits your lifestyle and unlock unlimited
              access to premium training, expert guidance, and a transformation
              system designed for real results.
            </p>

            <p className="text-sm tracking-[0.3em] text-red-400">
              CLICK TO VIEW MEMBERSHIP PLANS
            </p>

            {/* CTA BUTTON LOOK */}
            <div className="mx-auto mt-6 w-fit rounded-full bg-red-600 px-10 py-4 text-sm font-bold tracking-[0.2em] transition hover:bg-red-700">
              EXPLORE PLANS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}