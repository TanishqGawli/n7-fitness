"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 1.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#f8f5ef]"
        >

          {/* HUGE BACKGROUND TEXT */}

          <motion.h1
            initial={{
              opacity: 0,
              scale: 1.4,
            }}
            animate={{
              opacity: 0.03,
              scale: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[18vw] font-black tracking-[-0.08em] text-black"
          >

            N7 FITNESS

          </motion.h1>

          {/* CINEMATIC LIGHT SWEEP */}

          <motion.div
            initial={{
              x: "-120%",
              rotate: 12,
            }}
            animate={{
              x: "120%",
            }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full w-[240px] bg-white/50 blur-[80px]"
          />

          {/* DARK DEPTH OVERLAY */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

          {/* FLOATING ATMOSPHERE */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-[160px]"
          />

          {/* GLITCH FLASH */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.15, 0],
            }}
            transition={{
              delay: 1.8,
              duration: 0.2,
              repeat: 2,
            }}
            className="absolute inset-0 bg-black"
          />

          {/* CENTER CONTENT */}

          <div className="absolute inset-0 flex items-center justify-center">

            {/* CAMERA DEPTH */}

            <motion.div
              initial={{
                scale: 1.4,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col items-center"
            >

              {/* SHADOW FLOOR */}

              <motion.div
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-[180px] h-[40px] w-[260px] rounded-full bg-black blur-[40px]"
              />

              {/* LOGO */}

              <motion.img
                src="/logo/n7-logo.png"
                alt="N7 Fitness"
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.7,
                  rotateX: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 w-[190px] object-contain md:w-[270px]"
              />

              {/* TEXT */}

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
                  delay: 1.1,
                  duration: 1.4,
                }}
                className="mt-14 text-center"
              >

                <h2 className="text-3xl font-black tracking-[0.55em] text-black md:text-5xl">

                  N7 FITNESS

                </h2>

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "180px",
                  }}
                  transition={{
                    delay: 1.6,
                    duration: 1,
                  }}
                  className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
                />

                <p className="mt-6 text-xs tracking-[0.7em] text-black/40 md:text-sm">

                  ELITE PERFORMANCE CLUB

                </p>

              </motion.div>

            </motion.div>

          </div>

          {/* CINEMATIC BOTTOM BAR */}

          <div className="absolute bottom-0 left-0 h-[4px] w-full overflow-hidden bg-black/5">

            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-red-600 to-transparent"
            />

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}