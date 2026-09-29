"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background: subtle grid + blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB] opacity-20 blur-[140px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m Nik.{" "}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
            Full-Stack Developer &amp; CS Student.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Bridging robust system architecture with clean user experiences.
          Currently studying at BINUS University and seeking a software
          engineering internship.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            href="/NicholasCarlen-resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-7 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] transition-shadow hover:shadow-[0_0_45px_rgba(37,99,235,0.7)]"
          >
            <Download size={18} />
            Download Resume
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/60 px-7 py-3.5 font-medium text-white transition-colors hover:border-[#2563EB] hover:bg-[#2563EB]/10"
          >
            View Projects
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}