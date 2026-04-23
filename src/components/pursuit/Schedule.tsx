import treeImg from "@/assets/tree-letter.png";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const days = [
  {
    day: "Day 01",
    date: "Sat / July 18",
    title: "Arrival & First Fire",
    items: [
      ["3:00 PM", "Check-in & cabin assignments"],
      ["5:30 PM", "Opening dinner"],
      ["7:30 PM", "Welcome session"],
      ["9:30 PM", "Bonfire & worship"],
    ],
  },
  {
    day: "Day 02",
    date: "Sun / July 19",
    title: "Stillness",
    items: [
      ["7:30 AM", "Quiet morning walk"],
      ["9:00 AM", "Breakfast"],
      ["10:30 AM", "Main Events"],
      ["2:00 PM", "Free afternoon / VOLLEYBALL!!!"],
      ["7:00 PM", "Din Din time get mcd"],
    ],
  },
  {
    day: "Day 03",
    date: "Mon / July 20",
    title: "League of Legends LAN party",
    items: [
      ["8:00 AM", "Breakfast"],
      ["9:30 AM", "League"],
      ["1:00 PM", "Lunch on the trail"],
      ["7:00 PM", "League of Legends"],
    ],
  },
  {
    day: "Day 04",
    date: "Tue / July 21",
    title: "Together",
    items: [
      ["9:00 AM", "Breakfast & worship"],
      ["11:00 AM", "Service project"],
      ["6:00 PM", "Closing feast"],
      ["9:00 PM", "Last fire"],
    ],
  },
  {
    day: "Day 05",
    date: "Wed / July 22",
    title: "Carry It Home",
    items: [
      ["8:00 AM", "Final breakfast"],
      ["9:30 AM", "Sending session"],
      ["11:00 AM", "Pack & depart"],
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="relative py-32 paper-texture">
      <div className="container">
        <StaggerReveal className="grid lg:grid-cols-12 gap-12 mb-16">
          <StaggerItem className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">03 — Schedule</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-ink">
              Five days, <br /><span className="italic">unhurried.</span>
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