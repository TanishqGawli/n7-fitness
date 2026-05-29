"use client";

import { motion } from "framer-motion";

import {
  Dumbbell,
  Phone,
  MapPin,
  Camera,
  Mail,
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 text-white">

      {/* RED GLOW */}

      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP GRID */}

        <div className="grid gap-16 md:grid-cols-4">

          {/* BRAND */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-red-600 p-3">

                <Dumbbell size={28} />

              </div>

              <h2 className="text-3xl font-black">

                N7 FITNESS

              </h2>

            </div>

            <p className="mt-6 leading-relaxed text-gray-400">

              Premium fitness destination built for
              strength, transformation, discipline,
              and elite performance.

            </p>

          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >

            <h3 className="text-2xl font-bold text-red-500">

              QUICK LINKS

            </h3>

            <div className="mt-6 space-y-4 text-gray-400">

              <a href="#" className="block transition hover:text-red-500">
                Home
              </a>

              <a href="#" className="block transition hover:text-red-500">
                About
              </a>

              <a href="#" className="block transition hover:text-red-500">
                Services
              </a>

              <a href="#" className="block transition hover:text-red-500">
                Membership
              </a>

              <a href="#" className="block transition hover:text-red-500">
                Contact
              </a>

            </div>

          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >

            <h3 className="text-2xl font-bold text-red-500">

              CONTACT

            </h3>

            <div className="mt-6 space-y-6 text-gray-400">

              <div className="flex items-center gap-4">

                <Phone size={20} />

                <span>
                  +91 8977448774
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Mail size={20} />

                <span>
                  n7fitness@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin size={20} />

                <span>
                  Safilguda, Hyderabad
                </span>

              </div>

            </div>

          </motion.div>

          {/* SOCIAL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >

            <h3 className="text-2xl font-bold text-red-500">

              FOLLOW US

            </h3>

            <p className="mt-6 text-gray-400">

              Stay connected with our latest updates,
              transformations and gym culture.

            </p>

            <div className="mt-8 flex gap-4">

              <motion.a
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                href="https://www.instagram.com/n7fitness_safilguda?igsh=MXh1NnA0MnJyNXdjeg=="
                target="_blank"
                className="rounded-2xl border border-white/10 bg-zinc-950 p-4 transition hover:border-red-600"
              >

                <Camera size={24} />

              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* DIVIDER */}

        <div className="mt-20 border-t border-white/10 pt-8">

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col items-center justify-between gap-6 text-center md:flex-row"
          >

            <p className="text-gray-500">

              © 2026 N7 FITNESS. ALL RIGHTS RESERVED.

            </p>

            <p className="text-gray-600">

              Built with passion, power & discipline.

            </p>

          </motion.div>

        </div>

      </div>

    </footer>
  );
}