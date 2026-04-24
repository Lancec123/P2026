import heroImg from "@/assets/hero-meadow.png";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <section id="register" className="relative min-h-[80svh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-paper/30" />
      </div>

      <div className="relative container min-h-[80svh] flex flex-col justify-center items-center text-center py-24">
        <p className="font-hand text-3xl text-highlight rotate-[-2deg] mb-4">come find us in the field —</p>
        <h2 className="font-serif-display italic text-7xl md:text-[8rem] leading-[0.9] text-ink mb-8">
          Breaking Ground.
        </h2>
        <a
          href="https://forms.example.com"
          className="inline-block px-10 py-4 bg-ink text-paper text-xs uppercase tracking-[0.3em] hover:bg-primary transition-colors shadow-paper"
        >
          Register for Pursuit ’26
        </a>
        <p className="mt-6 text-sm text-ink/70">
          Registration closes April 18, 2026 — or when i fall asleep.
        </p>
      </div>

      <div className="relative bg-ink text-paper">
        <div className="container py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center text-sm">
          <div className="font-serif-display italic text-2xl">Pursuit</div>
          <div className="flex flex-wrap gap-6 text-paper/60 text-xs uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-paper">About</a>
            <a href="#get-involved" className="hover:text-paper">Get Involved</a>
            <a href="#schedule" className="hover:text-paper">Schedule</a>
            <a href="#faq" className="hover:text-paper">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/winontario/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-paper transition-colors"
              aria-label="Instagram"
            >
                <Instagram size={26} strokeWidth={2.5} />
            </a>
            <a
              href="https://www.facebook.com/winontario/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-paper transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={26} strokeWidth={2.5} />
            </a>
            <div className="text-paper/50 text-xs">© 2026 WIN Mississauga</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
