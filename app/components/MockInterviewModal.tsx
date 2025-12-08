"use client";

import { useState, useEffect } from "react";
import { Problem } from "../data/problems";
import { X, Timer, Eye, CheckCircle2, AlertTriangle, Play, Trophy, Crown } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MockInterviewModal({ 
  allProblems, 
  solvedIds 
}: { 
  allProblems: Problem[], 
  solvedIds: string[] 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProblem, setActiveProblem] = useState<Problem | null>(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [isRevealed, setIsRevealed] = useState(false);
  
  // NEW STATE: Track if the user is a "God"
  const [isGodMode, setIsGodMode] = useState(false);
  
  const router = useRouter();

  const startInterview = () => {
    const unsolved = allProblems.filter(p => !solvedIds.includes(p.id));
    
    // CHECK FOR GOD MODE
    if (unsolved.length === 0) {
      setIsGodMode(true);
      setIsOpen(true);
      return;
    }
    
    // Normal Flow
    setIsGodMode(false);
    const random = unsolved[Math.floor(Math.random() * unsolved.length)];
    setActiveProblem(random);
    setIsOpen(true);
    setIsRevealed(false);
    setTimeLeft(45 * 60);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && timeLeft > 0 && !isGodMode) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, timeLeft, isGodMode]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSolve = async () => {
    if (!activeProblem) return;
    await fetch("/api/toggle", {
        method: "POST",
        body: JSON.stringify({ problemId: activeProblem.id, isSolved: true }),
    });
    setIsOpen(false);
    router.refresh();
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <button
        onClick={startInterview}
        className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.7)] transition-all hover:scale-105 border border-red-400/50"
      >
        <div className="relative">
          <AlertTriangle className="w-6 h-6 animate-pulse" />
          <div className="absolute inset-0 bg-white/50 blur-lg rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="text-left">
          <span className="block text-xs font-bold uppercase tracking-wider text-red-200">Interview Mode</span>
          <span className="font-bold text-lg">Panic Button</span>
        </div>
      </button>

      {/* THE MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className={cn(
            "w-full max-w-2xl rounded-2xl p-8 relative shadow-2xl transition-colors border",
            // God Mode Styling vs Normal Mode Styling
            isGodMode 
              ? "bg-gradient-to-br from-yellow-50 to-white dark:from-slate-900 dark:to-slate-800 border-yellow-400 dark:border-yellow-600 shadow-yellow-500/20"
              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
          )}>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* --- VIEW 1: GOD MODE (VICTORY) --- */}
            {isGodMode ? (
              <div className="text-center py-10">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-yellow-400 blur-[50px] opacity-40"></div>
                  <Crown className="w-24 h-24 text-yellow-500 relative z-10 animate-bounce" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  You are a <span className="text-yellow-500">God.</span>
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                  You have solved every single problem in the Silicon Sheet. 
                  <br/>There is nothing left to teach you.
                </p>

                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-xl shadow-lg shadow-yellow-500/30 transition-all hover:scale-105"
                  >
                    Accept My Legacy
                  </button>
                </div>
              </div>
            ) : (
              // --- VIEW 2: NORMAL INTERVIEW MODE ---
              activeProblem && (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/10 px-4 py-2 rounded-lg border border-red-200 dark:border-red-500/20">
                      <Timer className="w-5 h-5 animate-pulse" />
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="text-slate-500 text-sm font-mono uppercase tracking-widest">
                      Mock Interview In Progress
                    </div>
                  </div>

                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                      {activeProblem.title}
                    </h2>
                    
                    <div className="flex justify-center gap-4">
                      {isRevealed ? (
                        <>
                          <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                            {activeProblem.topic}
                          </span>
                          <span className={`px-3 py-1 rounded border font-medium ${
                            activeProblem.difficulty === "Easy" ? "text-green-600 dark:text-green-400 border-green-200 dark:border-green-900 bg-green-100 dark:bg-green-900/20" :
                            activeProblem.difficulty === "Medium" ? "text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900 bg-yellow-100 dark:bg-yellow-900/20" :
                            "text-red-600 dark:text-red-400 border-red-200 dark:border-red-900 bg-red-100 dark:bg-red-900/20"
                          }`}>
                            {activeProblem.difficulty}
                          </span>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded border border-slate-200 dark:border-slate-700/50 border-dashed">
                          <Eye className="w-4 h-4" />
                          <span>Topic & Difficulty Hidden</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href={activeProblem.link} 
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20"
                    >
                      <Play className="w-5 h-5" />
                      Start Coding
                    </a>

                    <button 
                      onClick={() => setIsRevealed(true)}
                      className={`flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 py-4 rounded-xl font-medium transition-all ${isRevealed ? "opacity-50 pointer-events-none" : ""}`}
                    >
                      <Eye className="w-5 h-5" />
                      Reveal Hints
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                    <button 
                      onClick={handleSolve}
                      className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">I successfully solved it within 45m</span>
                    </button>
                  </div>
                </>
              )
            )}

          </div>
        </div>
      )}
    </>
  );
}