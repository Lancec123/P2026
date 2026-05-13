import pathImg from "@/assets/right-path.png";
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
                <a
                  href={
                    r.title === "Become a Torch Ambassador"
                      ? "/tap"
                      : "#register"
                  }
                  className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.2em] text-paper/90 group-hover:text-highlight transition-colors"
                >
                  {r.title === "Pray"
                    ? "Submit Prayer Request"
                    : "Apply"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
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