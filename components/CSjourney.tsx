"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#0d1020"/>
      <g stroke="#2563EB" stroke-opacity="0.35" fill="none" stroke-width="2">
        <rect x="300" y="210" width="200" height="150" rx="12"/>
        <circle cx="360" cy="260" r="16"/>
        <path d="M300 340l60-50 45 35 30-25 65 40"/>
      </g>
    </svg>`
  );

const journeyData = [
  {
    date: "2023",
    title: "Milestone Title One",
    description:
      "Placeholder description. Replace this with a short paragraph about what you did, what you learned, and why it mattered.",
    image: PLACEHOLDER,
    alt: "Describe image one",
  },
  {
    date: "2024",
    title: "Milestone Title Two",
    description:
      "Placeholder description. Replace this with a short paragraph about what you did, what you learned, and why it mattered.",
    image: PLACEHOLDER,
    alt: "Describe image two",
  },
  {
    date: "2025",
    title: "Milestone Title Three",
    description:
      "Placeholder description. Replace this with a short paragraph about what you did, what you learned, and why it mattered.",
    image: PLACEHOLDER,
    alt: "Describe image three",
  },
];

const stats = [
  { value: "3+", label: "Core Milestones" },
  { value: "15+", label: "Tech Stack Stems" },
  { value: "TOP 10", label: "Campus Honor" },
  { value: "100%", label: "Deterministic Flow" },
];

export default function CSJourney() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 80;

  return (
    <section
      id="cs-journey"
      
      className="relative mx-auto max-w-6xl px-6 py-40 md:py-56"
    >
        return (
  <section
    id="cs-journey"
    className="relative mx-auto max-w-6xl px-6 pb-40 pt-0 md:pb-56"
  >
    

    <div className="relative">
      {}
    </div>
  </section>
);
      <div className="relative">
        {/* Central dashed timeline */}
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
                {/* Timeline node */}
                <span
                  aria-hidden
                  className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#2563EB] shadow-[0_0_16px_rgba(37,99,235,0.8)] md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                />

                {/* Image */}
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

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: textX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <span className="inline-block rounded-full bg-[#2563EB]/20 px-4 py-1.5 text-sm font-medium text-[#60A5FA]">
                    {item.date}
                  </span>
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