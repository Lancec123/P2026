import motionImg from "@/assets/constant-motion.png";
import typoImg from "@/assets/typography-flower.png";

const faqs = [
  { q: "Who can come?", a: "Pursuit is open to all league of legends players. If you’re bringing a friend who isn’t a leaguer, even better — that’s kind of the point." },
  { q: "How much does it cost?", a: "$1 per student, all-in. This covers lodging, all meals, and materials." },
  { q: "Where is it?", a: "idk where it is hieu drove me there i was asleep lol" },
  { q: "What should I pack?", a: "A Bible... maybe a pillow and blanket bc someone didnt bring a pillow or blanket last time..." },
  { q: "Can parents volunteer?", a: "idk i guess" },
  { q: "whos the tuffest", a: "Lance Matthew Cabance" },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 bg-paper-edge/40">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">04 — FAQ</p>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-[1] text-ink">
              Questions <br /><span className="italic">we get a lot.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] shadow-paper rotate-[-3deg] overflow-hidden">
              <img src={motionImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] shadow-paper rotate-[3deg] overflow-hidden mt-8">
              <img src={typoImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="border-t border-ink/15 pt-6">
            <p className="text-sm text-muted-foreground mb-2">Still wondering something?</p>
            <a href="mailto:idkthechurchemail@church.org" className="font-serif-display italic text-2xl text-ink hover:text-highlight transition-colors">
              idkthechurchemail@church.org →
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-px border-t border-ink/15">
            {faqs.map((f, i) => (
              <details key={i} className="group border-b border-ink/15 py-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="font-serif-display text-xl md:text-2xl text-ink pr-4">{f.q}</h3>
                  <span className="font-serif-display text-2xl text-ink/40 group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-4 text-ink/75 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube video */}
      <div className="col-span-full mt-16">
        <div className="aspect-video w-full max-w-3xl mx-auto shadow-paper">
          <iframe
            src="https://www.youtube.com/embed/kDrLQkn6SHw"
            title="Pursuit Retreat Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
