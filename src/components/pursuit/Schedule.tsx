import treeImg from "@/assets/tree-letter.png";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const days = [
  {
    day: "Day 01",
    date: "Fri / September 4, 2026",
    title: "Arrival",
    items: [
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
    ],
  },
  {
    day: "Day 02",
    date: "Sat / September 5, 2026",
    title: "Day Two",
    items: [
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
    ],
  },
  {
    day: "Day 03",
    date: "Sun / September 6, 2026",
    title: "Day Three",
    items: [
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
    ],
  },
  {
    day: "Day 04",
    date: "Mon / September 7, 2026",
    title: "Closing Day",
    items: [
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
      ["TBA", "TBA"],
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="relative py-32 paper-texture">
      <div className="container">
        <StaggerReveal className="grid lg:grid-cols-12 gap-12 mb-16">
          <StaggerItem className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">03 — Schedule / Shuttle Bus Info</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-ink">
              Four days, <br /><span className="italic">unhurried.</span>
            </h2>
          </StaggerItem>
          <StaggerItem className="lg:col-span-4 lg:col-start-9">
            <div className="relative shadow-paper rotate-[2deg]">
              <img src={treeImg} alt="Letter under a tree" className="w-full h-64 object-cover" />
              <div className="absolute -top-3 left-8 w-20 h-5 bg-highlight/40 -rotate-3" />
            </div>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="space-y-px border-t border-ink/15">
          {days.map((d) => (
            <StaggerItem key={d.day}>
              <details className="group border-b border-ink/15 transition-colors open:bg-paper-edge/30">
                <summary className="flex items-baseline gap-6 py-8 cursor-pointer list-none">
                  <span className="font-serif-display italic text-muted-foreground w-20 text-sm uppercase tracking-wider">
                    {d.day}
                  </span>
                  <h3 className="font-serif-display text-3xl md:text-5xl text-ink flex-1">
                    {d.title}
                  </h3>
                  <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {d.date}
                  </span>
                  <span className="font-serif-display text-3xl text-ink/40 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-8 pl-0 md:pl-26">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl ml-0 md:ml-[6.5rem]">
                    {d.items.map(([time, label]) => (
                      <div key={time} className="flex items-baseline gap-4 py-2 border-b border-dashed border-ink/15">
                        <span className="font-mono text-xs text-muted-foreground w-16">{time}</span>
                        <span className="text-ink/85">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default Schedule;