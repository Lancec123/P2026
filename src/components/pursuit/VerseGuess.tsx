import { useState } from "react";

const rounds = [
  {
    reference: "John 3:16",
    before: "For God so loved the world that he gave his one and only",
    blank: "Son",
    after: "that whoever believes in him shall not perish but have eternal life.",
    options: ["Son", "Word", "Spirit"],
  },
  {
    reference: "Psalm 23:1",
    before: "The Lord is my",
    blank: "shepherd",
    after: "I shall not want.",
    options: ["shepherd", "refuge", "strength"],
  },
  {
    reference: "Philippians 4:13",
    before: "I can do all this through",
    blank: "Christ",
    after: "who gives me strength.",
    options: ["Christ", "faith", "prayer"],
  },
  {
    reference: "Proverbs 3:5",
    before: "Trust in the Lord with all your",
    blank: "heart",
    after: "and lean not on your own understanding.",
    options: ["heart", "mind", "soul"],
  },
  {
    reference: "Romans 8:28",
    before: "And we know that in all things God works for the",
    blank: "good",
    after: "of those who love him.",
    options: ["good", "glory", "grace"],
  },
];

const shuffle = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);

const scoreMessages = [
  { min: 0, max: 1, msg: "That's okay — we will learn this all at the retreat! 🙌" },
  { min: 2, max: 3, msg: "Not bad! You know your way around the Word 📖" },
  { min: 4, max: 4, msg: "Really solid! Almost got them all 🙌" },
  { min: 5, max: 5, msg: "Perfect score! You might be the next group leader 👑" },
];

const getScoreMessage = (score: number) =>
  scoreMessages.find((s) => score >= s.min && score <= s.max)?.msg ?? "";

export const VerseGuess = ({ onClose }: { onClose: () => void }) => {
  const [shuffledRounds] = useState(() =>
    rounds.map((r) => ({ ...r, options: shuffle(r.options) }))
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const round = shuffledRounds[current];
  const isCorrect = selected === round.blank;
  const isLast = current === shuffledRounds.length - 1;

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    if (option === round.blank) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
      <div
        className="relative max-w-lg w-full bg-paper shadow-paper p-8 md:p-10 rotate-[-0.5deg]"
        style={{ clipPath: "polygon(1% 2%, 99% 0%, 100% 97%, 98% 100%, 1% 99%, 0% 3%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {!done ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Verse Guess</p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                  {current + 1} / {shuffledRounds.length}
                </span>
                <span
                  className="text-xs uppercase tracking-[0.2em] text-paper px-2 py-1"
                  style={{ backgroundColor: "#25362C" }}
                >
                  Score: {score}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-ink/10 mb-6">
              <div
                className="h-px transition-all duration-500"
                style={{
                  width: `${((current + 1) / shuffledRounds.length) * 100}%`,
                  backgroundColor: "#25362C",
                }}
              />
            </div>

            <p className="font-serif-italic text-xl mb-4" style={{ color: "#FF6633" }}>
              {round.reference}
            </p>

            <p className="font-serif-italic text-xl md:text-2xl text-ink leading-relaxed mb-8">
              &ldquo;{round.before}{" "}
              <span
                className={`inline-block min-w-[80px] border-b-2 text-center px-2 transition-colors ${
                  selected
                    ? isCorrect
                      ? "border-green-600 text-green-700"
                      : "border-red-400 text-red-500"
                    : "border-ink/40 text-ink/30"
                }`}
              >
                {selected ? selected : "______"}
              </span>{" "}
              {round.after}&rdquo;
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {round.options.map((opt) => {
                const isSelected = selected === opt;
                const isRight = opt === round.blank;
                let style = "border-ink/20 text-ink/70 hover:border-ink hover:text-ink";
                if (selected) {
                  if (isRight) style = "border-green-600 text-green-700 bg-green-50";
                  else if (isSelected) style = "border-red-400 text-red-500 bg-red-50";
                  else style = "border-ink/10 text-ink/30";
                }
                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    className={`px-5 py-2 border text-sm uppercase tracking-[0.15em] transition-all ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className="flex items-center justify-between border-t border-ink/10 pt-4">
                <p className="text-sm text-ink/60 italic">
                  {isCorrect ? "Correct! 🙌" : `The answer was "${round.blank}"`}
                </p>
                <button
                  onClick={handleNext}
                  className="px-5 py-2 text-paper text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-colors"
                  style={{ backgroundColor: "#25362C" }}
                >
                  {isLast ? "See results" : "Next →"}
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50 mb-6">Verse Guess — Results</p>
            <div className="text-center space-y-4 py-6">
              <p className="font-serif-italic text-6xl text-ink">
                {score} / {shuffledRounds.length}
              </p>
              <p className="font-hand text-2xl" style={{ color: "#FF6633" }}>
                {getScoreMessage(score)}
              </p>
            </div>
            <div className="flex gap-3 mt-8 border-t border-ink/10 pt-6">
              <button
                onClick={handleRestart}
                className="flex-1 px-5 py-3 border text-ink text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-colors"
                style={{ borderColor: "#25362C", color: "#25362C" }}
              >
                Play again
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-5 py-3 text-paper text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-colors"
                style={{ backgroundColor: "#25362C" }}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};