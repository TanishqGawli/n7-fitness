"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
    >

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >

        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />

      </video>

      {/* CINEMATIC OVERLAY */}

      <div className="absolute inset-0 bg-black/65" />

      {/* TOP GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* RED GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      {/* SIDE LIGHT */}

      <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-red-600/10 to-transparent blur-3xl" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:px-10">

        <div className="max-w-4xl">

          {/* SMALL TAG */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-red-500" />

            <p className="text-xs tracking-[0.35em] text-white/80 md:text-sm">

              PREMIUM FITNESS EXPERIENCE

            </p>

          </motion.div>

          {/* MAIN HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="mt-8 text-5xl font-black leading-[0.95] md:text-8xl"
          >

            BUILD
            <span className="text-red-600"> POWER.</span>

            <br />

            BUILD
            <span className="text-white/70"> CONFIDENCE.</span>

          </motion.h1>

          {/* SUBTEXT */}

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-gray-300 md:text-xl"
          >

            Experience next-generation fitness with elite
            equipment, cinematic interiors, expert trainers,
            and a transformation-driven environment designed
            for serious results.

          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="mt-12 flex flex-col gap-5 sm:flex-row"
          >

            {/* JOIN BUTTON */}

            <motion.a
              href="https://wa.me/918977448774?text=Hi%20N7%20Fitness!%20I%20want%20to%20join%20the%20gym."
              target="_blank"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center rounded-full bg-red-600 px-10 py-5 text-base font-bold tracking-[0.15em] text-white shadow-[0_15px_50px_rgba(220,38,38,0.35)] transition hover:bg-red-700"
            >

              JOIN NOW

            </motion.a>

            {/* EXPLORE BUTTON */}

            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 py-5 text-base font-bold tracking-[0.15em] text-white backdrop-blur-xl transition hover:bg-white/10"
            >

              EXPLORE GYM

            </motion.a>

          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mt-20 grid max-w-3xl grid-cols-3 gap-6"
          >

            <div>

              <h3 className="text-3xl font-black text-red-500 md:text-5xl">

                10+

              </h3>

              <p className="mt-2 text-sm tracking-[0.2em] text-white/60">

                SERVICES

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-red-500 md:text-5xl">

                9+

              </h3>

              <p className="mt-2 text-sm tracking-[0.2em] text-white/60">

                PREMIUM MACHINES

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-red-500 md:text-5xl">

                100%

              </h3>

              <p className="mt-2 text-sm tracking-[0.2em] text-white/60">

                TRANSFORMATION

              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}