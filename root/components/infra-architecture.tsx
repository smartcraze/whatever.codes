import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Monitor, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function InfraArchitecture() {
  return (
    <motion.section
      className="py-24 px-4 bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Infrastructure
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How I <span className="text-primary">Deploy & Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how I deploy, monitor, and scale AI and web apps — powered by EC2, Terraform, GitHub Actions, and
            enterprise-grade monitoring.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Diagram */}
          <motion.div
            className="relative rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image
              src="/showcase.png"
              alt="Infrastructure Architecture Diagram"
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-muted/20 transition-transform duration-300 ease-in-out"
              priority
            />
          </motion.div>

          {/* Infra Details */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[ 
              {
                icon: Server,
                title: "Cloud Infrastructure",
                description:
                  "Multi-region AWS deployment with auto-scaling EC2 instances, load balancers, and RDS databases managed through Terraform.",
                tech: ["AWS EC2", "Terraform", "Auto Scaling"],
              },
              {
                icon: Monitor,
                title: "Monitoring & Observability",
                description:
                  "Complete observability stack with Prometheus metrics, Grafana dashboards, and custom alerting for proactive issue resolution.",
                tech: ["Prometheus", "Grafana", "AlertManager"],
              },
              {
                icon: Shield,
                title: "Security & CI/CD",
                description:
                  "Automated deployments with GitHub Actions, security scanning, and zero-downtime deployments with proper rollback strategies.",
                tech: ["GitHub Actions", "Docker", "Security Scanning"],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button className="group">
                View Architecture Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}