import heroImg from "@/assets/hero.jpg";
import heroMobileImg from "@/assets/heromobile.jpg";
import { useState } from "react";
import { VerseGuess } from "@/components/pursuit/VerseGuess";

const Hero = () => {
  const [verseOpen, setVerseOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <section id="top" className="relative min-h-[100svh] md:min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobileImg} />
          <img src={heroImg} alt="Pursuit camp" className="w-full h-full object-cover object-center" />
        </picture>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper/60 to-transparent" />
      </div>

      {/* Top corner labels */}
      <div className="relative z-10 container pt-24 flex justify-between items-start text-xs uppercase tracking-[0.25em] text-ink/70">
        {/* Verse Guess — left */}
        <div className="relative">
          <span
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 md:w-8 md:h-4 bg-orange-200/80 backdrop-blur-sm rotate-[-1deg] shadow-sm"
            style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
          />
          <button
            onClick={() => setGameOpen(true)}
            className="relative uppercase tracking-[0.25em] hover:text-paper transition-all cursor-pointer px-3 py-1.5 md:px-4 md:py-2 bg-ink/80 shadow-soft rotate-[-1deg] hover:rotate-0 text-[8px] md:text-xs whitespace-nowrap font-bold"
style={{ color: "#FF6633", clipPath: "polygon(2% 8%, 98% 0%, 100% 92%, 96% 100%, 4% 96%, 0% 12%)" }}
          >
            ✦ Verse Guess
          </button>
        </div>

        {/* Colossians — right */}
        <div className="relative">
          <span
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 md:w-8 md:h-4 bg-orange-200/80 backdrop-blur-sm rotate-[-1deg] shadow-sm"
            style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
          />
          <button
            onClick={() => setVerseOpen(true)}
            className="relative uppercase tracking-[0.25em] text-ink/80 hover:text-ink transition-all cursor-pointer px-3 py-1.5 md:px-4 md:py-2 bg-paper/90 shadow-soft rotate-[1.5deg] hover:rotate-0 text-[8px] md:text-xs whitespace-nowrap"
          >
            Colossians 2:6-7
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
            <p className="font-serif-italic text-2xl md:text-3xl text-ink leading-relaxed">
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

      {/* Center content — shifted down */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center min-h-[80svh] pb-24 mt-24 md:mt-16">

        <p className="font-serif-italic italic text-2xl md:text-3xl rotate-[-2deg] drop-shadow-sm" style={{ color: "#FF6633" }}>
          Breaking Ground
        </p>

        <div className="relative inline-block mt-2">
          <h1 className="relative font-serif-italic text-7xl md:text-[10rem] leading-[0.9] drop-shadow-sm" style={{ color: "#25362C" }}>
            Pursuit
          </h1>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] mt-4" style={{ color: "#25362C" }}>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="h-px w-6 md:w-10 bg-ink/40" />
            <span className="text-center leading-relaxed">
              Pearce Williams — 8009 Iona Rd, Fingal, ON
            </span>
            <span className="h-px w-6 md:w-10 bg-ink/40" />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="h-px w-6 md:w-10 bg-ink/40" />
            <span>September 4 – 7, 2026</span>
            <span className="h-px w-6 md:w-10 bg-ink/40" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a
            href="https://subsplash.com/u/-D56TVS/forms/d/fb75e7b5-c38f-4c94-83f8-a51b3d8d3f6b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 text-paper text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-colors"
            style={{ backgroundColor: "#25362C" }}
          >
            Save your spot
          </a>
          <a
            href="#about"
            className="px-7 py-3 text-xs uppercase tracking-[0.25em] hover:opacity-80 transition-colors"
            style={{ border: "1px solid #25362C", color: "#25362C" }}
          >
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
                  <span style={{ color: "#FF6633" }}>✦</span>
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