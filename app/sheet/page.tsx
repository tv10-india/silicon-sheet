import Header from "../components/Header";
import ProblemTable from "../components/ProblemTable";
import { problems } from "../data/problems";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import MockInterviewModal from "../components/MockInterviewModal";
import { Terminal } from "lucide-react";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export default async function SheetPage() {
  const session = await auth();
  
  let solvedData: { id: string; solvedAt: Date }[] = [];
  
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { solvedProblems: true },
    });
    if (user) {
      solvedData = user.solvedProblems.map((p) => ({
        id: p.problemId,
        solvedAt: p.solvedAt
      }));
    }
  }

  return (
    // FIX 1: Removed "bg-slate-950" so it listens to the Theme Toggle
    <AuroraBackground className="h-full min-h-screen w-full">
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <Header />
        
        {/* --- PREMIUM DASHBOARD HERO --- */}
        <div className="pt-40 pb-12 px-4 max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          {/* FIX 2: Updated colors to be readable in Light Mode (Blue-700) and Dark Mode (Blue-300) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Terminal className="w-3 h-3" />
            <span>Interactive Curriculum</span>
          </div>

          {/* Headline */}
          {/* FIX 3: Changed text-white to text-slate-900 dark:text-white */}
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            The Silicon <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x">
              Sheet.
            </span>
          </h1>
          
          {/* Description */}
          {/* FIX 4: Updated secondary text for Light Mode visibility */}
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Your centralized command center for Data Structures & Algorithms. 
            Track progress, spot memory leaks, and master the patterns.
          </p>
        </div>

        {/* --- THE WORKSPACE --- */}
        <div className="px-4 pb-32 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <ProblemTable data={problems} solvedData={solvedData} />
        </div>
      </div>
      
      {/* Panic Button */}
      <MockInterviewModal allProblems={problems} solvedIds={solvedData.map(d => d.id)} />
    </AuroraBackground>
  );
}