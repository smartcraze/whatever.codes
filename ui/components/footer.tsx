import { Button, buttonVariants } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, TriangleIcon, HeartIcon } from "lucide-react"
import Link from "./markdown/link";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/smartcraze",
      username: "@smartcraze",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/surajv354",
      username: "surajv354",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dev@surajv.me",
      username: "dev@surajv.me",
    },
    {
      name: "Personal Site",
      icon: ExternalLink,
      url: "https://surajv.me",
      username: "surajv.me",
    },
  ]

  return (
    <footer className="py-16 px-4 border-t border-border bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              whatever<span className="text-purple-500 dark:text-purple-400">.codes</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A personal lab for DevOps, Infrastructure, and GenAI experiments. Building, breaking, and learning in
              public.
            </p>
            <p className="text-sm font-mono text-muted-foreground">
              Built, deployed, and occasionally broken by <span className="text-purple-500 dark:text-purple-400">Suraj Vishwakarma</span>.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect & Explore</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent p-4 h-auto"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium">{link.name}</div>
                      <div className="text-xs text-muted-foreground">{link.username}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2024 whatever.codes. All experiments are open source.</div>
          <div className="flex items-center gap-4">
            <span>Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-500 dark:text-green-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
