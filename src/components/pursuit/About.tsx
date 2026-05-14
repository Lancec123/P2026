import kidsImg from "@/assets/campfire.jpg";
import flowerImg from "@/assets/praise2.jpg";
import tornImg from "@/assets/outsidegravel.jpg";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { useEffect, useRef, useState } from "react";

const useCounter = (target: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
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

const StatItem = ({ n, l, suffix = "" }: { n: number; l: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(n, 1500, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="font-serif-display text-4xl text-ink">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-32 paper-texture">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: section label */}
        <StaggerReveal className="lg:col-span-3 lg:sticky lg:top-28">
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — About</p>
          </StaggerItem>
          <StaggerItem>
            <div className="font-hand text-highlight text-3xl rotate-[-3deg]">
              why we go
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Middle: copy */}
        <StaggerReveal className="lg:col-span-5 space-y-8">
          <StaggerItem>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-[1.05] text-ink">
              Experience Jesus' love in a whole new way
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-ink/75 leading-relaxed">
              At Pursuit Camp, our mission is to help youth (age 12 – 17) and young adults (age 18 – 22) passionately pursue a deeper relationship with Jesus Christ. We provide an immersive and transformative experience that inspires participants to seek out and connect with God in new and meaningful ways. Through dynamic worship, engaging activities, and authentic community, we seek to create a space where individuals can explore their faith, ask tough questions, and experience the unconditional love of Christ. Our goal is to equip each person with the tools they need to pursue a life of purpose and fulfillment, rooted in their relationship with God. We believe that everyone is on a unique journey in their pursuit of Christ. Whether you are a lifelong Christian or just beginning to explore your faith, our camp welcomes you with open arms. Our hope is that each participant will leave with a passion for pursuing Christ, a deeper understanding of themselves, and a supportive community to walk alongside them on their journey.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-ink/75 leading-relaxed">
              Hosted by the Young People's Ministry (Torch) of{" "}
              <a
                href="https://winontario.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-highlight transition-colors"
              >
                Word International Ministries of Ontario
              </a>
              .
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/15">
              <StatItem n={4} l="Days" />
              <StatItem n={100} l="Young People" suffix="+" />
              <StatItem n={1} l="Pursuit" suffix="" />
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Right: collaged images */}
        <StaggerReveal className="lg:col-span-4 relative h-[600px]">
          <StaggerItem className="absolute top-0 right-0 w-64 h-80">
            <div className="w-full h-full shadow-paper rotate-[3deg] animate-float">
              <img src={kidsImg} alt="Kids running through grass" className="w-full h-full object-cover" />
            </div>
          </StaggerItem>
          <StaggerItem className="absolute bottom-12 left-0 w-52 h-64">
            <div className="w-full h-full shadow-paper rotate-[-4deg]">
              <img src={flowerImg} alt="Collage" className="w-full h-full object-cover bg-paper" />
            </div>
          </StaggerItem>
          <StaggerItem className="absolute bottom-0 right-12 w-32 h-40">
            <div className="w-full h-full shadow-paper rotate-[6deg]">
              <img src={tornImg} alt="Torn paper" className="w-full h-full object-cover" />
            </div>
          </StaggerItem>
          <StaggerItem className="absolute top-[-8px] right-20 w-16 h-5">
            <div className="w-full h-full bg-highlight/30 rotate-[-8deg]" />
          </StaggerItem>
        </StaggerReveal>
      </div>

      {/* Camp Fees */}
      <div className="container mt-24">
        <StaggerReveal>
          <StaggerItem>
            <div className="border-t border-ink/15 pt-16">
              <div className="grid lg:grid-cols-12 gap-12">

                {/* Label */}
                <div className="lg:col-span-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-ink font-bold mb-4">Registration</p>
                  <div className="font-hand text-highlight text-5xl rotate-[-2deg] mb-6">camp fees</div>
                  <div className="bg-grass-deep text-paper p-6 shadow-paper rotate-[-1deg] max-w-[200px]">
                    <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-2">Cost per person</p>
                    <p className="font-serif-display italic text-6xl text-paper">$90</p>
                    <p className="text-xs text-paper/50 mt-2 uppercase tracking-[0.15em]">All-inclusive</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 lg:col-start-5 space-y-8">
                  <p className="text-lg text-ink/75 leading-relaxed border-l-2 border-highlight pl-4">
                    Payment will be collected via Interac e-Transfer. Please follow the steps below to send your payment.
                  </p>

                  {/* Steps */}
                  <div className="border border-ink/15 overflow-hidden">
                    {[
                      {
                        label: "Recipient",
                        content: (
                          <a
                            href="mailto:pursuit@winontario.org"
                            className="text-ink font-medium underline underline-offset-2 hover:text-highlight transition-colors break-all"
                          >
                            pursuit@winontario.org
                          </a>
                        ),
                      },
                      {
                        label: "Amount",
                        content: <span className="font-serif-display text-ink text-2xl">$90</span>,
                      },
                      {
                        label: "Message",
                        content: (
                          <span className="font-mono bg-ink/5 px-2 py-0.5 text-ink text-xs border border-ink/10 break-all">
                            PC26 + your first and last name
                          </span>
                        ),
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex items-stretch border-b border-ink/15 last:border-b-0">
                        <div className="bg-ink/5 px-3 py-4 flex items-center justify-center w-10 shrink-0">
                          <span className="font-serif-display italic text-ink/40 text-lg">{i + 1}</span>
                        </div>
                        <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-2 flex-1 min-w-0">
                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-20 shrink-0">{step.label}</span>
                          <div className="text-ink/80 min-w-0 overflow-hidden">{step.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="relative">
                    <span
                      className="absolute -top-3 left-6 w-10 h-3 bg-orange-200/80 rotate-[-1deg] z-10"
                      style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
                    />
                    <div
                      className="bg-paper shadow-paper p-6 border border-ink/10"
                      style={{ clipPath: "polygon(1% 2%, 99% 0%, 100% 97%, 98% 100%, 1% 99%, 0% 3%)" }}
                    >
                      <p className="text-ink/70 leading-relaxed text-sm">
                        For parents or guardians paying on behalf of their child, please input your child's name in the message field.
                      </p>
                      <p className="text-ink/40 text-xs mt-3 font-mono tracking-wide">Example: PC26 John Doe</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-ink/15 pt-6">
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">Questions or issues with payment?</p>
                      <a
                        href="mailto:marjay.rigor@winontario.org"
                        className="font-serif-display italic text-xl md:text-2xl text-ink hover:text-highlight transition-colors break-all"
                      >
                        marjay.rigor@winontario.org →
                      </a>
                    </div>
                    <div className="shrink-0">
                      <span className="font-hand text-highlight text-xl rotate-[1deg] inline-block">we got you —</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default About;