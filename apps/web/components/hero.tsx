"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server } from "lucide-react";
import * as motion from "motion/react-client";

const MotionDiv = motion.div;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background overflow-hidden">
      {/* Animated Glows */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <MotionDiv
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionDiv
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title Animation */}
        <MotionDiv
          className="w-fit mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MotionDiv
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground dark:text-white"
            whileHover={{ scale: 1.01 }}
          >
            Whatever I Build,
            <br />
            <span className="text-muted-foreground">I Host Here.</span>
          </MotionDiv>
        </MotionDiv>

        {/* Subtext */}
        <MotionDiv
          className="mt-6 mb-12 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          A focused space for shipping{" "}
          <strong className="text-foreground font-semibold">DevOps</strong>,{" "}
          <strong className="text-foreground font-semibold">Infra</strong>, and{" "}
          <strong className="text-foreground font-semibold">GenAI</strong> projects — by{" "}
          <span className="text-primary font-semibold">Suraj Vishwakarma</span>.
        </MotionDiv>

        <MotionDiv
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          

          <Button
            size="lg"
            className=" text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border  rounded-xl flex items-center gap-2 transition-all"
            variant="outline"
          >
            <Server className="h-5 w-5" />
            Read DevOps Logs
          </Button>

          <Button
            size="lg"
            className="bg-background text-foreground border border-border hover:bg-muted/60 px-6 py-4 rounded-xl flex items-center gap-2 group transition-all"
          >
            <Code className="h-5 w-5" />
            Explore Projects
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </MotionDiv>

      </div>
    </section>
  );
}
