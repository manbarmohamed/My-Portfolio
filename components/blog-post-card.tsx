import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/data"
import Image from "next/image"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="block transition-all hover:scale-[1.01]">
      <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="outline" className="font-mono text-xs">
                +{post.tags.length - 2}
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl font-mono line-clamp-2">{post.title}</CardTitle>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="text-sm text-primary font-medium">Read more →</div>
        </CardFooter>
      </Card>
    </Link>
  )
}
