"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { commandData } from "./data/commands"

interface CommandDisplayProps {
  category: string
}

export default function CommandDisplay({ category }: CommandDisplayProps) {
  const [commands, setCommands] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading to show transition
    setLoading(true)
    setTimeout(() => {
      const categoryCommands = commandData[category as keyof typeof commandData]
      setCommands(categoryCommands || "Category not found")
      setLoading(false)
    }, 500)
  }, [category])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-slate-900 p-4">
      <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300">{commands}</pre>
    </div>
  )
}

