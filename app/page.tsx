"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import IntroLoader from "@/components/IntroLoader";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>

      {/* INTRO LOADER */}

      <IntroLoader loading={loading} />

      {/* WEBSITE */}

      <main className="min-h-screen bg-black text-white">

        <Navbar />

        <Hero />

        <About />

        <Services />

        <Membership />

        <Transformation />

        <Testimonials />

        <Gallery />

        <Equipment />

        <Trainers />

        <Contact />

        <Footer />

      </main>

    </>
  );
}