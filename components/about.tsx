import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cpu, Bot, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const features = [
    {
      icon: Terminal,
      title: "DevOps Automation",
      description: "CI/CD pipelines, Docker containers, and infrastructure as code",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS deployments, Kubernetes orchestration, and monitoring",
    },
    {
      icon: Bot,
      title: "GenAI Experiments",
      description: "LangChain agents, AI workflows, and intelligent automation",
    },
    {
      icon: Cpu,
      title: "Full-Stack Development",
      description: "Modern web apps with robust backend architectures",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <motion.section
      className="py-24 px-4 bg-background"
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            About the Lab
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="text-primary">whatever.codes</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is my personal sandbox for DevOps and AI experiments. Here I build, break, and rebuild everything from
            CI/CD pipelines to LangChain agents, Docker deployments to K8s clusters, monitoring dashboards to
            intelligent automation systems.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-muted/40 border-border hover:bg-muted/60 transition-all duration-300 group hover:shadow-md rounded-lg h-full"
                >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>

                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}