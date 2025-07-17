"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { InfraArchitecture } from "@/components/infra-architecture";
import { Footer } from "@/components/footer";
import * as motion from "motion/react-client";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <main className="w-full max-w-6xl px-4 md:px-6 lg:px-8 mx-auto space-y-24">
        <motion.section
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <About />
        </motion.section>

        <motion.section
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <InfraArchitecture />
        </motion.section>
       
      </main>

      <Footer />
    </div>
  );
}