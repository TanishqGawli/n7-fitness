"use client";

import { motion } from "framer-motion";

const trainers = [
  {
    name: "ALEX CARTER",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "JULIA REYES",
    role: "Fat Loss Expert",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "MARCUS LEE",
    role: "Bodybuilding Specialist",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Trainers() {

  return (

    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center"
        >

          <p className="tracking-[0.4em] text-red-500">
            ELITE TRAINERS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">

            MEET OUR
            <span className="text-red-600">
              {" "}EXPERTS
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">

            Train with certified professionals dedicated
            to transforming your fitness journey.

          </p>

        </motion.div>

        {/* TRAINERS */}

        <div className="mt-24 space-y-24">

          {trainers.map((trainer, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
              }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className={`relative overflow-hidden rounded-[40px] border border-white/10 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >

                {/* IMAGE */}

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-[600px] w-full object-cover transition duration-700 hover:scale-110"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* FLOATING INFO */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl"
                >

                  <p className="text-sm tracking-[0.3em] text-red-400">
                    N7 TRAINER
                  </p>

                </motion.div>

              </motion.div>

              {/* CONTENT */}

              <div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                  }}
                  className="tracking-[0.4em] text-red-500"
                >

                  FITNESS COACH

                </motion.p>

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                  }}
                  className="mt-6 text-5xl font-black"
                >

                  {trainer.name}

                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                  }}
                  className="mt-6 text-2xl text-red-500"
                >

                  {trainer.role}

                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                  }}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400"
                >

                  Dedicated to helping members unlock
                  peak performance through elite coaching,
                  advanced training methods and premium
                  fitness guidance.

                </motion.p>

                {/* BUTTON */}

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-10 rounded-full bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
                >

                  VIEW PROFILE

                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}