"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const transformations = [
  {
    name: "AARAV",
    result: "LOST 18 KG",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "PRIYA",
    result: "GAINED STRENGTH",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "ROHAN",
    result: "MUSCLE TRANSFORMATION",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "NEHA",
    result: "BODY RECOMPOSITION",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Transformation() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-35%"]
  );

  return (

    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-32 text-white"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      {/* HEADING */}

      <div className="relative px-6 text-center">

        <motion.p
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
            duration: 1,
          }}
          className="tracking-[0.4em] text-red-500"
        >

          TRANSFORMATIONS

        </motion.p>

        <motion.h2
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
            duration: 1,
            delay: 0.2,
          }}
          className="mt-6 text-5xl font-black md:text-7xl"
        >

          REAL PEOPLE.
          <span className="text-red-600">
            {" "}REAL RESULTS.
          </span>

        </motion.h2>

        <motion.p
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
            duration: 1,
            delay: 0.4,
          }}
          className="mx-auto mt-8 max-w-3xl text-lg text-gray-400"
        >

          Every transformation tells a story of
          discipline, dedication, and elite coaching.

        </motion.p>

      </div>

      {/* HORIZONTAL SLIDER */}

      <motion.div
        style={{ x }}
        className="relative mt-24 flex gap-10 px-6"
      >

        {transformations.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="group relative min-w-[380px] overflow-hidden rounded-[40px] border border-white/10 bg-zinc-950"
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* CONTENT */}

            <div className="absolute bottom-0 left-0 p-8">

              <p className="tracking-[0.3em] text-red-500">
                MEMBER STORY
              </p>

              <h3 className="mt-4 text-4xl font-black">

                {item.name}

              </h3>

              <p className="mt-4 text-xl text-gray-300">

                {item.result}

              </p>

            </div>

            {/* FLOATING GLOW */}

            <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-600/20 blur-[90px]" />

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}