"use client";

import { motion } from "framer-motion";

import {
  Camera,
  Phone,
  MapPin,
  Mail,
 MessageCircle,
} from "lucide-react";

export default function Contact() {

  return (

    <section id="contact" className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

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
            CONTACT US
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">

            LET’S BUILD
            <span className="text-red-600">
              {" "}YOUR POWER
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">

            Start your transformation journey today.
            Connect with N7 Fitness and experience
            elite training like never before.

          </p>

        </motion.div>

        {/* CONTACT GRID */}

        <div className="mt-24 grid gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -120,
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
            className="rounded-[40px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl"
          >

            <h3 className="text-4xl font-black">

              GET IN TOUCH

            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">

              Whether you want to start your fitness
              journey, transform your physique,
              or simply explore our premium gym —
              we’re here to help.

            </p>

            {/* CONTACT ITEMS */}

            <div className="mt-12 space-y-8">

              {/* PHONE */}

              <motion.a
                whileHover={{
                  x: 10,
                }}
                href="tel:+918977448774"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-red-600"
              >

                <div className="rounded-2xl bg-red-600 p-4">

                  <Phone size={28} />

                </div>

                <div>

                  <p className="text-sm tracking-[0.3em] text-gray-400">

                    CALL US

                  </p>

                  <h4 className="mt-2 text-2xl font-bold">

                    +91 8977448774

                  </h4>

                </div>

              </motion.a>

              {/* WHATSAPP */}

              <motion.a
                whileHover={{
                  x: 10,
                }}
                href="https://wa.me/918977448774"
                target="_blank"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-red-600"
              >

                <div className="rounded-2xl bg-green-600 p-4">

                  <MessageCircle size={28} />

                </div>

                <div>

                  <p className="text-sm tracking-[0.3em] text-gray-400">

                    WHATSAPP

                  </p>

                  <h4 className="mt-2 text-2xl font-bold">

                    Chat With Us

                  </h4>

                </div>

              </motion.a>

              {/* INSTAGRAM */}

              <motion.a
                whileHover={{
                  x: 10,
                }}
                href="https://www.instagram.com/n7fitness_safilguda?igsh=MXh1NnA0MnJyNXdjeg=="
                target="_blank"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-red-600"
              >

                <div className="rounded-2xl bg-pink-600 p-4">

                  <Camera size={28} />

                </div>

                <div>

                  <p className="text-sm tracking-[0.3em] text-gray-400">

                    INSTAGRAM

                  </p>

                  <h4 className="mt-2 text-2xl font-bold">

                    @n7fitness_safilguda

                  </h4>

                </div>

              </motion.a>

              {/* EMAIL */}

              <motion.a
                whileHover={{
                  x: 10,
                }}
                href="mailto:n7fitness@gmail.com"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-red-600"
              >

                <div className="rounded-2xl bg-red-500 p-4">

                  <Mail size={28} />

                </div>

                <div>

                  <p className="text-sm tracking-[0.3em] text-gray-400">

                    EMAIL

                  </p>

                  <h4 className="mt-2 text-2xl font-bold">

                    n7fitness@gmail.com

                  </h4>

                </div>

              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 120,
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
            className="relative overflow-hidden rounded-[40px] border border-white/10"
          >

            {/* MAP */}

            <iframe
              src="https://maps.google.com/maps?q=N7%20Fitness&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[700px] w-full"
              loading="lazy"
            />

            {/* LOCATION CARD */}

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              href="https://maps.app.goo.gl/G8Jp1KLzXiU6a87p8?g_st=aw"
              target="_blank"
              className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-white/10 bg-black/70 p-8 backdrop-blur-xl"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-red-600 p-4">

                  <MapPin size={28} />

                </div>

                <div>

                  <p className="tracking-[0.3em] text-red-500">

                    LOCATION

                  </p>

                  <h3 className="mt-2 text-2xl font-black">

                    N7 FITNESS, SAFILGUDA

                  </h3>

                </div>

              </div>

            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}