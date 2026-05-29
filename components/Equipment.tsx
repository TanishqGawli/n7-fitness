"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const equipment = [
  { name: "PEC FLY / REAR DELT", folder: "pecfly" },
  { name: "MULTI PRESS", folder: "multipress" },
  { name: "LAT PULL DOWN WITH ROWING COMBO", folder: "latpulldown" },
  { name: "ASSISTED DIP CHIN", folder: "assisteddip" },
  { name: "LEG CURL / EXTENSION COMBO", folder: "legcurl" },
  { name: "ADDUCTOR / ABDUCTOR COMBO", folder: "adductor" },
  { name: "MULTI LINEAR BENCH", folder: "multilinearbench" },
  { name: "45° LEG PRESS", folder: "legpress" },
  { name: "SMITH / SQUAT RACK COMBO", folder: "smithmachine" },
];

export default function Equipment() {
  const [selected, setSelected] = useState(null);

  const { scrollYProgress } = useScroll();

  // 🔥 Softer premium motion (less robotic, more floaty)
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section id="equipment" className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="tracking-[0.4em] text-red-500">
            PREMIUM EQUIPMENT
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            TRAIN WITH <span className="text-red-600">THE BEST</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            World-class equipment designed for elite strength, precision, and transformation.
          </p>
        </motion.div>

        {/* SHOWROOM CAROUSEL */}
        <motion.div
          style={{ y: yMove, scale }}
          className="mt-40 flex gap-8 overflow-x-auto pb-10 scrollbar-hide"
        >

          {equipment.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              whileHover={{
                y: -18,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              className="group relative min-w-[360px] cursor-pointer overflow-hidden rounded-[40px] bg-white/5 backdrop-blur-xl"
            >

              {/* GLOW BORDER EFFECT */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition" />

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[40px]">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={`/equipment/${item.folder}/1.jpg`}
                  alt={item.name}
                  className="h-[480px] w-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {item.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  Premium engineered machine designed for controlled movement,
                  stability, and peak muscle activation.
                </p>

                <button className="mt-6 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-[0.2em] text-white/80 transition hover:bg-red-600 hover:text-white">
                  EXPLORE MACHINE
                </button>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>

      {/* PREMIUM MODAL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[40px] bg-zinc-950 p-8 border border-white/10"
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 rounded-full bg-red-600 p-3 transition hover:scale-110"
            >
              <X size={22} />
            </button>

            {/* TITLE */}
            <h2 className="mb-10 text-4xl font-black text-red-500">
              {selected.name}
            </h2>

            {/* IMAGES */}
            <div className="grid gap-6 md:grid-cols-2">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src={`/equipment/${selected.folder}/1.jpg`}
                className="rounded-[30px]"
              />

              <motion.img
                whileHover={{ scale: 1.02 }}
                src={`/equipment/${selected.folder}/2.jpg`}
                className="rounded-[30px]"
              />
            </div>

            {/* VIDEO */}
            <div className="mt-8">
              <video controls className="w-full rounded-[30px]">
                <source
                  src={`/equipment/${selected.folder}/video.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}