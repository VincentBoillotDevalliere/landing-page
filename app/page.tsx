import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Code,
  Command,
  FileText,
  LayoutDashboard,
  PlayCircle,
  CheckCircle,
  Target,
  BarChart,
  Globe,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Code className="h-6 w-6 text-purple-500" />
            <span>LearnForge</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#commands" className="text-sm font-medium hover:text-primary">
                Commands
              </Link>
              <Link href="#views" className="text-sm font-medium hover:text-primary">
                Views
              </Link>
              <Button>Install Extension</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">LearnForge</h1>
                  <p className="text-xl text-muted-foreground">Interactive Programming Course Extension for VS Code</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Turn VS Code into a guided, hands-on learning environment with interactive exercises, real-time
                    feedback, and progress tracking.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Install Extension
                  </Button>
                  <Button size="lg" variant="outline">
                    View Documentation
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center rounded-xl border bg-background p-8 shadow-lg">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-slate-950 p-4">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400">LearnForge - Interactive Course</div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-slate-300">Module 1: JavaScript Fundamentals</span>
                    </div>
                    <div className="rounded bg-slate-800 p-2 text-xs text-green-400 font-mono">
                      <div className="text-slate-400">// TODO: Complete the function below</div>
                      <div>
                        function <span className="text-yellow-300">calculateSum</span>(a, b) {"{"}
                      </div>
                      <div className="pl-4 text-purple-300">return a + b;</div>
                      <div>{"}"}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tests passed: 3/3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to learn programming effectively in VS Code
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Target className="h-6 w-6 text-purple-500" />
                  <CardTitle>Interactive Exercises</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hands-on exercises with real-time feedback to reinforce learning concepts
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-500" />
                  <CardTitle>Chapter-based Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Organized learning path from fundamentals to advanced topics</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                  <CardTitle>Built-in Test Runner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Validate your solutions with integrated tests that provide immediate feedback
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Code className="h-6 w-6 text-purple-500" />
                  <CardTitle>Intelligent Highlighting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Code highlighting for TODOs and hints to guide you through exercises
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BarChart className="h-6 w-6 text-purple-500" />
                  <CardTitle>Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Visual progress tracking per module to keep you motivated</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Globe className="h-6 w-6 text-purple-500" />
                  <CardTitle>Language Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Currently supports JavaScript exercises with more languages planned</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="commands" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Commands</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful commands to control your learning experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-purple-500" />
                    LearnForge: Launch Interactive Course
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Start your learning journey with the interactive course interface</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Command className="h-5 w-5 text-purple-500" />
                    LearnForge: Run Current Module Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Execute tests for the module you're currently working on</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-500" />
                    LearnForge: Refresh Course Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Update and refresh the available course modules</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    LearnForge: Run Module Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Run tests for any module to check your progress</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="views" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Views</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated views to enhance your learning experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6">
                <LayoutDashboard className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="mb-2">Course Modules</CardTitle>
                <CardDescription>Shows all modules and their completion status at a glance</CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <CheckCircle className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="mb-2">Test Results</CardTitle>
                <CardDescription>Quick access to pass/fail details for your exercise solutions</CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Command className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="mb-2">Status Bar</CardTitle>
                <CardDescription>Run tests for the active module directly from the VS Code status bar</CardDescription>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to start learning?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-purple-100 md:text-xl">
              Install LearnForge today and transform your VS Code into an interactive learning environment.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                Install LearnForge Extension
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnForge. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
