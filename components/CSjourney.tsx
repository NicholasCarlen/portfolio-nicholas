"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface JourneyItem {
  date: string;
  title: string;
  badge?: string;
  description: string;
  image: string;
  alt: string;
}

const stats = [
  { value: "3+", label: "Core Milestones" },
  { value: "15+", label: "Tech Stack Stems" },
  { value: "TOP 10", label: "Campus Honor" },
  { value: "100%", label: "Deterministic Flow" },
];

const journeyData: JourneyItem[] = [
  {
    date: "2025",
    title: "READ A PLATE",
    description:
      "Read A Plate was my first AI project with a backend integration, where I served as both Project Manager and AI Engineer.",
    image: "/ReadAPlate.png",
    alt: "A YOLOv8 project that involves scripting and computer vision",
  },
  {
    date: "2025",
    title: "Cisco Packet Tracer",
    description:
      "A computer network topology planning project for BINUS University, created using an extended star design with a multilayer switch (MLS) system.",
    image: "/CiscoTopology.png",
    alt: "Network Topology Design",
  },
  {
    date: "2026",
    title: "Electus",
    description:
      "A software architecture and AI-based application that scans and analyzes a candidate's CV using Ollama and the Holland Code to evaluate behavior, skills, and suitable work roles.",
    image: "/ElectusImg.png",
    alt: "Electus AI",
  },
  {
    date: "2026",
    title: "Kith & Kin",
    badge: "🏆 BISCOF (BINUS Computer Science Festival Top 16 Finalist)",
    description:
      "A community gathering app that connects niche hobbies and activities. Kith & Kin enables you to host an event, join an event, and monitor an event with one touch.",
    image: "/Kith&Kin-Image1.png",
    alt: "Kith & Kin",
  },
];

export default function CSJourney() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 80;

  return (
    <section
      id="cs-journey"
      className="relative mx-auto max-w-6xl px-6 pb-40 pt-0 md:pb-56"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mb-28 flex max-w-4xl flex-col items-center text-center md:mb-40"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#60A5FA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.9)]" />
          Academic &amp; Technical Evolution // Timeline
        </span>

        <h2 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
          Computer Science{" "}
          <span className="bg-gradient-to-r from-[#93C5FD] to-[#2563EB] bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          A visual retrospective of foundational network architectures, computer
          vision pipelines, and full-stack engineering milestones.
        </p>

        <div className="mt-14 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-md"
            >
              <p className="font-mono text-3xl font-bold text-[#93C5FD]">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.header>

      {/* Timeline */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-4 top-0 border-l border-dashed border-white/20 md:left-1/2 md:-translate-x-1/2"
        />

        <div className="flex flex-col gap-28 md:gap-40">
          {journeyData.map((item, i) => {
            const imageOnLeft = i % 2 === 0;
            const imageX = imageOnLeft ? -offset : offset;
            const textX = imageOnLeft ? offset : -offset;

            return (
              <div
                key={`${item.title}-${i}`}
                className={`relative flex flex-col items-stretch gap-10 pl-12 md:items-center md:gap-24 md:pl-0 ${
                  imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#2563EB] shadow-[0_0_16px_rgba(37,99,235,0.8)] md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                />

                <motion.div
                  initial={{ opacity: 0, x: imageX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.15)] backdrop-blur-md">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: textX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-block rounded-full bg-[#2563EB]/20 px-4 py-1.5 text-sm font-medium text-[#60A5FA]">
                      {item.date}
                    </span>

                    {/* Renders the badge when present */}
                    {item.badge && (
                      <span className="inline-block rounded-full border border-[#2563EB]/50 bg-[#2563EB]/15 px-3.5 py-1.5 text-xs font-semibold text-[#93C5FD] shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}