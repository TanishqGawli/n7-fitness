"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Strength Training",
    description:
      "Build muscle, increase power, and improve overall athletic performance.",
    color: "from-red-700 to-red-500",
  },
  {
    title: "Weight Loss",
    description:
      "Burn fat faster with high-performance transformation programs.",
    color: "from-orange-700 to-orange-500",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one elite coaching tailored for maximum results.",
    color: "from-pink-700 to-pink-500",
  },
  {
    title: "Zumba",
    description:
      "High-energy dance workouts that make cardio exciting and fun.",
    color: "from-purple-700 to-purple-500",
  },
  {
    title: "CrossFit",
    description:
      "Intense functional training sessions designed for strength and endurance.",
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Cardio Training",
    description:
      "Improve stamina and calorie burn with dynamic cardio workouts.",
    color: "from-cyan-700 to-cyan-500",
  },
  {
    title: "Body Transformation",
    description:
      "Complete physical transformation programs for real results.",
    color: "from-green-700 to-green-500",
  },
  {
    title: "Muscle Building",
    description:
      "Scientifically designed workouts focused on lean muscle growth.",
    color: "from-yellow-700 to-yellow-500",
  },
  {
    title: "Functional Training",
    description:
      "Enhance mobility, flexibility, and real-world body movement.",
    color: "from-indigo-700 to-indigo-500",
  },
  {
    title: "HIIT Workouts",
    description:
      "Explosive interval training for maximum fat burn and conditioning.",
    color: "from-rose-700 to-rose-500",
  },
];

export default function Services() {
  const [stack, setStack] = useState(services);

  const handleClick = () => {
    setStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 py-32 text-white">
      {/* SOFT GLOW BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="text-center">
          <p className="tracking-[0.4em] text-red-500">OUR SERVICES</p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            TRAIN LIKE <span className="text-red-600">A CHAMPION</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Tap the top card to explore our premium fitness programs.
          </p>
        </div>

        {/* STACK */}
        <div className="relative mx-auto mt-28 h-[550px] max-w-3xl">
          <AnimatePresence>
            {stack.map((service, index) => {
              const isTop = index === 0;

              return (
                <motion.div
                  key={service.title}
                  onClick={isTop ? handleClick : undefined}
                  initial={{ opacity: 0, y: 120, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: index * 16,
                    scale: 1 - index * 0.035,
                    rotate: index * 1,
                  }}
                  exit={{ opacity: 0, y: 200, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  }}
                  className={`absolute left-0 top-0 w-full rounded-[50px] p-12 shadow-2xl cursor-${
                    isTop ? "pointer" : "default"
                  } bg-gradient-to-br ${service.color}`}
                  style={{
                    zIndex: 100 - index,
                  }}
                  whileHover={
                    isTop
                      ? {
                          scale: 1.02,
                          y: index * 16 - 4,
                        }
                      : {}
                  }
                >
                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 rounded-[50px] bg-black/20" />

                  {/* TITLE */}
                  <h3 className="relative text-4xl font-black md:text-5xl">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative mt-8 text-xl leading-relaxed text-white/80">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {isTop && (
                    <button className="relative mt-12 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold tracking-[0.2em] backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-black">
                      TAP TO CONTINUE
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}