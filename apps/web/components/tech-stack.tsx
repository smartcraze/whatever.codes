import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function TechStack() {
  const techCategories = [
    {
      category: "Infrastructure & Cloud",
      color: "blue",
      technologies: [
        "AWS EC2",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "GitHub Actions",
        "Jenkins",
        "Nginx",
        "Apache Kafka",
      ],
    },
    {
      category: "AI & Machine Learning",
      color: "purple",
      technologies: [
        "LangChain",
        "OpenAI",
        "HuggingFace",
        "TensorFlow",
        "PyTorch",
        "Pinecone",
        "ChromaDB",
        "Streamlit",
        "FastAPI",
      ],
    },
    {
      category: "Monitoring & Observability",
      color: "green",
      technologies: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Jaeger",
        "New Relic",
        "DataDog",
        "CloudWatch",
        "Sentry",
      ],
    },
    {
      category: "Development & Databases",
      color: "orange",
      technologies: [
        "Node.js",
        "Python",
        "Go",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "DynamoDB",
        "Next.js",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-500 border-blue-500/30 hover:bg-blue-500/10",
      purple: "text-purple-500 border-purple-500/30 hover:bg-purple-500/10",
      green: "text-green-500 border-green-500/30 hover:bg-green-500/10",
      orange: "text-orange-500 border-orange-500/30 hover:bg-orange-500/10",
    }
    return colorMap[color as keyof typeof colorMap] ?? ""
  }

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-500 border-cyan-500/30">
            Tech Arsenal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools & <span className="text-cyan-500">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to build, deploy, and scale modern applications
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-muted/40 border-border hover:bg-muted/60 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`text-sm ${getColorClasses(category.color)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            Always learning, always experimenting with new tools and technologies
          </p>
        </div>
      </div>
    </section>
  )
}
