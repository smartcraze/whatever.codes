import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { InfraArchitecture } from "@/components/infra-architecture";
import { BlogTeasers } from "@/components/blog-teasers";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <main className="w-full max-w-6xl px-4 md:px-6 lg:px-8 mx-auto ">
        <About />
        <ProjectsShowcase />
        <InfraArchitecture />
        <BlogTeasers />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
