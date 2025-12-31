"use client";

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { 
  Sparkles, 
  GraduationCap, 
  LayoutGrid, 
  Youtube, 
  LogOut, 
  LogIn, 
  Loader2 
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* --- LEFT: BRAND (Restored Logo Image) --- */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          
          <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
             <Image 
               src="/logo.png" 
               alt="Silicon Stories Logo"
               fill
               className="object-contain"
             />
          </div>

          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
            Silicon Stories
          </span>
        </Link>

        {/* --- CENTER: NAVIGATION (3 TABS) --- */}
        <nav className="flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md">
          
          {/* 1. ACADEMY */}
          <Link 
            href="/academy" 
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              pathname === "/academy" 
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="hidden md:inline">Academy</span>
          </Link>

          {/* 2. THE SHEET */}
          <Link 
            href="/sheet" 
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              pathname === "/" 
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Sheet</span>
          </Link>

          {/* 3. GUIDANCE */}
          <Link 
            href="/guidance" 
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              pathname === "/guidance" 
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="hidden md:inline">Guidance</span>
          </Link>

        </nav>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="flex items-center gap-3 md:gap-4">
          
          <ThemeToggle />

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 hidden sm:block"></div>

          <a 
            href="https://youtube.com/@SiliconStories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors hidden sm:block"
          >
            <Youtube className="w-5 h-5" />
          </a>

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 hidden sm:block"></div>

          {/* AUTH STATE */}
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
          ) : session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 hidden lg:block">
                {session.user?.name?.split(" ")[0]}
              </span>
              <img 
                src={session.user?.image || "https://github.com/shadcn.png"} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm" 
              />
              <button 
                onClick={() => signOut()}
                className="text-slate-400 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:opacity-90 transition-all shadow-md"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}