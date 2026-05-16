import heroImg from "@/assets/group.jpg";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <section id="register" className="relative min-h-[80svh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-paper/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-transparent to-paper/90" />
      </div>

      {/* White glow behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[70vw] h-[70vh] md:h-[60vh]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 35%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative container min-h-[80svh] flex flex-col justify-center items-center text-center py-24">
        <p className="font-serif-italic text-3xl rotate-[-2deg] mb-4 drop-shadow-sm" style={{ color: "#FF6633" }}>
          come find us in the field 
        </p>  
        <h2 className="font-serif-italic text-7xl md:text-[8rem] leading-[0.9] mb-8 drop-shadow-sm" style={{ color: "#25362C" }}>
          Breaking Ground
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSF6MZLWDCLvZZCi4d5QT0RmfyyWG_hRHICWqi03kftWSwBQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-paper text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-colors shadow-paper"
          style={{ backgroundColor: "#25362C" }}
        >
          Register for Pursuit &apos;26
        </a>
        <p className="mt-6 text-sm text-ink/70"></p>
      </div>

      <div className="relative text-paper" style={{ backgroundColor: "#25362C" }}>
        <div className="container py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center text-sm">
          <div className="font-serif italic text-2xl">Pursuit</div>
          <div className="flex flex-wrap gap-6 text-paper/60 text-xs uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-paper">About</a>
            <a href="#give" className="hover:text-paper">Give</a>
            <a href="#schedule" className="hover:text-paper">Schedule</a>
            <a href="#faq" className="hover:text-paper">FAQ</a>
            <a href="#get-involved" className="hover:text-paper">Get Involved</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/torchministry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-paper transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={26} strokeWidth={2.5} />
            </a>
            <a
              href="https://www.facebook.com/wintorchministry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-paper transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={26} strokeWidth={2.5} />
            </a>
            <div className="text-paper/50 text-xs">© 2026 WIN Ontario</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;