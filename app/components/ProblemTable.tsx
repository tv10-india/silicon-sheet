"use client";

import { ExternalLink, CheckCircle2, Circle, ChevronRight, PlayCircle, Code2, Search, Zap, Layers, Dumbbell, Swords, RefreshCw, Info, X } from "lucide-react";
import { Problem } from "../data/problems";
import { topicLectures } from "../data/lectures"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// --- GLITCH LOGIC ---
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
  
  // MVP STATE: Only All (Master) and Silicon100 are active
  const [activeTab, setActiveTab] = useState<"all" | "silicon100" /* | "iron1000" | "cp" */>("all");
  const [showInfo, setShowInfo] = useState(false); 
  const router = useRouter();

  const solvedIds = solvedData.map(d => d.id);

  // --- FILTERING LOGIC ---
  const filteredData = data.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.topic.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesTab = true;

    if (activeTab === "silicon100") {
      matchesTab = p.isSilicon100 === true;
    } 
    /* // HIDDEN FOR UPDATE v2
    else if (activeTab === "iron1000") {
      matchesTab = p.isIron1000 === true;
    } 
    else if (activeTab === "cp") {
      matchesTab = p.isCP === true;
    }
    */
    else if (activeTab === "all") {
      // Still hiding the future "Grind" content from the Master view to keep it clean
      if (p.topic.startsWith("Sector") || p.title.startsWith("CP:")) { 
        matchesTab = false;
      }
    }

    return matchesSearch && matchesTab;
  });

  const topics = Array.from(new Set(filteredData.map((p) => p.topic)));
  
  // --- STATISTICS ENGINE ---
  const masterProblems = data.filter(p => !p.topic.startsWith("Sector") && !p.title.startsWith("CP:"));
  const totalMaster = masterProblems.length;
  const solvedMaster = masterProblems.filter(p => solvedIds.includes(p.id)).length;

  const siliconProblems = data.filter(p => p.isSilicon100);
  const totalSilicon = siliconProblems.length;
  const solvedSilicon = siliconProblems.filter(p => solvedIds.includes(p.id)).length;

  /*
  const ironProblems = data.filter(p => p.isIron1000);
  const totalIron = ironProblems.length;
  const solvedIron = ironProblems.filter(p => solvedIds.includes(p.id)).length;

  const cpProblems = data.filter(p => p.isCP);
  const totalCP = cpProblems.length;
  const solvedCP = cpProblems.filter(p => solvedIds.includes(p.id)).length;
  */

  let currentTotal = totalMaster;
  let currentSolved = solvedMaster;

  if (activeTab === "silicon100") {
    currentTotal = totalSilicon;
    currentSolved = solvedSilicon;
  } 
  /*
  else if (activeTab === "iron1000") {
    currentTotal = totalIron;
    currentSolved = solvedIron;
  } else if (activeTab === "cp") {
    currentTotal = totalCP;
    currentSolved = solvedCP;
  }
  */

  const currentProgress = currentTotal > 0 ? Math.round((currentSolved / currentTotal) * 100) : 0;
  
  const getTopicProgress = (topic: string) => {
    const topicProblems = filteredData.filter(p => p.topic === topic);
    const solvedCount = topicProblems.filter(p => solvedIds.includes(p.id)).length;
    return `${solvedCount}/${topicProblems.length}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-40">

      {/* --- HERO PROGRESS --- */}
      <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
           {currentSolved} <span className="text-slate-300 dark:text-slate-600 text-3xl">/ {currentTotal}</span>
        </h2>
        
        <div className="relative w-full max-w-md mx-auto h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 mb-3 shadow-inner">
          <div 
            className={cn(
              "h-full transition-all duration-1000 ease-out relative",
              activeTab === "all" && "bg-gradient-to-r from-blue-500 to-cyan-400",
              activeTab === "silicon100" && "bg-gradient-to-r from-purple-600 to-pink-500",
              // activeTab === "iron1000" && "bg-gradient-to-r from-orange-500 to-amber-400",
              // activeTab === "cp" && "bg-gradient-to-r from-red-600 to-rose-600"
            )}
            style={{ width: `${currentProgress}%` }}
          >
            <div className="absolute right-0 top-0 h-full w-1 bg-white/50 blur-[1px] animate-pulse"></div>
          </div>
        </div>

        <p className={cn(
            "text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors", 
            activeTab === "all" && "text-blue-600 dark:text-blue-400",
            activeTab === "silicon100" && "text-purple-600 dark:text-purple-400",
            // activeTab === "iron1000" && "text-orange-600 dark:text-orange-400",
            // activeTab === "cp" && "text-red-600 dark:text-red-400"
          )}>
          {activeTab === "all" ? "Master Database" : 
           activeTab === "silicon100" ? "Silicon Protocol" : ""}
        </p>
      </div>
      
      {/* --- TAB SWITCHER --- */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <div className="flex items-center p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto shadow-sm max-w-full">
          
          <button onClick={() => setActiveTab("all")} 
            className={cn("flex items-center gap-2 px-4 md:px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap", 
            activeTab === "all" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md" : "text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300")}>
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Master</span>
          </button>

          <button onClick={() => setActiveTab("silicon100")} 
            className={cn("flex items-center gap-2 px-4 md:px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap", 
            activeTab === "silicon100" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20" : "text-slate-500 dark:text-slate-500 hover:text-purple-500 dark:hover:text-purple-400")}>
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">Silicon 100</span>
          </button>

          {/* HIDDEN FOR FUTURE UPDATES
          <button onClick={() => setActiveTab("iron1000")} ... >
            <Dumbbell className="w-4 h-4" />
            <span className="hidden sm:inline">Iron 1000</span>
          </button>

          <button onClick={() => setActiveTab("cp")} ... >
            <Swords className="w-4 h-4" />
            <span className="hidden sm:inline">Arena</span>
          </button>
          */}

        </div>

        <button 
          onClick={() => setShowInfo(true)}
          className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* --- SEARCH --- */}
      <div className="relative max-w-lg mx-auto mb-12 group">
        <div className={cn(
            "absolute inset-0 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000",
            activeTab === "all" && "bg-gradient-to-r from-blue-500 to-cyan-500",
            activeTab === "silicon100" && "bg-gradient-to-r from-purple-500 to-pink-500",
          )}></div>
        <div className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center p-1.5 shadow-sm">
          <Search className="w-5 h-5 text-slate-400 ml-3 mr-2" />
          <input 
            type="text" 
            placeholder="Search problems..."
            className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 h-10 placeholder:text-slate-400 font-medium" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </div>

      {/* --- LIST --- */}
      <div className="space-y-4">
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <TopicAccordion 
              key={topic} 
              topic={topic} 
              problems={filteredData.filter((p) => p.topic === topic)}
              solvedData={solvedData} 
              progress={getTopicProgress(topic)}
              defaultOpen={index === 0 || searchQuery.length > 0} 
              activeTab={activeTab} 
            />
          ))
        ) : (
          <div className="text-center py-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
               <Search className="w-6 h-6 text-slate-400" />
             </div>
             <p className="text-slate-500 dark:text-slate-400">No problems found in this sector.</p>
          </div>
        )}
      </div>

      {/* --- INFO MODAL --- */}
      {showInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            <button onClick={() => setShowInfo(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <X className="w-5 h-5 text-slate-500" />
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Choose Your Protocol</h2>
              <div className="space-y-4">
                
                {/* 1. MASTER */}
                <div className="flex gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-500/20">
                  <div className="p-3 h-fit rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"><Layers className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-100">The Master Database</h3>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">Core concepts and standard algorithms. The foundation.</p>
                  </div>
                </div>

                {/* 2. SILICON */}
                <div className="flex gap-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-500/20">
                  <div className="p-3 h-fit rounded-lg bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400"><Zap className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-purple-900 dark:text-purple-100">The Silicon 100</h3>
                    <p className="text-sm text-purple-800 dark:text-purple-300 mt-1">Interview Prep. The exact 100 questions asked by Big Tech.</p>
                  </div>
                </div>

                {/* HIDDEN MODAL SECTIONS FOR UPDATE
                <div className="flex gap-4 p-4 rounded-xl bg-orange-50 ...">...</div>
                <div className="flex gap-4 p-4 rounded-xl bg-red-50 ...">...</div>
                */}

              </div>
              <button onClick={() => setShowInfo(false)} className="w-full mt-6 py-3 rounded-xl font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity">Understood</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- ACCORDION COMPONENT ---
function TopicAccordion({ topic, problems, solvedData, progress, defaultOpen, activeTab }: any) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [solved, total] = progress.split('/').map(Number);
  const percentage = total > 0 ? (solved / total) * 100 : 0;

  // Theme Logic (Iron and CP logic exists but wont be triggered)
  const activeColorClass = 
    // activeTab === "cp" ? "bg-red-600 text-white" :
    // activeTab === "iron1000" ? "bg-orange-500 text-white" :
    activeTab === "silicon100" ? "bg-purple-600 text-white" :
    "bg-blue-500 text-white";

  const activeBorderClass = 
    // activeTab === "cp" ? "border-red-500/30 shadow-red-500/10" :
    // activeTab === "iron1000" ? "border-orange-500/30 shadow-orange-500/10" :
    activeTab === "silicon100" ? "border-purple-500/30 shadow-purple-500/10" :
    "border-blue-500/30 shadow-blue-500/10";

  const activeTextClass = 
    //  activeTab === "cp" ? "text-red-600 dark:text-red-400" :
    //  activeTab === "iron1000" ? "text-orange-600 dark:text-orange-400" :
     activeTab === "silicon100" ? "text-purple-600 dark:text-purple-400" :
     "text-blue-600 dark:text-blue-400";

  const activeBgClass =
    //  activeTab === "cp" ? "bg-red-600" :
    //  activeTab === "iron1000" ? "bg-orange-500" :
     activeTab === "silicon100" ? "bg-purple-600" :
     "bg-blue-500";

  const activeStrokeClass = 
    //  activeTab === "cp" ? "border-red-600" :
    //  activeTab === "iron1000" ? "border-orange-500" : 
     activeTab === "silicon100" ? "border-purple-600" : 
     "border-blue-500";

  const glitchCount = problems.filter((p: any) => {
    const s = solvedData.find((d: any) => d.id === p.id);
    return s && isGlitching(s.solvedAt);
  }).length;

  return (
    <div className={cn(
      "group/accordion border rounded-xl overflow-hidden transition-all duration-500 ease-out",
      !isOpen && "bg-white/60 dark:bg-slate-900/20 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-slate-700",
      isOpen && `bg-white/95 dark:bg-slate-900/60 shadow-xl ${activeBorderClass}`,
      glitchCount > 0 && "border-red-500/30 shadow-red-500/10"
    )}>
      
      <button onClick={() => setIsOpen(!isOpen)} className="w-full relative flex items-center justify-between p-5 transition-colors">
        <div className={cn("absolute bottom-0 left-0 h-[3px] transition-all duration-1000", activeBgClass)} style={{ width: isOpen ? '100%' : `${percentage}%`, opacity: isOpen ? 0.2 : 1 }} />
        
        <div className="flex items-center gap-4 z-10">
          <div className={cn("p-2 rounded-lg transition-all", isOpen ? `${activeColorClass} rotate-90 shadow-md` : "bg-slate-100 dark:bg-white/5 text-slate-500")}>
            <ChevronRight className="w-4 h-4" />
          </div>
          
          <div className="text-left">
            <h2 className={cn("text-lg font-bold transition-colors", isOpen ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300")}>{topic}</h2>
            <p className="text-[10px] text-slate-500 font-mono md:hidden mt-0.5">{solved} / {total} Completed</p>
          </div>
          
          {glitchCount > 0 && (
             <span className="flex items-center gap-1.5 text-[10px] font-bold bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 px-2 py-1 rounded-md animate-pulse">
               <Zap className="w-3 h-3" /> {glitchCount}
             </span>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4 z-10">
          <div className="text-right">
             <span className={cn("text-sm font-bold block", isOpen ? activeTextClass : "text-slate-500")}>{Math.round(percentage)}%</span>
          </div>
          <div className="relative w-11 h-11 rounded-full border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-slate-900">
             <div className={cn("absolute inset-0 rounded-full border-4 border-r-transparent border-b-transparent -rotate-45 transition-colors", activeStrokeClass)} 
                style={{ clipPath: percentage < 50 ? 'inset(0 50% 0 0)' : 'none', transform: `rotate(${percentage * 3.6}deg)` }} />
             
             {/* // Future Icons (Commented Out)
               activeTab === "cp" ? <Swords ... /> :
               activeTab === "iron1000" ? <Dumbbell ... /> :
             */}
             
             {activeTab === "silicon100" ? <Zap className={cn("w-4 h-4 transition-colors", isOpen ? "text-purple-600" : "text-slate-400")} /> :
              <Layers className={cn("w-4 h-4 transition-colors", isOpen ? "text-blue-500" : "text-slate-400")} />}
          </div>
        </div>
      </button>

      {/* --- EXPANDED CONTENT --- */}
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
          
          {/* === TOPIC BRIEFING BANNER === */}
          {topicLectures[topic] && (
            <div className={cn(
                "p-4 border-b flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between", 
                // activeTab === "cp" ? "bg-red-50..." : 
                // activeTab === "iron1000" ? "bg-orange-50..." :
                "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-500/20"
              )}>
              <div className="flex items-center gap-3">
                <div className={cn(
                    "p-2.5 rounded-full",
                    // activeTab === "cp" ? "bg-red-100..." :
                    "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"
                  )}>
                  <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={cn("text-sm font-bold", 
                     // activeTab === "cp" ? "text-red-900" :
                     "text-slate-900 dark:text-white"
                  )}>Topic Briefing</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Watch the concept lecture before solving.</p>
                </div>
              </div>
              <a 
                href={topicLectures[topic]} 
                target="_blank"
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap",
                  // activeTab === "cp" ? "bg-white text-red-600" :
                  "bg-white dark:bg-blue-600 text-blue-600 dark:text-white"
                )}
              >
                Watch Lecture
              </a>
            </div>
          )}

          {problems.map((problem: any, idx: number) => {
            const solvedRecord = solvedData.find((d: any) => d.id === problem.id);
            return <ProblemRow key={problem.id} problem={problem} solvedRecord={solvedRecord} />;
          })}
        </div>
      </div>
    </div>
  );
}

// --- ROW COMPONENT ---
function ProblemRow({ problem, solvedRecord }: any) {
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
      "p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white dark:hover:bg-white/5 transition-colors border-b border-slate-200 dark:border-slate-800/50 last:border-0",
      checked && "bg-blue-50/50 dark:bg-blue-500/5",
      isCorrupted && "bg-red-50 dark:bg-red-900/10"
    )}>
      <div className="flex items-center gap-4 flex-1">
        <button onClick={handleToggle} disabled={isLoading} className="group/btn relative transition-transform active:scale-95">
          {isCorrupted ? <RefreshCw className="w-6 h-6 text-red-500 animate-spin-slow" /> : 
           checked ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : 
           <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 group-hover/btn:text-blue-500 transition-colors" />}
        </button>
        
        <div className="flex flex-col">
           <span className={cn("font-medium text-[15px] transition-all", !checked && "text-slate-700 dark:text-slate-200", checked && "text-slate-400 dark:text-slate-500 line-through decoration-slate-400/50", isCorrupted && "glitch-text text-red-500 no-underline font-bold")}>
             {problem.title}
           </span>
           <div className="flex items-center gap-2 mt-1.5">
             <span className={cn("text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded", 
                problem.difficulty === "Easy" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : 
                problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400" : 
                "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400")}>
               {problem.difficulty}
             </span>
             {isCorrupted && <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">● MEMORY LEAK</span>}
           </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pl-10 md:pl-0">
        {problem.videoUrl && (
          <a 
            href={problem.videoUrl} 
            target="_blank" 
            className="flex items-center gap-2 px-3 py-1.5 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
          >
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Watch</span>
          </a>
        )}
        <a 
          href={problem.link} 
          target="_blank" 
          className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wide border border-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-500 transition-all"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Solve</span>
          <ExternalLink className="w-3 h-3 opacity-50" />
        </a>
      </div>
    </div>
  );
}