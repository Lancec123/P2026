import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const disclaimers = [
  {
    title: "Medical & Safety",
    body: "All students are required to submit a medical form prior to the retreat. Please disclose any allergies, medications, or conditions your child may have. A first aid kit will be on-site at all times and emergency services are accessible from the retreat location.",
  },
  {
    title: "Supervision",
    body: "Youth will be supervised by trained and vetted adult leaders at all times. Male and female leaders are present throughout the retreat. Cabins are gender-separated and leaders conduct regular check-ins.",
  },
  {
    title: "Photography & Media",
    body: "Photos and videos may be taken during the retreat for ministry use. If you do not consent to your child being photographed, please indicate this on the registration form and we will ensure they are excluded from all media.",
  },
  {
    title: "Transportation",
    body: "Drop-off and pick-up times will be communicated closer to the retreat date.",
  },
];

const Parents = () => {
  return (
    <section id="parents" className="relative py-32 paper-texture">
      <div className="container">
        <StaggerReveal className="grid lg:grid-cols-12 gap-12 mb-16">
          <StaggerItem className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">05 — For Parents</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-ink">
              What you <br /><span className="italic">need to know.</span>
            </h2>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="mb-12 flex items-center gap-6">
        <StaggerItem>
            <div
            className="relative px-4 py-2 bg-paper shadow-soft rotate-[-2deg]"
            style={{ clipPath: "polygon(1% 4%, 99% 0%, 100% 94%, 97% 100%, 2% 98%, 0% 8%)" }}
            >
            <p className="font-hand text-highlight text-3xl">for the grown-ups —</p>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-orange-200/80 rotate-[1deg]"
                style={{ clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 3% 100%)" }}
            />
            </div>
        </StaggerItem>
        <StaggerItem>
            <div className="h-px flex-1 bg-ink/15 min-w-[60px]" />
        </StaggerItem>
        <StaggerItem>
            <span className="font-serif-display italic text-ink/30 text-sm uppercase tracking-[0.2em]">Please read carefully</span>
        </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-px bg-ink/10">
          {disclaimers.map((d) => (
            <StaggerItem key={d.title}>
              <div className="bg-paper p-8 md:p-10 h-full">
                <h3 className="font-serif-display text-2xl text-ink mb-4">{d.title}</h3>
                <p className="text-ink/70 leading-relaxed">{d.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <StaggerReveal className="mt-16 border-t border-ink/15 pt-10">
          <StaggerItem>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-serif-display italic text-2xl text-ink mb-1">Still have questions?</p>
                <p className="text-ink/60 text-sm">We are happy to chat before you register your child.</p>
              </div>
              
                <a href="mailto:idkthechurchemail@church.org" className="inline-block px-8 py-3 border border-ink/30 text-ink text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors">Contact Us</a>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default Parents;