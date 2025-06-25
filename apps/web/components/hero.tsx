import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Server, Zap } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Theme Toggle top-right */}
      <div className="absolute top-6 right-6 z-20">
        <ModeToggle />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-accent-foreground text-sm font-mono">System Online</span>
        </div>

        {/* Main headline with gradient */}
        <div className="relative w-fit mx-auto text-center">
          <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-xl -z-10" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Whatever I Build.
            <br />I Host Here.
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          An experimental lab of DevOps, Infrastructure, and GenAI projects by{" "}
          <span className="text-primary font-semibold">Suraj Vishwakarma</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-6 text-lg rounded-xl group">
            <Code className="mr-2 h-5 w-5" />
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl group">
            <Server className="mr-2 h-5 w-5" />
            Read DevOps Logs
          </Button>

          <Button size="lg" variant="ghost" className="px-8 py-6 text-lg rounded-xl group">
            <Zap className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
