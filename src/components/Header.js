'use client';

import { Linkedin, X } from 'lucide-react';

export function Header() {
  return (
    // New "glassmorphism" panel style for the header
    <div className="bg-black/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-1">
          Tokenization
        </h1>
        <p className="text-sm text-slate-400 max-w-md">
          An interactive tool to visualize how text is broken down into tokens which is the fundamental building blocks for AI language models.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://x.com/vaidikjais" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <X size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vaidik-jaiswal/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
}