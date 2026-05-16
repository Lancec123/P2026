import motionImg from "@/assets/group.jpg";
import typoImg from "@/assets/outsidetable.jpg";
import campBg from "@/assets/camp-background.jpg";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

const faqs = [
  {
    q: "What age group is the camp designed for?",
    a: "Pursuit Camp is designed for young people between the ages of 12 and 22. We create an environment where participants can connect, grow, and deepen their relationship with Jesus Christ.",
  },
  {
    q: "What activities can campers expect during their time at Pursuit?",
    a: "Campers can look forward to engaging activities such as dynamic worship services, thought-provoking teaching sessions, small group discussions, outdoor adventures, community-building activities, and more. Our goal is to create a well-rounded and impactful experience for all participants.",
  },
  {
    q: "Is the camp open to individuals from all Christian denominations?",
    a: "Absolutely! Pursuit welcomes individuals from all backgrounds and Christian denominations. We believe in fostering an inclusive and diverse community where participants can come together, learn from one another, and grow in their faith journey.",
  },
  {
    q: "Is financial assistance available?",
    a: "Yes, we understand that financial circumstances can vary, and we offer scholarships and financial assistance to those who need it. Please reach out to Pastor Mar Jay (marjay.rigor@winontario.org) directly to discuss available options and the application process.",
  },
  {
  q: "What should I pack?",
  a: (
    <div className="space-y-1">
      <p>• Bible</p>
      <p>• Clothes (4 days, 3 nights)</p>
      <p>• Personal medications</p>
      <p>
        • Swimwear | Towels | Toiletries | Bed sheet | Pillows |
        Flash light | Bug spray | Sun block
      </p>
    </div>
  ),
},
  {
  q: "I have other questions, who can I ask about them?",
  a: (
    <>
      Please contact{" "}
      <a
        href="mailto:marjay.rigor@winontario.org"
        className="underline hover:opacity-70"
      >
        marjay.rigor@winontario.org
      </a>{" "}
      or{" "}
      <a
        href="mailto:cali.mendoza@winontario.org"
        className="underline hover:opacity-70"
      >
        cali.mendoza@winontario.org
      </a>
      . Feel free to also contact us through the social media accounts we have
      listed below.
    </>
  ),
}
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 bg-grass-deep text-paper overflow-hidden">
      {/* Camp background image */}
      <div className="absolute inset-0">
        <img src={campBg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-grass-deep/75" />
      </div>

      {/* Dreamy overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative container grid lg:grid-cols-12 gap-12">
        <StaggerReveal className="lg:col-span-4 space-y-8">
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.3em] text-paper/50 mb-4">04 — FAQ</p>
            <h2 className="font-serif-italic text-5xl md:text-6xl leading-[1] text-paper">
              Questions <br /><span className="italic">we get a lot.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] shadow-paper rotate-[-3deg] overflow-hidden">
                <img src={motionImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] shadow-paper rotate-[3deg] overflow-hidden mt-8">
                <img src={typoImg} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Contact */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/20 pt-6">
              <div className="min-w-0">
                <p className="text-sm text-white/80 mb-1">
                  Still have questions?
                </p>

                <a
                  href="mailto:torch@winontario.org"
                  className="font-serif italic text-xl md:text-2xl text-white hover:text-white/80 transition-colors break-all"
                >
                  torch@winontario.org →
                </a>
              </div>

              <div className="mb-8 flex items-center justify-end gap-4">
            <p className="font-serif-italic text-2xl rotate-[-2deg]" style={{ color: "#FF6633" }}>we got you</p>
          </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="lg:col-span-7 lg:col-start-6">
          <div className="mb-8 flex items-center justify-end gap-4">
            <p className="font-serif-italic text-2xl rotate-[-2deg]" style={{ color: "#FF6633" }}>things you probably wondered </p>
          </div>
          <div className="space-y-px border-t border-paper/20">
            {faqs.map((f, i) => (
              <StaggerItem key={i}>
                <details className="group border-b border-paper/20 py-6">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <h3 className="font-serif text-xl md:text-2xl text-paper pr-4">{f.q}</h3>
                    <span className="font-serif text-2xl text-paper/40 group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-paper/70 leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              </StaggerItem>
            ))}
          </div>
          
        </StaggerReveal>
      </div>

      <div className="relative mt-16">
        <StaggerReveal>
          <StaggerItem>
            <div className="aspect-video w-full max-w-3xl mx-auto shadow-paper">
              <iframe
                src="https://www.youtube.com/embed/kDrLQkn6SHw"
                title="Pursuit Retreat Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default FAQ;