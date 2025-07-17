import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Database, Bot, Globe } from "lucide-react"

export function ProjectsShowcase() {
  const projects = [
    {
      name: "AI Agent Pipeline",
      description: "LangChain-powered automation agents with Docker deployment and monitoring",
      stack: ["LangChain", "Docker", "FastAPI", "PostgreSQL"],
      type: "Agentic AI",
      icon: Bot,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "K8s Monitoring Stack",
      description: "Complete observability setup with Prometheus, Grafana, and custom dashboards",
      stack: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
      type: "Infra-heavy",
      icon: Database,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Multi-Cloud Terraform",
      description: "Infrastructure as code across AWS, GCP with automated deployments",
      stack: ["Terraform", "AWS", "GitHub Actions", "Ansible"],
      type: "DevOps",
      icon: Globe,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Real-time ML Pipeline",
      description: "Streaming data processing with ML inference and auto-scaling",
      stack: ["Apache Kafka", "TensorFlow", "Docker", "Redis"],
      type: "ML Ops",
      icon: Zap,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Serverless API Gateway",
      description: "High-performance API with Lambda functions and DynamoDB",
      stack: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      type: "Serverless",
      icon: Globe,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "GenAI Document Chat",
      description: "RAG-based document analysis with vector embeddings and chat interface",
      stack: ["OpenAI", "Pinecone", "Streamlit", "LangChain"],
      type: "GenAI",
      icon: Bot,
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Live Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world implementations of DevOps, Infrastructure, and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-muted/40 border-border hover:bg-muted/60 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground text-lg">{project.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
