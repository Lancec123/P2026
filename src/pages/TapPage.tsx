import { Link } from "react-router-dom";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImg from "@/assets/hero-meadow.png";

const steps = [
  "Go to your bank app or site (e.g. EasyWeb for TD Bank)",
  "Select Interac e-Transfer then click Send Money",
  "Select the account you wish to send from, then enter the amount",
  "For recipient, input: finance@winontario.org",
  'In the note field, input: "TAP – Ambassador Name"',
  "Send",
];

const faqs = [
  {
    q: "What is the Torch Ambassador Project?",
    a: "A peer-to-peer fundraising initiative designed to engage youth and young adults in gathering donations for camp activities through community events and outreach.",
  },
  {
    q: "How do I get involved?",
    a: "Sign up through the registration link and begin your fundraising. Whether it's a bake sale, car wash, or creative event — every effort counts.",
  },
  {
    q: "Why participate?",
    a: "You develop leadership skills, grow community connections, and contribute directly to impactful camp experiences while sharing the love of Christ.",
  },
  {
    q: "I have other questions — who do I ask?",
    a: "Reach out to us at finance@winontario.org or follow @torchministry on Instagram for updates.",
  },
];

const tickerWords = ["Give", "Serve", "Pray", "Lead", "Connect", "Pursue", "Ambassador", "Torch", "TAP", "2026"];

const useCounter = (target: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) { setCount(0); return; }
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const StatCounter = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  const count = useCounter(value, 1500, inView);
  return (
    <div ref={ref}>
      <div className="font-serif-display text-5xl md:text-6xl text-grass-deep">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] mt-1 text-muted-foreground">{label}</div>
    </div>
  );
};

const FaqRow = ({ f, i }: { f: typeof faqs[0]; i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <details className="group border-b border-ink/15 py-6">
        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
          <h3 className="font-serif-display text-xl md:text-2xl text-ink pr-4">{f.q}</h3>
          <span className="font-serif-display text-2xl text-ink/30 group-open:rotate-45 transition-transform shrink-0">+</span>
        </summary>
        <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl">{f.a}</p>
      </details>
    </motion.div>
  );
};

