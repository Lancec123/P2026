import pathImg from "@/assets/right-path.png";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const roles = [
  {
    title: " Group Leader",
    desc: "Be the group leader, the league team captain, the one to take the nexus down!!!!!",
    commit: "Full retreat",
  },
  {
    title: "Truck Driver",
    desc: "Only for Lance and Hieu bc we are the tuffest truck drivers.",
    commit: "Full retreat",
  },
  {
    title: "Kitchen Crew",
    desc: "Make like super tuff food like little ceasars... but did it hear her... see her...",
    commit: "Day shifts",
  },
  {
    title: "Technical Team",
    desc: "Be the smart fellas that do tech stuff. LIGTHS!!!!",
    commit: "Setup + teardown",
  },
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="relative py-32 bg-grass-deep text-paper overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-25">
        <img src={pathImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-grass-deep/60" />
      </div>
      <div className="relative container">
        <StaggerReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.3em] text-paper/60 mb-4">02 — Get Involved</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] max-w-2xl">
              Volunteers make <span className="italic">Pursuit</span> happen.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-hand text-3xl text-highlight rotate-[-2deg] md:max-w-xs">
              we couldn't do this without you :)
            </p>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <StaggerItem key={r.title}>
              <div className="group relative p-8 border border-paper/20 hover:border-paper/50 transition-colors backdrop-blur-sm bg-paper/5 h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif-display italic text-paper/40 text-2xl">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-paper/60 border border-paper/30 px-3 py-1">
                    {r.commit}
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl mb-3">{r.title}</h3>
                <p className="text-paper/75 leading-relaxed">{r.desc}</p>
                <a href="#register" className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.2em] text-paper/90 group-hover:text-highlight transition-colors">
                  Apply <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default GetInvolved;