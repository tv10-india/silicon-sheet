"use client";

import { signIn } from "next-auth/react";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { Github, Chrome, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- Import Image
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <AuroraBackground className="h-full min-h-screen w-full flex items-center justify-center">
      <div className="relative z-10 w-full max-w-md px-4">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="absolute -top-16 left-4 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* The Card */}
        <div className={cn(
          "p-8 rounded-3xl backdrop-blur-xl shadow-2xl transition-colors",
          "bg-white/60 border border-slate-200",
          "dark:bg-slate-900/50 dark:border-white/10"
        )}>
          
          <div className="text-center mb-8">
            
            {/* LOGO REPLACEMENT (Larger Size) */}
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image 
                src="/logo.png" 
                alt="Silicon Stories Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Login to track your progress and sync your sheet across devices.
            </p>
          </div>

          <div className="space-y-4">
            {/* Google Button */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/sheet" })}
              className={cn(
                "w-full flex items-center justify-center gap-3 font-bold py-3.5 rounded-xl transition-all",
                "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-md",
                "dark:bg-white dark:text-black dark:hover:bg-slate-200"
              )}
            >
              <Chrome className="w-5 h-5 text-blue-600" /> 
              <span>Continue with Google</span>
            </button>

            {/* GitHub Button */}
            <button
              onClick={() => signIn("github", { callbackUrl: "/sheet" })}
              className={cn(
                "w-full flex items-center justify-center gap-3 font-bold py-3.5 rounded-xl transition-all border",
                "bg-slate-900 text-white border-transparent hover:bg-slate-800 hover:shadow-lg",
                "dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700"
              )}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 dark:text-slate-500 mt-8">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </p>

        </div>
      </div>
    </AuroraBackground>
  );
}