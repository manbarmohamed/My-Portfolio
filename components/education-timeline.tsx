import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function EducationTimeline() {
  return (
    <div className="space-y-6">
      <div className="relative pl-8 border-l-2 border-muted pb-10">
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg font-mono">Développeur Web et Web Mobile - Java/Angular</CardTitle>
            </div>
            <CardDescription>Enaa / Simplon, Beni Mellal – Jan 2024 to Oct 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive training in full-stack development with a focus on Java and Angular technologies. Learned
              modern development practices, security implementation, and agile methodologies.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l-2 border-muted pb-10">
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg font-mono">Développement Informatique</CardTitle>
            </div>
            <CardDescription>ISTA Souk Sebt – 2020 to 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Foundational education in computer science and software development principles. Gained knowledge in
              programming fundamentals, database design, and system architecture.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l-2 border-muted">
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg font-mono">PCAP: Programming Essentials in Python</CardTitle>
            </div>
            <CardDescription>Cisco Networking Academy – 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Certification in Python programming fundamentals. Covered core concepts including data structures,
              object-oriented programming, and algorithmic thinking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
