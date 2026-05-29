"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517837016564-bfcdb4d57cf0?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1600&auto=format&fit=crop",
];

interface GlassImageProps {
  img: string;
  height: string;
}

export default function Gallery() {

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 Softer premium parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-6 py-40 text-white"
    >

      {/* SOFT LUXURY GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <p className="tracking-[0.4em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-6 text-5xl font-black md:text-8xl">
          EXPERIENCE THE <span className="text-red-600">ENERGY</span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
          Step inside N7 Fitness — where training meets cinematic luxury.
        </p>

      </motion.div>

      {/* LUXURY GRID */}
      <div className="relative mt-32 grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* COLUMN 1 */}
        <motion.div style={{ y: y1 }} className="space-y-10">

          {images.slice(0, 4).map((img, i) => (
            <GlassImage
              key={i}
              img={img}
              height="h-[420px]"
            />
          ))}

        </motion.div>

        {/* COLUMN 2 */}
        <motion.div style={{ y: y2 }} className="space-y-10">

          {images.slice(4, 8).map((img, i) => (
            <GlassImage
              key={i}
              img={img}
              height="h-[560px]"
            />
          ))}

        </motion.div>

        {/* COLUMN 3 */}
        <motion.div style={{ y: y3 }} className="space-y-10">

          {images.slice(8, 12).map((img, i) => (
            <GlassImage
              key={i}
              img={img}
              height="h-[480px]"
            />
          ))}

        </motion.div>

      </div>

      {/* FOOTER TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-40 text-center"
      >

        <h3 className="text-4xl font-black md:text-6xl">
          THIS ISN’T JUST A GYM.
          <br />
          <span className="text-red-600">
            IT’S A MOVEMENT.
          </span>
        </h3>

      </motion.div>

    </section>
  );
}

/* 🔥 PREMIUM GLASS IMAGE COMPONENT */

function GlassImage({
  img,
  height,
}: GlassImageProps) {

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >

      {/* IMAGE */}
      <img
        src={img}
        alt="Gym"
        className={`${height} w-full object-cover transition duration-[1200ms] group-hover:scale-110`}
      />

      {/* LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 transition group-hover:opacity-30" />

      {/* SOFT BORDER GLOW */}
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 transition group-hover:ring-red-500/30" />

    </motion.div>
  );
}