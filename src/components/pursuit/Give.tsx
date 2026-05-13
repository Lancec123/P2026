import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { motion } from "framer-motion";

const steps = [
  "Go to your bank app or site (e.g. EasyWeb for TD Bank)",
  "Select Interac e-Transfer then click Send Money",
  "Select the account you wish to send from, then enter the amount",
  "For recipient, input: finance@winontario.org",
  "In the note field, input: PC26",
  "Send",
];

const Give = () => {
  return (
    <section id="give" className="relative py-32 paper-texture">
      <div className="container">
        <StaggerReveal className="grid lg:grid-cols-12 gap-12 mb-16">
          <StaggerItem className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              06 — Give
            </p>

            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-ink">
              Help make <br />
              <span className="italic">Pursuit happen.</span>
            </h2>
          </StaggerItem>

          <StaggerItem className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-ink/70 leading-relaxed">
              Join us in our mission to make a difference in the lives of youth
              and young adults. Help ensure that camp fees remain at $90 –
              much lower than the typical cost of $250+ per camper, enabling
              more young people to participate and experience the
              transformative power of God’s love.
            </p>
          </StaggerItem>
        </StaggerReveal>

        {/* ===================== */}
        {/* GOAL METER */}
        {/* ===================== */}
        <div className="mb-14">
          <div className="flex flex-col items-center text-center">
            <p className="font-hand text-2xl text-highlight rotate-[-1deg] mb-3">
              camp goal 
            </p>

            <p className="font-serif-display text-4xl md:text-5xl text-ink mb-6">
              $0 <span className="text-ink/30">/</span> $10,000
            </p>

            <div className="w-full max-w-2xl relative">
              {/* OUTER TRACK */}
              <div className="h-6 border border-ink/25 bg-paper/40 relative overflow-hidden rounded-full">

                {/* subtle moving “alive” background even at 0% */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      "url('/paper-noise.png')",
                    backgroundSize: "200px 100%",
                  }}
                />

                {/* FILL (still 0%, but animated texture inside) */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "1%" }} // <- later: change to real % like "42%"
                  transition={{ duration: 2.4, ease: "easeOut" }}
                  className="h-full relative rounded-full overflow-hidden"
                >
                  {/* ink base */}
                  <div className="h-full bg-highlight/40 relative overflow-hidden rounded-full">

                    {/* HAND-DRAWN “LIVING EDGE” EVEN AT 0% */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        x: [0, 1, -1, 0],
                        y: [0, -0.6, 0.6, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* scribble stroke */}
                      <svg
                        viewBox="0 0 200 20"
                        preserveAspectRatio="none"
                        className="w-full h-full opacity-50"
                      >
                        <path
                          d="M0,10 C15,2 30,18 45,10 C60,2 75,18 90,10 C105,2 120,18 135,10 C150,2 165,18 180,10 C195,2 210,18 225,10"
                          fill="none"
                          stroke="rgba(0,0,0,0.25)"
                          strokeWidth="1.3"
                        />
                      </svg>
                    </motion.div>

                    {/* subtle highlight shimmer */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        opacity: [0.15, 0.25, 0.15],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* labels */}
              <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-2">
                <span>0</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* OPTIONS */}
        {/* ===================== */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1 */}
          <StaggerReveal>
            <StaggerItem>
              <div className="border border-ink/15 p-8 md:p-10 h-full space-y-8">
                <div>
                  <p className="font-hand text-highlight text-2xl rotate-[-1deg] mb-3">
                    option one 
                  </p>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                    Interac e-Transfer
                  </h3>
                </div>

                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start border-b border-dashed border-ink/15 pb-4"
                    >
                      <span className="font-serif-display italic text-ink/30 text-xl shrink-0 w-6">
                        {i + 1}
                      </span>

                      <p className="text-ink/80 leading-relaxed">
                        {i === 3 ? (
                          <>
                            For recipient, input:{" "}
                            <a
                              href="mailto:give2torch@winontario.org"
                              className="text-ink underline underline-offset-2 hover:text-highlight transition-colors"
                            >
                              give2torch@winontario.org
                            </a>
                          </>
                        ) : i === 4 ? (
                          <>
                            In the note field, input:{" "}
                            <span className="font-mono bg-ink/5 px-2 py-0.5 text-ink font-bold">
                              PC26
                            </span>
                          </>
                        ) : (
                          step
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>

          {/* Option 2 */}
          <StaggerReveal>
            <StaggerItem>
              <div className="border border-ink/15 p-8 md:p-10 h-full flex flex-col justify-between space-y-8">
                <div>
                  <p className="font-hand text-highlight text-2xl rotate-[-1deg] mb-3">
                    option two 
                  </p>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                    Give Online
                  </h3>
                  <p className="text-ink/70 leading-relaxed mt-4">
                    Prefer to give by credit or debit card? Use our secure online
                    giving portal.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://subsplash.com/u/-D56TVS/give?frequency=once&next_process_date=05/13/2026&campus_id=943911e5-9ccd-4da4-9933-9894411c7bcc&fund_id=c59f474c-feba-44a4-aeef-739dcc6c1172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 bg-ink text-paper text-xs uppercase tracking-[0.3em] hover:bg-primary transition-colors"
                  >
                    Give via Subsplash →
                  </a>

                  <p className="text-xs text-ink/40 text-center uppercase tracking-[0.15em]">
                    Secure online giving
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default Give;