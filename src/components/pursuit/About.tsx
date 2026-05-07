import kidsImg from "@/assets/kids-running.png";
import flowerImg from "@/assets/flower-figure.png";
import tornImg from "@/assets/torn-paper.png";
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
        setCount(0);
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
              At Pursuit Camp, our mission is to help youth (age 12 – 17) and young adults (age 18 – 28) passionately pursue a deeper relationship with Jesus Christ. We provide an immersive and transformative experience that inspires participants to seek out and connect with God in new and meaningful ways. Through dynamic worship, engaging activities, and authentic community, we seek to create a space where individuals can explore their faith, ask tough questions, and experience the unconditional love of Christ. Our goal is to equip each person with the tools they need to pursue a life of purpose and fulfillment, rooted in their relationship with God. We believe that everyone is on a unique journey in their pursuit of Christ. Whether you are a lifelong Christian or just beginning to explore your faith, our camp welcomes you with open arms. Our hope is that each participant will leave with a renewed passion for pursuing Christ, a deeper understanding of themselves, and a supportive community to walk alongside them on their journey.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-ink/75 leading-relaxed">
              Hosted by the Young People's Ministry (Torch) of Word International Ministries of Ontario.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/15">
              <StatItem n={4} l="Days" />
              <StatItem n={100} l="Youth" suffix="+" />
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
    </section>
  );
};

export default About;