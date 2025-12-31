import Link from "next/link";
import Image from "next/image"; // <--- Import Image
import { Github, Linkedin, Instagram, Send, Bug, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-xl mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* COLUMN 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO REPLACEMENT */}
              <div className="relative w-8 h-8">
                <Image 
                  src="/logo.png" 
                  alt="Silicon Stories Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-xl tracking-tight">
                Silicon Stories
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              The open-source curriculum to crack your dream tech role. Built by engineers, for engineers.
            </p>
          </div>

          {/* COLUMN 2: Community */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/GetHired01" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Send className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Telegram (Job Updates)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@Silicon_Stories_Official" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">▶</div>
                  <span>YouTube Channel</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Connect */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/vedant-narayan" target="_blank" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/v.narayaan/" target="_blank" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="mailto:vedantnarayan01@gmail.com" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2024 Silicon Stories. 100% Free & Open Source.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:your@email.com?subject=Bug Report - Silicon Sheet" 
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-red-500 transition-colors"
            >
              <Bug className="w-3 h-3" />
              Report a Bug
            </a>
            
            <a href="https://github.com/yourusername/silicon-sheet" target="_blank" className="text-slate-500 hover:text-black dark:hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}