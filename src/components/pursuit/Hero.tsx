import heroImg from "@/assets/heroppl.jpg";
import { useState } from "react";
import { VerseGuess } from "@/components/pursuit/VerseGuess";

const Hero = () => {
  const [verseOpen, setVerseOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Meadow with door illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-paper/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/0 via-transparent to-paper" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Top corner labels */}
      <div className="relative z-10 container pt-24 flex justify-between text-xs uppercase tracking-[0.25em] text-ink/70">
        <span>Vol. 07 — Spring</span>
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => setVerseOpen(true)}
            className="relative uppercase tracking-[0.25em] text-ink/80 hover:text-ink transition-all cursor-pointer px-3 py-1.5 md:px-4 md:py-2 bg-paper/90 shadow-soft rotate-[1.5deg] hover:rotate-0 text-[8px] md:text-xs whitespace-nowrap"
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 md:w-8 md:h-4 bg-orange-200/80 backdrop-blur-sm rotate-[-1deg] shadow-sm"
              style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
            />
            Colossians 2:6-7
          </button>
          <button
            onClick={() => setGameOpen(true)}
            className="relative uppercase tracking-[0.25em] text-highlight hover:text-paper transition-all cursor-pointer px-3 py-1.5 md:px-4 md:py-2 bg-ink/80 shadow-soft rotate-[-1deg] hover:rotate-0 text-[8px] md:text-xs whitespace-nowrap font-bold"
            style={{ clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 96% 100%, 4% 96%, 0% 12%)" }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 md:w-8 md:h-4 bg-orange-200/80 backdrop-blur-sm rotate-[-1deg] shadow-sm"
              style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
            />
            ✦ Verse Guess
          </button>
        </div>
      </div>

      {/* Verse Modal */}
      {verseOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setVerseOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />
          <div
            className="relative max-w-md w-full bg-paper shadow-paper p-8 md:p-10 rotate-[-1deg]"
            style={{ clipPath: "polygon(1% 2%, 99% 0%, 100% 97%, 98% 100%, 1% 99%, 0% 3%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50 mb-6">
              Colossians 2:6-7
            </p>
            <p className="font-serif-display italic text-2xl md:text-3xl text-ink leading-relaxed">
              "So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness."
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-ink/40">NIV</span>
              <button
                onClick={() => setVerseOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verse Guess Game Modal */}
      {gameOpen && <VerseGuess onClose={() => setGameOpen(false)} />}

      {/* Center content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center min-h-[80svh] -mt-4 md:mt-0">
        <p className="font-hand text-2xl md:text-3xl text-highlight rotate-[-2deg]">
          Breaking Grounds —
        </p>
        <div className="relative inline-block">
          <span className="absolute inset-0 bg-white/10 blur-2xl scale-110 rounded-full" />
          
          <h1 className="relative font-serif-display italic text-7xl md:text-[10rem] leading-[0.9] text-ink">
            Pursuit
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/80">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-ink/40" />
            <span className="relative font-bold px-1">
            <span className="absolute inset-0 bg-white/10 blur-md scale-110 rounded-md" />
            <span className="relative">
              Pearce Williams — 8009 Iona Rd, Fingal, ON
            </span>
          </span>
            <span className="h-px w-10 bg-ink/40" />
          </div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-ink/40" />
            <span className="font-bold">September 4 – 7, 2026</span>
            <span className="h-px w-10 bg-ink/40" />
          </div>
        </div>
        <div className="bg-paper/18 backdrop-blur-[2px] px-0 py-12 rounded-sm">
          <p className="max-w-xl font-serif-display text-lg md:text-xl text-ink/80 leading-relaxed mt-4">
            More than just a youth camp - it’s a place where young people can unplug, connect, and grow closer to Jesus. Through worship, outdoor adventures, late-night conversations, and authentic community, we create lasting friendships and deepen our faith together.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="#register" className="px-7 py-3 bg-ink text-paper text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors">
            Save your spot
          </a>
          <a href="#about" className="px-7 py-3 border border-ink/30 text-ink text-xs uppercase tracking-[0.25em] hover:bg-ink/5 transition-colors">
            Learn more
          </a>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-6 left-0 right-0 z-10 ticker-mask overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 font-serif-display italic text-ink/60 text-sm">
              {["Press in", "Run the race", "Be still", "Look up", "Together", "Pursue", "Press in", "Run the race", "Be still", "Look up", "Together", "Pursue"].map((w, j) => (
                <span key={j} className="flex items-center gap-8">
                  {w}
                  <span className="text-highlight">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;