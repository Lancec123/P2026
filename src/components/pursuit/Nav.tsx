import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const tabs = ["About", "Get Involved", "Schedule", "FAQ", "Parents"];

const slug = (t: string) => t.toLowerCase().replace(/\s+/g, "-");

// easeInOutCubic for a buttery scroll
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number, duration = 1100) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  // Honor reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const flashSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("section-flash");
  // force reflow so the animation can replay
  void el.offsetWidth;
  el.classList.add("section-flash");
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Active-section tracking via IntersectionObserver
  useEffect(() => {
    const ids = ["top", ...tabs.map(slug)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 64; // h-16
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    smoothScrollTo(top);
    history.replaceState(null, "", `#${id}`);
    // Flash after scroll begins to settle
    window.setTimeout(() => flashSection(id), 700);
  };
//
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-bar transition-all duration-500 ${
        scrolled ? "h-14 shadow-soft" : "h-16"
      }`}
    >
      <div className="container flex items-center justify-between h-full">
        {/* Torn paper logo */}
        <a href="#top" onClick={(e) => handleNav(e, "top")} className="flex items-center gap-2 group">
        <img
          src={`${import.meta.env.BASE_URL}pursuitbutton.png`}
          alt="Pursuit"
          className="-rotate-2 group-hover:rotate-0 transition-transform"
          style={{ height: "38px", width: "auto" }}
        />
        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Youth Retreat '26
        </span>
      </a>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const id = slug(tab);
            const isActive = active === id;
            return (
              <a
                key={tab}
                href={`#${id}`}
                onClick={(e) => handleNav(e, id)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors relative group ${
                  isActive ? "text-ink" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {tab}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-px bg-ink origin-left transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#register"
          onClick={(e) => handleNav(e, "register")}
          className="hidden md:inline-block px-5 py-2 bg-ink text-paper text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors"
        >
          Register
        </a>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper/90 backdrop-blur-md animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {tabs.map((tab) => {
              const id = slug(tab);
              return (
                <a
                  key={tab}
                  href={`#${id}`}
                  onClick={(e) => handleNav(e, id)}
                  className="py-2 font-serif-display text-xl text-ink"
                >
                  {tab}
                </a>
              );
            })}
            <a
              href="#register"
              onClick={(e) => handleNav(e, "register")}
              className="mt-2 px-5 py-3 bg-ink text-paper text-center text-xs uppercase tracking-[0.2em]"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
