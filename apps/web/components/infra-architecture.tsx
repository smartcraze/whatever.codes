import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Monitor, Shield } from "lucide-react"
import Image from "next/image"

export function InfraArchitecture() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Diagram */}
          <div className="relative rounded-2xl">
            
                  <Image
                    src="/showcase.png"
                    alt="Infrastructure Architecture Diagram"
                    height={500}
                    width={500}
                    className="w-full h-full object-cover rounded-2xl shadow-lg border border-muted/20 hover:scale-105 transition-transform duration-300 ease-in-out"
                    priority

                  />
                  

          </div>

          {/* Infra Details */}
          <div className="space-y-6">
            {/* Block 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                <p className="text-muted-foreground mb-3">
                  Multi-region AWS deployment with auto-scaling EC2 instances, load balancers, and RDS databases managed
                  through Terraform.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AWS EC2", "Terraform", "Auto Scaling"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Monitoring & Observability</h3>
                <p className="text-muted-foreground mb-3">
                  Complete observability stack with Prometheus metrics, Grafana dashboards, and custom alerting for
                  proactive issue resolution.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Prometheus", "Grafana", "AlertManager"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Security & CI/CD</h3>
                <p className="text-muted-foreground mb-3">
                  Automated deployments with GitHub Actions, security scanning, and zero-downtime deployments with
                  proper rollback strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["GitHub Actions", "Docker", "Security Scanning"].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Button className="group">
              View Architecture Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
