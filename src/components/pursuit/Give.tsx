import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">06 — Give</p>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[1] text-ink">
              Help make <br /><span className="italic">Pursuit happen.</span>
            </h2>
          </StaggerItem>
          <StaggerItem className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-ink/70 leading-relaxed">
              Join us in our mission to make a difference in the lives of youth and young adults. Help ensure that camp fees remain at $90 – much lower than the typical cost of $250+ per camper, enabling more young people to participate and experience the transformative power of God’s love.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1 — Etransfer */}
          <StaggerReveal>
            <StaggerItem>
              <div className="border border-ink/15 p-8 md:p-10 h-full space-y-8">
                <div>
                  <p className="font-hand text-highlight text-2xl rotate-[-1deg] mb-3">option one —</p>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-ink">Interac e-Transfer</h3>
                </div>

                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start border-b border-dashed border-ink/15 pb-4">
                      <span className="font-serif-display italic text-ink/30 text-xl shrink-0 w-6">{i + 1}</span>
                      <p className="text-ink/80 leading-relaxed">
                        {i === 3 ? (
                          <>
                            For recipient, input:{" "}
                            <a href="mailto:give2torch@winontario.org" className="text-ink underline underline-offset-2 hover:text-highlight transition-colors">
                              give2torch@winontario.org
                            </a>
                          </>
                        ) : i === 4 ? (
                          <>
                            In the note field, input:{" "}
                            <span className="font-mono bg-ink/5 px-2 py-0.5 text-ink font-bold">PC26</span>
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

          {/* Option 2 — Subsplash */}
          <StaggerReveal>
            <StaggerItem>
              <div className="border border-ink/15 p-8 md:p-10 h-full flex flex-col justify-between space-y-8">
                <div>
                  <p className="font-hand text-highlight text-2xl rotate-[-1deg] mb-3">option two —</p>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-ink">Give Online</h3>
                  <p className="text-ink/70 leading-relaxed mt-4">
                    Prefer to give by credit or debit card? Use our secure online giving portal.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://www.winontario.org/give2torch/"
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