import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      <div className="relative pl-8 border-l-2 border-muted pb-10">
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg font-mono">ORMVAT Souk Sebt</CardTitle>
            </div>
            <CardDescription>April–May 2021</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Worked on a photovoltaic system project using HTML, CSS, and JavaScript. Developed a web interface for
              monitoring and controlling solar energy systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