const TapPage = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      {/* Fixed back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-ink text-paper text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors shadow-soft"
      >
        ← Pursuit
      </Link>

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-grass-deep">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-grass-deep/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-grass-deep" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-hand text-highlight text-2xl md:text-3xl rotate-[-2deg] mb-6 inline-block"
          >
            Torch Ambassador Project —
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-display italic text-[8rem] md:text-[16rem] leading-[0.85] text-paper mb-8"
          >
            TAP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto font-serif-display text-lg md:text-xl text-paper/70 leading-relaxed mb-10"
          >
            A peer-to-peer fundraising initiative empowering youth to support camp through creative community engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-highlight text-ink text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-opacity font-bold">
              Become an Ambassador
            </button>
            <a
              href="#how-to-donate"
              className="px-8 py-4 border border-paper/30 text-paper/70 text-xs uppercase tracking-[0.3em] hover:border-paper hover:text-paper transition-colors"
            >
              How to Donate
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/30"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-paper/20"
          />
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="bg-highlight overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {tickerWords.map((w, j) => (
                <span key={j} className="flex items-center gap-8 text-ink text-xs uppercase tracking-[0.3em] font-bold">
                  {w}
                  <span className="text-ink/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About + Stats */}
      <section className="relative py-32 paper-texture">
        <div className="container grid lg:grid-cols-12 gap-12">
          <StaggerReveal className="lg:col-span-3">
            <StaggerItem>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — About</p>
              <div className="font-hand text-highlight text-3xl rotate-[-3deg]">what is TAP?</div>
            </StaggerItem>
          </StaggerReveal>
          <StaggerReveal className="lg:col-span-7 lg:col-start-5 space-y-6">
            <StaggerItem>
              <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] text-ink">
                Make a meaningful impact <span className="italic text-grass-deep">beyond</span> your church community.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-ink/70 leading-relaxed">
                Participants are encouraged to reach out to their communities through bake sales, donation-based events, and creative outreach. Every dollar raised goes directly toward supporting Torch camp activities.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-ink/70 leading-relaxed">
                Beyond fundraising, TAP builds leadership skills, meaningful connections, and gives you the opportunity to share the love of Jesus Christ with your community.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        {/* Stats row */}
        <div className="container mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
            {[
              { value: 4, suffix: "", label: "Days at Camp" },
              { value: 100, suffix: "+", label: "Youth" },
              { value: 2026, suffix: "", label: "Pursuit Camp" },
              { value: 7, suffix: "th", label: "Annual Retreat" },
            ].map((s) => (
              <div key={s.label} className="bg-paper p-8 md:p-10">
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section id="how-to-donate" className="relative py-32 bg-grass-deep text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover mix-blend-luminosity" />
          <div className="absolute inset-0 bg-grass-deep/70" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-highlight/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative container">
          <StaggerReveal className="mb-16">
            <StaggerItem>
              <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-4">02 — Donate</p>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-paper">
                Two ways <br /><span className="italic text-highlight">to give.</span>
              </h2>
            </StaggerItem>
          </StaggerReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <StaggerReveal>
              <StaggerItem>
                <div className="border border-paper/15 p-8 md:p-10 h-full space-y-6 bg-grass-deep/50 backdrop-blur-sm">
                  <div>
                    <p className="font-hand text-highlight text-2xl mb-3">option one —</p>
                    <h3 className="font-serif-display text-3xl text-paper">Interac e-Transfer</h3>
                  </div>
                  <div className="space-y-4">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start border-b border-dashed border-paper/15 pb-4">
                        <span className="font-serif-display italic text-paper/25 text-xl shrink-0 w-6">{i + 1}</span>
                        <p className="text-paper/70 leading-relaxed">
                          {i === 3 ? (
                            <>For recipient, input: <a href="mailto:finance@winontario.org" className="text-highlight underline underline-offset-2 hover:opacity-80 transition-opacity">finance@winontario.org</a></>
                          ) : i === 4 ? (
                            <>In the note field, input: <span className="font-mono bg-paper/10 px-2 py-0.5 text-paper font-bold">TAP – Ambassador Name</span></>
                          ) : step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerReveal>

            <StaggerReveal>
              <StaggerItem>
                <div className="border border-paper/15 p-8 md:p-10 h-full flex flex-col justify-between space-y-8 bg-grass-deep/50 backdrop-blur-sm">
                  <div>
                    <p className="font-hand text-highlight text-2xl mb-3">option two —</p>
                    <h3 className="font-serif-display text-3xl text-paper">Give Online</h3>
                    <p className="text-paper/70 leading-relaxed mt-4">
                      Select "Pursuit Camp – General" and choose the Torch Ambassador you are supporting to give directly through Subsplash.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <a
                      href="https://subsplash.com/+jzgj/give"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-8 py-4 bg-highlight text-ink text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-opacity font-bold"
                    >
                      Give via Subsplash →
                    </a>
                    <p className="text-xs text-paper/30 text-center uppercase tracking-[0.15em]">Secure online giving</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="relative py-32 bg-paper-edge/40">
        <div className="container">
          <StaggerReveal className="mb-16">
            <StaggerItem>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">03 — Get Involved</p>
              <h2 className="font-serif-display text-5xl md:text-6xl leading-[1] text-ink">
                Other ways <br /><span className="italic text-grass-deep">to show up.</span>
              </h2>
            </StaggerItem>
          </StaggerReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <StaggerReveal>
              <StaggerItem>
                <div className="border border-ink/15 p-8 md:p-10 h-full space-y-4">
                  <h3 className="font-serif-display text-3xl text-ink">Volunteer</h3>
                  <p className="text-ink/70 leading-relaxed">Serve at camp and help young people grow in their faith. Be present, be consistent, make a difference.</p>
                  <p className="text-sm text-muted-foreground">Fee: $30.00</p>
                  <button className="px-6 py-3 bg-grass-deep text-paper text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                    Volunteer →
                  </button>
                </div>
              </StaggerItem>
            </StaggerReveal>

            <StaggerReveal>
              <StaggerItem>
                <div className="border border-ink/15 p-8 md:p-10 h-full space-y-4">
                  <h3 className="font-serif-display text-3xl text-ink">Pray</h3>
                  <p className="text-ink/70 leading-relaxed">Your prayers carry weight. Join our list of prayer warriors and intercede as camp draws near.</p>
                  <a
                    href="https://mailchi.mp/b7d2b1d534cb/torch-ministry-prayer-warriors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-grass-deep text-paper text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
                  >
                    Sign Up →
                  </a>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 paper-texture">
        <div className="container max-w-3xl">
          <StaggerReveal className="mb-16">
            <StaggerItem>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">04 — FAQ</p>
              <h2 className="font-serif-display text-5xl md:text-6xl leading-[1] text-ink">
                Questions <br /><span className="italic">answered.</span>
              </h2>
            </StaggerItem>
          </StaggerReveal>
          <div className="border-t border-ink/15">
            {faqs.map((f, i) => (
              <FaqRow key={i} f={f} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-grass-deep text-paper">
        <div className="container py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="font-serif-display italic text-3xl text-paper">TAP</div>
          <div className="text-paper/40 text-xs uppercase tracking-[0.2em]">
            @torchministry · @wintorchministry
          </div>
          <Link
            to="/"
            className="text-paper/50 hover:text-paper text-xs uppercase tracking-[0.2em] transition-colors"
          >
            ← Back to Pursuit
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TapPage;