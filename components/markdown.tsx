"use client"

import { useEffect, useState } from "react"

interface MarkdownProps {
  content: string
}

export default function Markdown({ content }: MarkdownProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    // Simple markdown to HTML conversion
    let htmlContent = content
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Code blocks
      .replace(/```([a-z]*)\n([\s\S]*?)```/gm, (match, lang, code) => {
        return `<pre class="bg-muted p-4 rounded-md overflow-x-auto my-4"><code class="language-${lang}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
      })
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
      // Lists
      .replace(/^\s*\n\*/gm, "<ul>\n*")
      .replace(/^(\*.+)\s*\n([^*])/gm, "$1\n</ul>\n\n$2")
      .replace(/^\*(.+)/gm, "<li>$1</li>")
      // Numbered lists
      .replace(/^\s*\n\d\./gm, "<ol>\n1.")
      .replace(/^(\d\..+)\s*\n([^\d.])/gm, "$1\n</ol>\n\n$2")
      .replace(/^\d\.(.+)/gm, "<li>$1</li>")
      // Paragraphs
      .replace(/^\s*\n\s*\n/gm, '</p><p class="my-4">')
      // Links
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/g,
        '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
      )
      // Line breaks
      .replace(/\n/g, "<br />")

    // Wrap with paragraph if not already
    if (!htmlContent.startsWith("<h") && !htmlContent.startsWith("<p")) {
      htmlContent = `<p class="my-4">${htmlContent}</p>`
    }

    setHtml(htmlContent)
  }, [content])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
