import pathImg from "@/assets/HieuLayingEdit.png";
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
    <section id="give" className="relative py-32 bg-grass-deep text-paper overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-25">
        <img src={pathImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-grass-deep/60" />
      </div>

      <div className="relative container">
        {/* TOP GRID */}
        <StaggerReveal className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* LEFT: TITLE */}
          <StaggerItem className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/60 mb-4">
              02 — Give
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1] text-paper">
              Help make <br />
              <span className="italic">Pursuit happen.</span>
            </h2>
          </StaggerItem>

          {/* RIGHT: GOAL METER (SWAPPED IN HERE) */}
          <StaggerItem className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end">
            <div className="w-full">
              <div className="flex flex-col items-center text-center">
                <p className="font-hand text-4xl rotate-[-1deg] mb-3" style={{ color: "#FF6633" }}>
                  camp goal
                </p>

                <p className="font-serif text-4xl md:text-5xl text-paper mb-6">
                  $5050 <span className="text-paper/30">/</span> $10,000
                </p>

                <div className="w-full max-w-2xl relative">
                  <div className="h-6 border border-paper/25 bg-paper/10 relative overflow-hidden rounded-full">
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      style={{
                        backgroundImage: "url('/paper-noise.png')",
                        backgroundSize: "200px 100%",
                      }}
                    />

                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "50.5%" }}
                      transition={{ duration: 2.4, ease: "easeOut" }}
                      className="h-full relative rounded-full overflow-hidden"
                    >
                      <div className="h-full bg-highlight/60 relative overflow-hidden rounded-full">
                        <motion.div
                          className="absolute inset-0"
                          animate={{ x: [0, 1, -1, 0], y: [0, -0.6, 0.6, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                            className="w-full h-full opacity-50"
                          >
                            <path
                              d="M0,10 C15,2 30,18 45,10 C60,2 75,18 90,10 C105,2 120,18 135,10 C150,2 165,18 180,10 C195,2 210,18 225,10"
                              fill="none"
                              stroke="rgba(255,255,255,0.25)"
                              strokeWidth="1.3"
                            />
                          </svg>
                        </motion.div>

                        <motion.div
                          className="absolute inset-0 opacity-20"
                          animate={{ opacity: [0.15, 0.25, 0.15] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-2">
                    <span>0</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* DESCRIPTION (MOVED DOWN) */}
        <div className="mb-14 max-w-6xl mx-auto text-center">
          <p className="text-lg text-paper/70 leading-relaxed">
            Your generosity helps make Pursuit Camp accessible and life-changing for youth and young adults.
            While many camps cost $250+ per camper, we are committed to keeping registration fees at just $90 so that cost is never a barrier for a young person to attend, encounter God, and grow in their faith.
            Your support goes beyond helping someone attend camp — it helps create opportunities for young people to encounter God through dynamic worship, meaningful connections, engaging activities, and powerful moments in His presence.
            Through these experiences, young people are encouraged to deepen their relationship with Jesus Christ, discover their purpose, and pursue Him wholeheartedly.
          </p>
          <p className="text-lg text-paper/70 leading-relaxed mt-6">
              Together, we can invest in the next generation, ignite young hearts, and create space for faith journeys to begin. Thank you for partnering with us and making Pursuit Camp possible.
          </p>
        </div>

        {/* OPTIONS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1 */}
          <StaggerReveal>
            <StaggerItem>
              <div className="border border-paper/20 p-8 md:p-10 h-full space-y-8 bg-paper/5 backdrop-blur-sm">
                <div>
                  <p className="font-hand text-3xl rotate-[-1deg] mb-3" style={{ color: "#FF6633" }}>
                    option one
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-paper">
                    Interac e-Transfer
                  </h3>
                </div>

                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start border-b border-dashed border-paper/20 pb-4"
                    >
                      <span className="font-serif-display italic text-paper/30 text-xl shrink-0 w-6">
                        {i + 1}
                      </span>

                      <p className="text-paper/80 leading-relaxed">
                        {i === 3 ? (
                          <>
                            For recipient, input:{" "}
                            <a
                              href="mailto:finance@winontario.org"
                              className="text-paper underline underline-offset-2 hover:text-highlight transition-colors"
                            >
                              finance@winontario.org
                            </a>
                          </>
                        ) : i === 4 ? (
                          <div className="space-y-2">
                            <p>In the note field, input:{" "}
                              <span className="font-mono bg-paper/10 px-2 py-0.5 text-paper font-bold">
                                PC26
                              </span>
                            </p>
                            <p className="text-paper/50 text-sm italic">
                              Be advised that any donations without a fund code will be designated to WIMO's "General Fund" donation.
                            </p>
                          </div>
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
              <div className="border border-paper/20 p-8 md:p-10 h-full flex flex-col justify-between space-y-8 bg-paper/5 backdrop-blur-sm">
                <div>
                  <p className="font-hand text-3xl rotate-[-1deg] mb-3" style={{ color: "#FF6633" }}>
                    option two
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-paper">
                    Give Online
                  </h3>
                  <p className="text-paper/70 leading-relaxed mt-4">
                    Prefer to give by credit or debit card? Use our secure online giving portal.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://subsplash.com/u/-D56TVS/give?frequency=once&next_process_date=05/13/2026&campus_id=943911e5-9ccd-4da4-9933-9894411c7bcc&fund_id=decf2d0a-2ec6-4e5f-bf08-dfd3d19e04ba&fbclid=PARlRTSAR2DzRleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadLB570MD6O_7N1HTH9VK6zF3UB9eh4jm1XYdiXytNzNAgVlKOdHU-gOTbZtg_aem_eVaU8in5uHjoM-RH7PPJnQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 bg-paper text-ink text-xs uppercase tracking-[0.3em] hover:bg-highlight hover:text-paper transition-colors"
                  >
                    Give via Subsplash →
                  </a>

                  <p className="text-xs text-paper/40 text-center uppercase tracking-[0.15em]">
                    Secure online giving
                  </p>
                  {/* Instructions */}
                    <div className="border border-paper/20 divide-y divide-paper/20 mt-2">
                      <div className="flex items-center gap-4 px-4 py-3">
                        <span className="text-paper/40 text-xs uppercase tracking-[0.15em] shrink-0 w-16">Step 1</span>
                        <div>
                          <p className="text-paper/40 text-[10px] uppercase tracking-[0.15em] mb-0.5">Campus</p>
                          <p className="text-paper/80 text-sm">WIMO Torch <span className="text-paper/40 text-xs">(Youth & Young Adults)</span></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 px-4 py-3">
                        <span className="text-paper/40 text-xs uppercase tracking-[0.15em] shrink-0 w-16">Step 2</span>
                        <div>
                          <p className="text-paper/40 text-[10px] uppercase tracking-[0.15em] mb-0.5">Fund</p>
                          <p className="text-paper/80 text-sm">Pursuit Camp 2026</p>
                        </div>
                      </div>
                    </div>
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