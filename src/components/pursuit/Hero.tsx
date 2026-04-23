import heroImg from "@/assets/hero-meadow.png";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Meadow with door illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Top corner labels */}
      <div className="relative z-10 container pt-24 flex justify-between text-xs uppercase tracking-[0.25em] text-ink/70">
        <span>Vol. 07 — Spring</span>
        <span>Colossians 2:6-7</span>
      </div>
 
      {/* Center content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center min-h-[80svh] -mt-4 md:mt-0">
        <p className="font-hand text-2xl md:text-3xl text-highlight rotate-[-2deg]">
          Breaking Grounds —
        </p>
        <h1 className="font-serif-display italic text-7xl md:text-[10rem] leading-[0.9] text-ink">
          Pursuit
        </h1>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-ink/80">
          <span className="h-px w-10 bg-ink/40" />
          <span>April 18 — 18, 2026</span>
          <span className="h-px w-10 bg-ink/40" />
        </div>
        <p className="max-w-xl font-serif-display text-lg md:text-xl text-ink/80 leading-relaxed mt-4">
          We play in the grass and play volleyball, and we play league of legends and watch tuff movies and eat and ya idk
        </p>

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
