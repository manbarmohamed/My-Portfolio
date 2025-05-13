import { projects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Projects | Mohamed Manbar",
  description: "Portfolio of projects by Mohamed Manbar, a Full Stack Java & Angular Developer",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-mono tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">
            A collection of my recent work in Java, Angular, and full-stack development
          </p>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mohamed Manbar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
