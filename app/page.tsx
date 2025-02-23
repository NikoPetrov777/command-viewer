"use client"

import { useState } from "react"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CommandDisplay from "./command-display"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">Command Reference</h1>
          <p className="text-slate-400">Select a category to view common commands</p>
          <p className="text-slate-400">Created by Nikolay Petrov</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant={selectedCategory === "linux" ? "default" : "secondary"}
            onClick={() => setSelectedCategory("linux")}
            className="min-w-[150px]"
          >
            Linux Commands
          </Button>
          <Button
            variant={selectedCategory === "docker" ? "default" : "secondary"}
            onClick={() => setSelectedCategory("docker")}
            className="min-w-[150px]"
          >
            Docker Commands
          </Button>
          <Button
            variant={selectedCategory === "kubernetes" ? "default" : "secondary"}
            onClick={() => setSelectedCategory("kubernetes")}
            className="min-w-[150px]"
          >
            Kubernetes Commands
          </Button>
          <Button
            variant={selectedCategory === "sa" ? "default" : "secondary"}
            onClick={() => setSelectedCategory("sa")}
            className="min-w-[150px]"
          >
            SA Commands
          </Button>
        </div>

        {selectedCategory && (
          <Card className="border-slate-700 bg-slate-800 p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-700 pb-4">
              <Terminal className="h-5 w-5 text-green-400" />
              <h2 className="text-lg font-semibold text-white">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Commands
              </h2>
            </div>
            <CommandDisplay category={selectedCategory} />
          </Card>
        )}
      </div>
    </div>
  )
}

