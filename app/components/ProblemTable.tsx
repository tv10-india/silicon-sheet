"use client";

import { ExternalLink, CheckCircle2, Circle, ChevronDown, ChevronRight, PlayCircle, Code2, Search, Zap, Layers, RefreshCw } from "lucide-react";
import { Problem } from "../data/problems";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// Helper to check for Glitch (Using 7 days as default)
const isGlitching = (dateString?: Date) => {
  if (!dateString) return false;
  const solvedDate = new Date(dateString);
  const diffTime = Math.abs(new Date().getTime() - solvedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays > 7; 
};

export default function ProblemTable({ 
  data, 
  solvedData 
}: { 
  data: Problem[], 
  solvedData: { id: string, solvedAt: Date }[] 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "silicon100">("all");
  const solvedIds = solvedData.map(d => d.id);

  // --- STATS CALCULATION ---
  const totalMaster = data.length;
  const solvedMaster = solvedIds.length;
  const progressMaster = Math.round((solvedMaster / totalMaster) * 100);

  const silicon100Problems = data.filter(p => p.isSilicon100);
  const totalSilicon = silicon100Problems.length;
  const solvedSilicon = silicon100Problems.filter(p => solvedIds.includes(p.id)).length;
  const progressSilicon = totalSilicon > 0 ? Math.round((solvedSilicon / totalSilicon) * 100) : 0;

  const currentTotal = activeTab === "all" ? totalMaster : totalSilicon;
  const currentSolved = activeTab === "all" ? solvedMaster : solvedSilicon;
  const currentProgress = activeTab === "all" ? progressMaster : progressSilicon;

  const filteredData = data.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" ? true : p.isSilicon100 === true;
    return matchesSearch && matchesTab;
  });

  const topics = Array.from(new Set(filteredData.map((p) => p.topic)));
  
  const getTopicProgress = (topic: string) => {
    const topicProblems = filteredData.filter(p => p.topic === topic);
    const solvedCount = topicProblems.filter(p => solvedIds.includes(p.id)).length;
    return `${solvedCount}/${topicProblems.length}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-40">

      {/* --- DYNAMIC PROGRESS BAR --- */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
           {currentSolved} <span className="text-slate-400 dark:text-slate-500 text-2xl">/ {currentTotal}</span>
        </h2>
        <div className="relative w-full max-w-md mx-auto h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 mb-2">
          {/* Light Mode: Subtle Blue BG. Dark Mode: Blue Tint */}
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10"></div>
          <div 
            className={cn(
              "h-full transition-all duration-1000 ease-out relative",
              activeTab === "all" ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gradient-to-r from-purple-500 to-pink-500"
            )}
            style={{ width: `${currentProgress}%` }}
          >
            <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]"></div>
          </div>
        </div>
        <p className={cn("text-xs font-mono transition-colors", activeTab === "all" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400")}>
          {activeTab === "all" ? "Master Progress" : "Silicon 100 Progress"}
        </p>
      </div>
      
      {/* --- TAB SWITCHER (FIXED COLORS) --- */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors">
          
          <button onClick={() => setActiveTab("all")} 
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all", 
              activeTab === "all" 
                // Active: White bg (Light) / Slate-800 (Dark)
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                // Inactive: Gray text
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}>
            <Layers className="w-4 h-4" /><span>Master Sheet</span>
          </button>

          <button onClick={() => setActiveTab("silicon100")} 
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all", 
              activeTab === "silicon100" 
                // Active Silicon 100: Purple Gradient
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}>
            <Zap className="w-4 h-4" /><span>Silicon 100</span>
          </button>

        </div>
      </div>

      {/* --- SEARCH BAR (FIXED COLORS) --- */}
      <div className="relative max-w-md mx-auto mb-10 group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center p-1 transition-colors">
          <Search className="w-5 h-5 text-slate-400 ml-3 mr-2" />
          <input 
            type="text" 
            placeholder={activeTab === "all" ? "Search Master Sheet..." : "Search Silicon 100..."} 
            className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 h-10 placeholder:text-slate-400 dark:placeholder:text-slate-500" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </div>

      {/* LIST */}
      {topics.map((topic, index) => (
        <TopicAccordion 
          key={topic} 
          topic={topic} 
          problems={filteredData.filter((p) => p.topic === topic)}
          solvedData={solvedData} 
          progress={getTopicProgress(topic)}
          defaultOpen={index === 0 || searchQuery.length > 0} 
        />
      ))}
    </div>
  );
}

function TopicAccordion({ topic, problems, solvedData, progress, defaultOpen }: any) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [solved, total] = progress.split('/').map(Number);
  const percentage = total > 0 ? (solved / total) * 100 : 0;

  const glitchCount = problems.filter((p: any) => {
    const s = solvedData.find((d: any) => d.id === p.id);
    return s && isGlitching(s.solvedAt);
  }).length;

  return (
    <div className={cn(
      "group/accordion border rounded-xl overflow-hidden transition-all duration-500 ease-out",
      // Light Mode: White cards. Dark Mode: Dark Glass cards.
      !isOpen && "bg-white/60 dark:bg-slate-900/20 border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/10",
      isOpen && "bg-white/90 dark:bg-slate-900/40 border-blue-500/30 shadow-lg",
      glitchCount > 0 && "border-red-500/30 shadow-red-500/10"
    )}>
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full relative flex items-center justify-between p-5 transition-colors"
      >
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500/50 transition-all duration-1000" 
          style={{ width: isOpen ? '100%' : `${percentage}%`, opacity: isOpen ? 0.2 : 1 }} 
        />

        <div className="flex items-center gap-4 z-10">
          <div className={cn(
            "p-2 rounded-lg transition-all duration-300", 
            isOpen ? "bg-blue-500 text-white rotate-90" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
          )}>
            <ChevronRight className="w-4 h-4" />
          </div>
          
          <div className="text-left">
            <h2 className={cn("text-lg font-bold transition-colors", isOpen ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300")}>
              {topic}
            </h2>
            <p className="text-[10px] text-slate-500 font-mono md:hidden">
              {solved} / {total} Solved
            </p>
          </div>
          
          {glitchCount > 0 && (
             <span className="flex items-center gap-1 text-[10px] font-bold bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 px-2 py-0.5 rounded animate-pulse">
               <Zap className="w-3 h-3" /> {glitchCount} REVIEWS
             </span>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3 z-10">
          <div className="text-right">
             <span className={cn("text-sm font-bold", isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400")}>{Math.round(percentage)}%</span>
             <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Completion</p>
          </div>
          <div className="relative w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
             <div 
                className="absolute inset-0 rounded-full border-2 border-blue-500 border-r-transparent border-b-transparent -rotate-45"
                style={{ clipPath: percentage < 50 ? 'inset(0 50% 0 0)' : 'none', transform: `rotate(${percentage * 3.6}deg)` }}
             />
             <Layers className={cn("w-4 h-4 transition-colors", isOpen ? "text-blue-500" : "text-slate-400")} />
          </div>
        </div>
      </button>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
          {problems.map((problem: any, idx: number) => {
            const solvedRecord = solvedData.find((d: any) => d.id === problem.id);
            return (
              <div 
                key={problem.id} 
                className={cn("transition-all duration-500", isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <ProblemRow problem={problem} index={idx} solvedRecord={solvedRecord} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProblemRow({ problem, index, solvedRecord }: any) {
  const isSolved = !!solvedRecord;
  const isCorrupted = isSolved && isGlitching(solvedRecord.solvedAt); 
  const [checked, setChecked] = useState(isSolved);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    const newState = isCorrupted ? true : !checked; 
    if (!isCorrupted) setChecked(newState);
    setIsLoading(true);
    await fetch("/api/toggle", { method: "POST", body: JSON.stringify({ problemId: problem.id, isSolved: newState }) });
    router.refresh(); 
    setIsLoading(false);
  };

  return (
    <div className={cn(
      "p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-200 dark:border-slate-800/50",
      checked && "bg-blue-50 dark:bg-blue-500/5",
      isCorrupted && "bg-red-50 dark:bg-red-900/10"
    )}>
      <div className="flex items-center gap-4 flex-1">
        <button onClick={handleToggle} disabled={isLoading} className="group/btn relative">
          {isCorrupted ? <RefreshCw className="w-6 h-6 text-red-500 animate-spin-slow" /> : checked ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Circle className="w-6 h-6 text-slate-400 dark:text-slate-600 group-hover/btn:text-blue-500" />}
        </button>
        <div className="flex flex-col">
           <span className={cn(
             "font-medium text-lg transition-all", 
             !checked && "text-slate-700 dark:text-slate-200",
             checked && "text-slate-400 dark:text-slate-500 line-through", 
             isCorrupted && "glitch-text text-red-500 no-underline font-bold"
           )} data-text={problem.title}>{problem.title}</span>
           
           <div className="flex items-center gap-2 mt-1">
             <span className={cn("text-[10px] font-bold uppercase tracking-wider w-fit", problem.difficulty === "Easy" ? "text-green-600 dark:text-green-500" : problem.difficulty === "Medium" ? "text-yellow-600 dark:text-yellow-500" : "text-red-600 dark:text-red-500")}>{problem.difficulty}</span>
             {isCorrupted && <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">● MEMORY LEAK</span>}
           </div>
        </div>
      </div>
      <div className="flex items-center gap-3 pl-10 md:pl-0 mt-3 md:mt-0">
        {problem.videoUrl ? <a href={problem.videoUrl} target="_blank" className="flex items-center gap-2 px-3 py-1.5 text-red-500 border border-red-200 dark:border-red-500/30 rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-500/10"><PlayCircle className="w-4 h-4" />Solution</a> : null}
        <a href={problem.link} target="_blank" className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-blue-600 dark:hover:text-white"><Code2 className="w-4 h-4" />Solve<ExternalLink className="w-3 h-3 opacity-50" /></a>
      </div>
    </div>
  );
}