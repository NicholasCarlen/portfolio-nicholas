"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "1ST Mandarin competition(年级组冠军)",
    company: "Sekolah Harapn Bangsa, Tangerang",
    description: "1ST place in a HSK 2 competition"
  },
  {
    role: "2nd Mandarin competition(年级组亚军)",
    company: "Sekolah Harapn Bangsa, Tangerang",
    description: "2nd place in a HSK 3B competition"
  },
  {
    role: "Outstanding in english",
    company: "Sekolah Harapn Bangsa, Tangerang",
    description: "Outstanding student awards in english (C2 proficient levels)"
  },

  {
    role: "IT Infrastructure Intern",
    company: "Mayora Group",
    description:
      "Monitored infrastructure health with Zabbix and analyzed network traffic to help keep systems stable and reliable.",
  },
  {
    role: "Public Relations",
    company: "B-Preneur",
    description:
      "Handled organization and event management, coordinating teams and logistics to deliver smooth, well-run events.",
  },
  
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-6xl px-6 py-40 md:py-56"
    >
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-28">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            My Journey
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Solving complex problems, one system at a time.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/60">
            I&apos;m driven by the challenge of turning hard, messy problems
            into elegant solutions. I build with Next.js for fast,
            polished interfaces, use Python for backend logic and automation,
            and integrate AI, like YOLO for computer vision, to make
            applications smarter and more capable.
          </p>
        </motion.div>

        {/* Right: timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-[#2563EB] via-[#2563EB]/40 to-transparent"
          />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Node */}
                <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#090A0F] ring-2 ring-[#2563EB] shadow-[0_0_16px_rgba(37,99,235,0.8)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                </span>

                <h3 className="text-xl font-semibold text-white">
                  {exp.role}{" "}
                  <span className="text-[#2563EB]">@ {exp.company}</span>
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}