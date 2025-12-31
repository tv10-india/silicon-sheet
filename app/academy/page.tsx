"use client";

import Header from "../components/Header";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { Code2, Coffee, Terminal, Cpu, ArrowRight, Braces } from "lucide-react";

const courses = [
  {
    id: "cpp-mastery",
    title: "C++ for Performance",
    description: "The language of Competitive Programming. Master pointers, memory management, and the STL.",
    icon: <Code2 className="w-6 h-6" />,
    color: "blue",
    tags: ["STL", "Pointers", "Memory"],
    link: "https://www.youtube.com/playlist?list=YOUR_CPP_PLAYLIST", 
  },
  {
    id: "java-enterprise",
    title: "Java Enterprise",
    description: "The backbone of Big Tech (Amazon, Google). Learn OOPs, Collections, and Multithreading.",
    icon: <Coffee className="w-6 h-6" />,
    color: "orange",
    tags: ["OOPs", "Collections", "JVM"],
    link: "https://www.youtube.com/playlist?list=YOUR_JAVA_PLAYLIST", 
  },
  {
    id: "python-scripting",
    title: "Python & AI",
    description: "The language of Data & Automation. Clean syntax, powerful libraries, and interview speed.",
    icon: <Terminal className="w-6 h-6" />,
    color: "emerald",
    tags: ["Scripting", "Data", "Easy"],
    link: "https://www.youtube.com/playlist?list=YOUR_PYTHON_PLAYLIST", 
  },
  {
    id: "golang-systems",
    title: "Go (Golang)",
    description: "Built for the Cloud. Master Concurrency, Goroutines, and building high-scale Microservices.",
    icon: <Cpu className="w-6 h-6" />,
    color: "cyan",
    tags: ["Concurrency", "Cloud", "Fast"],
    link: "https://www.youtube.com/playlist?list=YOUR_GOLANG_PLAYLIST", 
  },
];

export default function AcademyPage() {
  return (
    <AuroraBackground className="h-full min-h-screen w-full">
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <Header />

        {/* --- HERO SECTION --- */}
        <div className="pt-40 pb-16 px-4 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            The Code <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Academy.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Before you grind the algorithms, you must master the syntax. 
            Deep dive into the languages that power the world's software.
          </p>
        </div>

        {/* --- COURSE GRID --- */}
        <div className="max-w-6xl mx-auto px-4 pb-32 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {courses.map((course) => (
            <a 
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                {/* Dynamic Color Rendering */}
                <div className={`p-3 rounded-2xl 
                  ${course.color === 'blue' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 
                    course.color === 'orange' ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                    course.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                  }`}
                >
                  {course.icon}
                </div>
                
                <div className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wide bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </AuroraBackground>
  );
}