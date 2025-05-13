import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Code, Layout, Wrench, GitBranch } from "lucide-react"

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-lg font-semibold font-mono">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-muted text-xs font-mono rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Back End",
      icon: <Server className="h-5 w-5 text-primary" />,
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "JPA",
        "Hibernate",
        "Spring MVC",
        "Microservices",
        "JUnit",
        "Mockito",
      ],
    },
    {
      title: "Front End",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["Angular 17", "Angular Material", "TypeScript", "JavaScript", "Bootstrap", "HTML", "CSS", "Redux"],
    },
    {
      title: "DevOps",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Docker", "Jenkins", "SonarQube", "Git"],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "PostgreSQL", "SQLServer"],
    },
    {
      title: "Tools",
      icon: <Wrench className="h-5 w-5 text-primary" />,
      skills: ["Git", "IntelliJ", "VSCode", "Eclipse", "Swagger", "Postman"],
    },
    {
      title: "Methodologies",
      icon: <GitBranch className="h-5 w-5 text-primary" />,
      skills: ["Agile/Scrum", "UML", "MERISE"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category) => (
        <SkillCategory key={category.title} title={category.title} skills={category.skills} icon={category.icon} />
      ))}
    </div>
  )
}
