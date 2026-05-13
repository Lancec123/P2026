import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const roles = [
  {
    title: "Volunteer",
    desc: "Have a heart to serve and a desire to help young people grow in their faith? Join our team of camp volunteers dedicated to make a difference in the lives of young people.",
    commit: "Volunteer Fee: $30.00",
  },
  {
    title: "Become a Torch Ambassador",
    desc: "Make a meaningful impact beyond your church community by engaging in various fundraising efforts to support our camp activities and achieve our goal of $10,000.",
    commit: "Sign Up",
  },
  {
    title: "Pray",
    desc: "Your prayers support our young people as they grow in faith and serve their communities. Join our email list of prayer warriors and intercede as prayer requests come through and camp draws near.",
    commit: "",
  },
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="relative py-32 paper-texture">
      <div className="container">
        <StaggerReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">05 — Get Involved</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] max-w-2xl text-ink">
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
              <div className="group relative p-8 border border-ink/15 hover:border-ink/40 transition-colors h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif-display italic text-ink/30 text-2xl">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-ink/20 px-3 py-1">
                    {r.commit}
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl text-ink mb-3">{r.title}</h3>
                <p className="text-ink/70 leading-relaxed">{r.desc}</p>
                <a
                  href={r.title === "Become a Torch Ambassador" ? "#" : "#register"}
                  onClick={(e) => {
                    if (r.title === "Become a Torch Ambassador") e.preventDefault();
                  }}
                  className={`inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.2em] transition-colors ${
                    r.title === "Become a Torch Ambassador"
                      ? "text-ink/30 hover:text-ink/30"
                      : "text-ink/70 group-hover:text-highlight"
                  }`}
                >
                  {r.title === "Pray"
                    ? "Submit Prayer Request"
                    : r.title === "Become a Torch Ambassador"
                    ? "Coming Soon!"
                    : "Apply"}
                  <span className={`transition-transform ${r.title === "Become a Torch Ambassador" ? "" : "group-hover:translate-x-1"}`}>
                    →
                  </span>
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