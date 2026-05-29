"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul",
    review:
      "Best gym atmosphere in the city. The trainers are super motivating and the equipment is top class.",
    color: "from-red-600 to-red-800",
  },

  {
    name: "Sneha",
    review:
      "Absolutely loved the energy at N7 Fitness. Clean gym, powerful workouts and amazing people.",
    color: "from-orange-500 to-red-600",
  },

  {
    name: "Arjun",
    review:
      "The transformation programs here are insane. I gained confidence and strength in just 3 months.",
    color: "from-pink-600 to-red-700",
  },

  {
    name: "Priya",
    review:
      "The trainers genuinely care about your progress. Easily one of the best fitness clubs.",
    color: "from-rose-500 to-pink-700",
  },

  {
    name: "Karthik",
    review:
      "Premium equipment, clean environment and incredible support from the trainers.",
    color: "from-red-500 to-orange-700",
  },

  {
    name: "Ananya",
    review:
      "The buddy membership plan is amazing. Working out with my friend keeps us motivated every day.",
    color: "from-fuchsia-600 to-red-700",
  },

  {
    name: "Vikram",
    review:
      "The vibe at N7 Fitness feels luxurious and energetic. It never feels boring here.",
    color: "from-red-700 to-pink-700",
  },

  {
    name: "Megha",
    review:
      "I lost weight, became stronger and gained confidence. N7 changed my lifestyle completely.",
    color: "from-orange-600 to-red-700",
  },

  {
    name: "Rohit",
    review:
      "The gym feels futuristic. Amazing machines and the best trainers I’ve worked with.",
    color: "from-red-500 to-rose-700",
  },

  {
    name: "Aisha",
    review:
      "Every workout session feels exciting. The environment pushes you to become your best version.",
    color: "from-pink-500 to-red-800",
  },
];

export default function Testimonials() {

  return (

    <section className="relative overflow-hidden bg-black py-32 text-white">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            TESTIMONIALS
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">

            WHAT OUR
            <span className="text-red-600">
              {" "}MEMBERS SAY
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">

            Real reviews from members who transformed
            their fitness journey at N7 Fitness.

          </p>

        </motion.div>

        {/* SWIPE CARDS */}

        <div className="mt-24 flex gap-8 overflow-x-auto pb-10 scrollbar-hide">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              drag="x"
              dragConstraints={{
                left: -100,
                right: 100,
              }}
              whileTap={{
                scale: 0.97,
              }}
              whileHover={{
                y: -15,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              initial={{
                opacity: 0,
                y: 100,
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
                delay: index * 0.05,
              }}
              className={`min-w-[350px] rounded-[40px] bg-gradient-to-br ${review.color} p-10 shadow-2xl`}
            >

              {/* STARS */}

              <div className="flex gap-1 text-2xl">

                ⭐ ⭐ ⭐ ⭐ ⭐

              </div>

              {/* REVIEW */}

              <p className="mt-8 text-xl leading-relaxed text-white/90">

                “{review.review}”

              </p>

              {/* USER */}

              <div className="mt-10">

                <h3 className="text-3xl font-black">

                  {review.name}

                </h3>

                <p className="mt-2 tracking-[0.2em] text-white/70">

                  N7 MEMBER

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}