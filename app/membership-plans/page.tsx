"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regularPlans = [
  {
    price: "₹3000",
    duration: "Monthly Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹3000 Monthly Plan and I would like to join.",

    features: [
      "Unlimited Gym Access",
      "Strength + Cardio Training",
      "Premium Equipment Access",
      "Locker Facility",
      "Workout Guidance",
    ],
  },

  {
    price: "₹8000",
    duration: "Quarterly Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹8000 Quarterly Plan and I would like to join.",

    features: [
      "Everything in Monthly Plan",
      "Progress Tracking",
      "Better Value Savings",
      "Trainer Support",
    ],
  },

  {
    price: "₹16000",
    duration: "Half-Yearly Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹16000 Half-Yearly Plan and I would like to join.",

    features: [
      "Everything in Quarterly Plan",
      "Body Transformation Tracking",
      "Nutrition Guidance",
      "Priority Support",
    ],
  },

  {
    price: "₹32000",
    duration: "Yearly Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹32000 Yearly Plan and I would like to join.",

    features: [
      "All Premium Features Included",
      "Maximum Savings Plan",
      "Full Transformation Support",
      "Dedicated Guidance",
    ],
  },
];

const buddyPlans = [
  {
    price: "₹5000",
    duration: "Monthly Buddy Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹5000 Monthly Buddy Plan and I would like to join.",

    features: [
      "Access for 2 Members",
      "Train With Partner",
      "Full Gym Access",
      "Shared Workout Programs",
      "Motivation Support",
    ],
  },

  {
    price: "₹9000",
    duration: "Quarterly Buddy Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹9000 Quarterly Buddy Plan and I would like to join.",

    features: [
      "Everything in Monthly Buddy Plan",
      "Progress Tracking for Both",
      "Better Savings",
      "Trainer Assistance",
    ],
  },

  {
    price: "₹18000",
    duration: "Half-Year Buddy Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹18000 Half-Year Buddy Plan and I would like to join.",

    features: [
      "Transformation Coaching",
      "Nutrition Guidance",
      "Priority Support",
      "Advanced Training Plans",
    ],
  },

  {
    price: "₹36000",
    duration: "Yearly Buddy Plan",

    message:
      "Hi N7 Fitness 👋 I want to know more about the ₹36000 Yearly Buddy Plan and I would like to join.",

    features: [
      "All Premium Buddy Benefits",
      "Maximum Savings",
      "Full Year Coaching",
      "Complete Transformation Journey",
    ],
  },
];

export default function Membership() {

  const [tab, setTab] = useState("regular");

  const plans = tab === "regular"
    ? regularPlans
    : buddyPlans;

  return (

    <section className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[200px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* HEADER */}

        <div className="text-center">

          <p className="tracking-[0.4em] text-red-500">
            MEMBERSHIP PLANS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">

            CHOOSE YOUR
            <span className="text-red-600">
              {" "}POWER
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">

            Simple, flexible, and powerful membership
            options for your transformation.

          </p>

        </div>

        {/* TOGGLE */}

        <div className="mt-16 flex justify-center gap-4">

          <button
            onClick={() => setTab("regular")}
            className={`rounded-full px-6 py-3 text-sm font-bold tracking-[0.2em] transition ${
              tab === "regular"
                ? "bg-red-600 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >

            REGULAR

          </button>

          <button
            onClick={() => setTab("buddy")}
            className={`rounded-full px-6 py-3 text-sm font-bold tracking-[0.2em] transition ${
              tab === "buddy"
                ? "bg-red-600 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >

            BUDDY

          </button>

        </div>

        {/* PLANS */}

        <div className="mt-20 space-y-10">

          <AnimatePresence mode="wait">

            {plans.map((plan) => {

              const whatsappLink =
                `https://wa.me/918977448774?text=${encodeURIComponent(plan.message)}`;

              return (

                <motion.div
                  key={plan.price + tab}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 60,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onClick={() => window.open(whatsappLink, "_blank")}
                  className="relative w-full cursor-pointer overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >

                  {/* PRICE */}

                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

                    <div>

                      <h3 className="text-4xl font-black">

                        {plan.price}

                      </h3>

                      <p className="text-sm tracking-[0.2em] text-red-400">

                        {plan.duration}

                      </p>

                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(whatsappLink, "_blank");
                      }}
                      className="mt-4 rounded-full bg-red-600 px-6 py-3 text-sm font-bold tracking-[0.2em] transition hover:bg-red-700 md:mt-0"
                    >

                      JOIN NOW

                    </button>

                  </div>

                  {/* LINE */}

                  <div className="my-6 h-px bg-white/10" />

                  {/* FEATURES */}

                  <div className="grid gap-3 sm:grid-cols-2">

                    {plan.features.map((f, i) => (

                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-2 h-2 w-2 rounded-full bg-red-500" />

                        <p className="text-gray-300">

                          {f}

                        </p>

                      </div>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}