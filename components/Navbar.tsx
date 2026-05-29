"use client";

import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Equipment",
    href: "#equipment",
  },
  {
    name: "Membership",
    href: "#membership",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}

        <a
          href="#home"
          className="text-3xl text-white transition hover:text-red-500 md:text-4xl"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.15em",
          }}
        >

          N7 FITNESS

        </a>

        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-10 md:flex">

          {navItems.map((item, index) => (

            <motion.a
              key={index}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              className="text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:text-red-500"
            >

              {item.name}

            </motion.a>

          ))}

        </div>

        {/* JOIN BUTTON */}

        <motion.a
          href="https://wa.me/918977448774?text=Hi%20N7%20Fitness!%20I%20want%20to%20join%20the%20gym."
          target="_blank"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="hidden rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-700 md:block"
        >

          Join Now

        </motion.a>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >

          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >

            <div className="flex flex-col px-6 py-6">

              {navItems.map((item, index) => (

                <a
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-5 text-lg font-bold uppercase tracking-[0.12em] text-white transition hover:text-red-500"
                >

                  {item.name}

                </a>

              ))}

              <a
                href="https://wa.me/918977448774?text=Hi%20N7%20Fitness!%20I%20want%20to%20join%20the%20gym."
                target="_blank"
                className="mt-6 rounded-full bg-red-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white"
              >

                Join Now

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}