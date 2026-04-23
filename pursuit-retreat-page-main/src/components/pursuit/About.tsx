import kidsImg from "@/assets/kids-running.png";
import flowerImg from "@/assets/flower-figure.png";
import tornImg from "@/assets/torn-paper.png";

const About = () => {
  return (
    <section id="about" className="relative py-32 paper-texture">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: section label */}
        <div className="lg:col-span-3 lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — About</p>
          <div className="font-hand text-highlight text-3xl rotate-[-3deg]">
            why we go
          </div>
        </div>

        {/* Middle: copy */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="font-serif-display text-5xl md:text-6xl leading-[1.05] text-ink">
            God’s truth, love, mercy, and presence call us out
            of darkness, root us in Him, and lead us into purpose.
          </h2>
          <p className="text-lg text-ink/75 leading-relaxed">
            This concept is rooted in the idea that, as humans, we are drawn to the light.
            “Breaking Ground” should be represented in a way that is not overly literal,
            allowing it to take many forms, since the experience looks different for
            everyone. These images and icons symbolize the light we seek, reflecting
            God’s truth, love, and presence as He leads us into a life of true purpose.
          </p>
          <p className="text-lg text-ink/75 leading-relaxed">
            Expect bonfires that go too late, mornings quieter than you remember,
            and friendships that show up when you weren’t looking.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/15">
            {[
              { n: "5", l: "Days" },
              { n: "120+", l: "Youth" },
              { n: "01", l: "Pursuit" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif-display text-4xl text-ink">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: collaged images */}
        <div className="lg:col-span-4 relative h-[600px]">
          <div className="absolute top-0 right-0 w-64 h-80 shadow-paper rotate-[3deg] animate-float">
            <img src={kidsImg} alt="Kids running through grass" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-12 left-0 w-52 h-64 shadow-paper rotate-[-4deg]">
            <img src={flowerImg} alt="Collage" className="w-full h-full object-cover bg-paper" />
          </div>
          <div className="absolute bottom-0 right-12 w-32 h-40 shadow-paper rotate-[6deg]">
            <img src={tornImg} alt="Torn paper" className="w-full h-full object-cover" />
          </div>
          {/* Tape */}
          <div className="absolute top-[-8px] right-20 w-16 h-5 bg-highlight/30 rotate-[-8deg]" />
        </div>
      </div>
    </section>
  );
};

export default About;
