import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export function BlogTeasers() {
  const posts = [
    {
      title: "Building a Multi-Stage Docker Pipeline for AI Models",
      excerpt:
        "How I optimized Docker builds for ML workloads, reducing image size by 60% and build time by 40% using multi-stage builds and layer caching.",
      category: "DevOps",
      readTime: "8 min read",
      date: "Dec 20, 2024",
      slug: "docker-ai-pipeline",
    },
    {
      title: "LangChain Agents in Production: Lessons Learned",
      excerpt:
        "Real-world challenges and solutions when deploying LangChain agents at scale, including error handling, rate limiting, and cost optimization.",
      category: "GenAI",
      readTime: "12 min read",
      date: "Dec 15, 2024",
      slug: "langchain-production",
    },
    {
      title: "Kubernetes Monitoring with Custom Prometheus Metrics",
      excerpt:
        "Setting up comprehensive K8s monitoring with custom application metrics, alerting rules, and Grafana dashboards for better observability.",
      category: "Infrastructure",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      slug: "k8s-monitoring",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Latest Logs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            DevOps & AI <span className="text-primary">Notes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences, lessons learned, and technical deep-dives from the trenches
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-muted/40 border-border hover:bg-muted/60 transition-all duration-300 group hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-background group">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
