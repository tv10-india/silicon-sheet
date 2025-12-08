"use client";

import Header from "../components/Header";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { podcasts } from "../data/podcasts";
import { PlayCircle, Quote, Sparkles, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function GuidancePage() {
  const [selectedCompany, setSelectedCompany] = useState("All");

  const companies = ["All", ...Array.from(new Set(podcasts.map((p) => p.company)))];

  const filteredPodcasts = selectedCompany === "All" 
    ? podcasts 
    : podcasts.filter((p) => p.company === selectedCompany);

  return (
    <AuroraBackground className="h-full min-h-screen w-full">
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <Header />

        {/* --- HERO SECTION --- */}
        <div className="pt-40 pb-12 px-4 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Insider Knowledge</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Guidance from the <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Industry Giants.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from engineers at Google, Amazon, and more. 
            Filter by your dream company.
          </p>
        </div>

        {/* --- COMPANY FILTER RAIL --- */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  selectedCompany === company
                    // Active State: (Light: Black bg / Dark: White bg)
                    ? "bg-slate-900 text-white dark:bg-white dark:text-black border-transparent shadow-lg scale-105"
                    // Inactive State: (Light: White bg / Dark: Glass bg)
                    : "bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30"
                )}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* --- THE GRID --- */}
        <div className="max-w-7xl mx-auto px-4 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {filteredPodcasts.length > 0 ? (
            filteredPodcasts.map((pod) => (
              <div 
                key={pod.id} 
                className={cn(
                  "group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1",
                  // LIGHT MODE: White Card, Shadow, Gray Border
                  "bg-white/70 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/10",
                  // DARK MODE: Dark Glass, Glow, White Border
                  "dark:bg-slate-900/40 dark:border-white/10 dark:hover:shadow-purple-900/20"
                )}
              >
                {/* Dark Mode Glow Effect (Hidden in Light Mode) */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:block hidden"></div>

                <div>
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      {/* Avatar Glow */}
                      <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-full"></div>
                      <img 
                        src={pod.imageUrl} 
                        alt={pod.guestName}
                        className="relative w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md" 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">{pod.guestName}</h3>
                      {/* Dynamic Company Tag */}
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mt-1 inline-block border",
                        pod.company === "Google" ? "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20" :
                        pod.company === "Amazon" ? "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20" :
                        pod.company === "Microsoft" ? "text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20" :
                        "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20"
                      )}>
                        {pod.role} @ {pod.company}
                      </span>
                    </div>
                  </div>

                  {/* The Quote */}
                  <div className="mb-8 relative">
                    <Quote className="absolute -top-3 -left-2 w-8 h-8 text-purple-200 dark:text-purple-500/20 rotate-180" />
                    <p className="text-slate-600 dark:text-slate-300 italic pl-4 text-base leading-relaxed relative z-10 font-medium">
                      "{pod.quote}"
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <a 
                  href={pod.videoUrl} 
                  target="_blank"
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all",
                    // LIGHT MODE BUTTON: Dark Gray -> Black
                    "bg-slate-900 text-white hover:bg-black hover:shadow-lg",
                    // DARK MODE BUTTON: Slate -> White
                    "dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-white dark:hover:text-black"
                  )}
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Episode
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-400">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No episodes found for {selectedCompany} yet.</p>
            </div>
          )}
        </div>

      </div>
    </AuroraBackground>
  );
}