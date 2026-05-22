"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="max-w-md bg-arenaCard border border-zinc-900 rounded-2xl shadow-2xl p-8 space-y-6 md:p-10 transition-all transform animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
        
                <h1 className="text-7xl md:text-8xl font-sports font-black tracking-wider text-zinc-800 relative select-none animate-pulse duration-1000">
          404
          <span className="absolute inset-0 text-arenaOrange opacity-20 blur-sm">404</span>
        </h1>

                <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 text-arenaOrange rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce [animation-duration:2s]">
          ⚠️
        </div>

        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-sports font-black uppercase tracking-wide text-zinc-200">
            Page Not Found
          </h2>
          <p className="text-sm font-body text-zinc-500 leading-relaxed">
            Oops! The court or page you are looking for doesnt exist or has been moved to another location.
          </p>
        </div>

                <Link 
          href="/"
          className="inline-block w-full bg-arenaOrange hover:bg-orange-600 text-white font-body font-bold text-sm uppercase tracking-wider py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/10"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}