"use client";

import Header from "../components/Header";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { PlayCircle, Sparkles, Filter, ExternalLink, User, Briefcase, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- DATA SOURCE ---
const episodes = [
  {
    id: "gROi-IqUn04",
    speaker: "Avinash Singh",
    role: "R&D Engineer",
    company: "Mercedes",
    title: "How I cracked Mercedes R&D & Philips AI",
    link: "https://youtu.be/gROi-IqUn04",
    linkedin: "https://www.linkedin.com/in/avinashiitp/", 
  },
  {
    id: "7TaqRvgjRxI",
    speaker: "Disha Jindgar",
    role: "Software Engineer",
    company: "PayPal", 
    title: "From Walmart Engineer to Times Square... But HOW?",
    link: "https://youtu.be/7TaqRvgjRxI",
    linkedin: "https://www.linkedin.com/in/dishajindgar/",
  },
  {
    id: "m5kz7Esn4fQ",
    speaker: "Parul Chaddha",
    role: "SDE-I",
    company: "Flipkart",
    title: "Your Resume is Getting Rejected (Here's Why)",
    link: "https://youtu.be/m5kz7Esn4fQ",
    linkedin: "https://www.linkedin.com/in/parulchaddha0904/",
  },
  {
    id: "PPxftUflkDg",
    speaker: "Muskan Walia",
    role: "Software Engineer",
    company: "Microsoft",
    title: "How This Electronics Student CRACKED Microsoft",
    link: "https://youtu.be/PPxftUflkDg",
    linkedin: "https://www.linkedin.com/in/muskanwalia20/",
  },
  {
    id: "S_6llfrqcUQ",
    speaker: "Om Ashish Soni",
    role: "SDE",
    company: "MasterCard",
    title: "Your Resume is WRONG ❌ - Honest Advice",
    link: "https://youtu.be/S_6llfrqcUQ",
    linkedin: "https://www.linkedin.com/in/om-ashish-soni/",
  },
  {
    id: "4_vVuiWJJmQ",
    speaker: "Gaurish Baliga",
    role: "Ex-Google Engineer",
    company: "Google",
    title: "Software Engineer Exposes Hiring Secrets",
    link: "https://youtu.be/4_vVuiWJJmQ",
    linkedin: "https://www.linkedin.com/in/gaurish-baliga-443894131/",
  },
];

export default function GuidancePage() {
  const [selectedCompany, setSelectedCompany] = useState("All");

  const companies = ["All", ...Array.from(new Set(episodes.map((p) => p.company)))];

  const filteredEpisodes = selectedCompany === "All" 
    ? episodes 
    : episodes.filter((p) => p.company === selectedCompany);

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
            The Guidance Hall <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Real Stories. Real Offers.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn the unspoken rules of the industry from engineers who cracked the code at Google, Microsoft, and Mercedes.
          </p>
        </div>

        {/* --- COMPANY FILTER RAIL --- */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                  selectedCompany === company
                    ? "bg-slate-900 text-white dark:bg-white dark:text-black border-transparent shadow-lg scale-105"
                    : "bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30"
                )}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* --- THE GRID --- */}
        <div className="max-w-7xl mx-auto px-4 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((video) => (
              <div 
                key={video.id}
                className="group relative flex flex-col bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* 1. THUMBNAIL (Links to YouTube) */}
                <a 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 block"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
                      <PlayCircle className="w-8 h-8 text-white fill-white/20" />
                    </div>
                  </div>

                  {/* Company Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
                    {video.company}
                  </div>
                </a>

                {/* 2. CONTENT AREA */}
                <div className="p-6 flex flex-col flex-1 relative">
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Header: Speaker + LinkedIn */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <User className="w-3 h-3" /> {video.speaker}
                        </span>
                      </div>
                      
                      {/* LINKEDIN BUTTON */}
                      {video.linkedin && (
                        <a 
                          href={video.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-[#0077b5] transition-colors p-1"
                          title="Connect on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    {/* Title (Links to YouTube) */}
                    <a href={video.link} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {video.title}
                      </h3>
                    </a>
                    
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                      <Briefcase className="w-3 h-3" />
                      {video.role}
                    </div>

                    <a 
                      href={video.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center text-sm font-bold text-slate-400 group-hover:text-purple-500 transition-colors"
                    >
                      Watch Episode <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
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