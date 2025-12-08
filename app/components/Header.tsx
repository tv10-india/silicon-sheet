"use client";

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Youtube, LogIn, LogOut, LayoutGrid, Radio, Loader2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LEFT: Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          
          {/* LOGO IMAGE REPLACEMENT */}
          <div className="relative w-8 h-8">
             <Image 
               src="/logo.png"   // <--- Make sure your file is named logo.png in 'public' folder
               alt="Silicon Stories Logo"
               fill
               className="object-contain" // Keeps aspect ratio perfect
             />
          </div>

          <span className="font-bold text-slate-900 dark:text-slate-100 hidden sm:block tracking-tight">
            Silicon Stories
          </span>
        </Link>

        {/* CENTER: Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10">
          <Link 
            href="/sheet" 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              pathname === "/sheet" 
                ? "bg-white dark:bg-white/10 text-black dark:text-white shadow-sm border border-slate-200 dark:border-white/5" 
                : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-slate-200"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Sheet</span>
          </Link>
          <Link 
            href="/guidance" 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              pathname === "/guidance" 
                ? "bg-white dark:bg-white/10 text-black dark:text-white shadow-sm border border-slate-200 dark:border-white/5" 
                : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-slate-200"
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>Guidance</span>
          </Link>
        </nav>

        {/* RIGHT: User Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />  

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 hidden sm:block"></div>
          
          <a 
            href="https://youtube.com/@SiliconStories" 
            target="_blank" 
            className="text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors hidden sm:block"
          >
            <Youtube className="w-5 h-5" />
          </a>

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 hidden sm:block"></div>

          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
          ) : session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-700 dark:text-slate-300 hidden md:block">
                {session.user?.name?.split(" ")[0]}
              </span>
              <img 
                src={session.user?.image || "https://github.com/shadcn.png"} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" 
              />
              <button 
                onClick={() => signOut()}
                className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => window.location.href = "/login"}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full border border-slate-200 dark:border-white/10 transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}