import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationTimeline from "@/components/education-timeline"
import ContactForm from "@/components/contact-form"
import ThemeToggle from "@/components/theme-toggle"
import { projects, blogPosts } from "@/lib/data"
import BlogPostCard from "@/components/blog-post-card"

export default function Home() {
  // Get the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-mono text-lg font-bold">
            <Link href="/">Mohamed Manbar</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#education" className="transition-colors hover:text-foreground/80">
              Education
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              Blog
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10 space-y-24">
        {/* Hero Section */}
        <section id="about" className="py-10 md:py-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">Mohamed Manbar</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono">
                Développeur Full Stack Java / Angular
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate full stack developer specialized in building secure, high-performance web and mobile apps
                using Java Spring Boot and Angular 17. Experienced with JWT, Docker, and Agile methodologies.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://linkedin.com/in/mohamed-manbar" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/manbarmohamed" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="mailto:manbar.mohammed@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#contact">
                    <Send className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-64 h-64 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-border">
                {/* Replace MM with an actual image */}
                <Image 
                  src="/profile.jpg" 
                  alt="Mohamed Manbar" 
                  width={256} 
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-5 rounded bg-primary"></div>
            <h2 className="text-3xl font-bold font-mono tracking-tight">Skills</h2>
          </div>
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-1 w-5 rounded bg-primary"></div>
              <h2 className="text-3xl font-bold font-mono tracking-tight">Projects</h2>
            </div>
            <Button variant="outline" asChild size="sm">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-5 rounded bg-primary"></div>
            <h2 className="text-3xl font-bold font-mono tracking-tight">Experience</h2>
          </div>
          <ExperienceTimeline />
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-5 rounded bg-primary"></div>
            <h2 className="text-3xl font-bold font-mono tracking-tight">Education</h2>
          </div>
          <EducationTimeline />
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-8">
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-1 w-5 rounded bg-primary"></div>
              <h2 className="text-3xl font-bold font-mono tracking-tight">Latest Articles</h2>
            </div>
            <Button variant="outline" asChild size="sm">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-5 rounded bg-primary"></div>
            <h2 className="text-3xl font-bold font-mono tracking-tight">Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-mono">Get in Touch</h3>
              <p className="text-muted-foreground">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:manbar.mohammed@gmail.com" className="hover:underline">
                    manbar.mohammed@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/mohamed-manbar"
                    target="_blank"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    linkedin.com/in/mohamed-manbar
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://github.com/manbarmohamed"
                    target="_blank"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    github.com/manbarmohamed
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Manbar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/mohamed-manbar" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://github.com/manbarmohamed" target="_blank" aria-label="GitHub" rel="noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="mailto:manbar.mohammed@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}