import Link from "next/link";
import Header from "./components/Header";
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { ArrowRight, Terminal, Youtube, Zap, ShieldCheck, Trophy, Heart } from "lucide-react";

export default function Home() {
  return (
    <AuroraBackground className="h-full w-full">
      <div className="relative z-10 w-full">
        <Header />
        
        {/* --- HERO SECTION --- */}
        <div className="pt-40 pb-20 px-4 max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-300 text-xs font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            100% Free & Open Source
          </div>

          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-400 pb-4 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Code Like <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Silicon Valley.
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             Stop grinding random questions. Follow the curated path used by engineers at Google, Amazon, and Microsoft.
             <br />
             <span className="text-slate-900 dark:text-slate-200 font-medium">No paywalls. No login required to start.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
             <Link 
               href="/sheet" 
               className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
             >
               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
                 Start Solving for Free
                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
             </Link>
             
             <a 
               href="https://youtube.com/@SiliconStories" 
               target="_blank"
               className="px-8 py-3 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors font-medium flex items-center gap-2"
             >
               <Youtube className="w-5 h-5 text-red-500" />
               Watch Stories
             </a>
          </div>
        </div>

        {/* --- SOCIAL PROOF (Updated for Light Mode visibility) --- */}
        <div className="w-full border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm py-10 mb-20">
          <p className="text-center text-sm font-mono text-slate-500 mb-6 uppercase tracking-widest">
            Curated from interviews at
          </p>
          <div className="flex justify-center gap-12 md:gap-24 opacity-50 grayscale mix-blend-difference dark:mix-blend-screen flex-wrap px-4">
             <span className="text-xl font-bold text-slate-900 dark:text-white">GOOGLE</span>
             <span className="text-xl font-bold text-slate-900 dark:text-white">AMAZON</span>
             <span className="text-xl font-bold text-slate-900 dark:text-white">NETFLIX</span>
             <span className="text-xl font-bold text-slate-900 dark:text-white">UBER</span>
             <span className="text-xl font-bold text-slate-900 dark:text-white">MICROSOFT</span>
          </div>
        </div>

        {/* --- BENTO GRID (Updated Card Colors) --- */}
        <div className="max-w-6xl mx-auto px-4 pb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16">
            Everything you need. <br />
            <span className="text-slate-500">Nothing to pay.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card Styles: bg-white/50 for light, bg-slate-900/40 for dark */}
            <div className="md:col-span-2 row-span-2 bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-slate-900/60 transition-colors group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Silicon Sheet</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                  Not just a list. A complete curriculum. We curated the top 50 patterns that cover 99% of interview questions.
                </p>
                <div className="flex gap-2">
                   <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs">Arrays</div>
                   <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs">Graphs</div>
                   <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-300 text-xs">DP</div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-slate-900/60 transition-colors group backdrop-blur-sm">
              <div className="w-10 h-10 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Always Free</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Education should be open. No credit cards. No hidden "Pro" plans.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-slate-900/60 transition-colors group backdrop-blur-sm">
              <div className="w-10 h-10 bg-red-500/10 dark:bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Memory Defense</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                The "Glitch Protocol" visually decays problems you haven't reviewed in 7 days.
              </p>
            </div>

             <div className="md:col-span-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900/40 dark:to-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group">
               <div>
                 <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gamified Progress</h3>
                 </div>
                 <p className="text-slate-600 dark:text-slate-400">Track your journey with a dynamic progress bar that adapts to your study mode.</p>
               </div>
               <Link href="/sheet" className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                 Open Dashboard
               </Link>
             </div>

          </div>
        </div>

      </div>
    </AuroraBackground>
  );
}