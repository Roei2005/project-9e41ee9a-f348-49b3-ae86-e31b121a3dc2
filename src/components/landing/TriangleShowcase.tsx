import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

/**
 * Auto-playing showcase of triangle congruence.
 * No clicks needed — narration + animation cycle automatically.
 */

type StepId =
  | "intro"
  | "meet"
  | "overlap"
  | "sas"
  | "asa"
  | "sss"
  | "outro";

interface Step {
  id: StepId;
  title: string;
  caption?: string;
  duration: number; // ms
}

const STEPS: Step[] = [
  {
    id: "intro",
    title: "דוגמא לדברים שתמצאו אצלנו:",
    duration: 3000,
  },
  {
    id: "meet",
    title: "משולשים חופפים. שמעתם על זה?",
    caption: "יופי, בואו נבין מה זה באמת אומר.",
    duration: 3800,
  },
  {
    id: "overlap",
    title: "הם מכסים אחד את השני — בדיוק.",
    caption: "זה כל הסיפור. אותן צלעות, אותן זוויות.",
    duration: 3800,
  },
  {
    id: "sas",
    title: "משפט ראשון: צ.ז.צ",
    caption: "שתי צלעות והזווית שביניהן — מספיק.",
    duration: 3200,
  },
  {
    id: "asa",
    title: "משפט שני: ז.צ.ז",
    caption: "שתי זוויות והצלע שביניהן — מספיק.",
    duration: 3200,
  },
  {
    id: "sss",
    title: "משפט שלישי: צ.צ.צ",
    caption: "שלוש צלעות שוות — מספיק.",
    duration: 3200,
  },
  {
    id: "outro",
    title: "נו? השתכנעתם?",
    caption: "ככה מבינים באמת.",
    duration: 4000,
  },
];

// ===== Triangle helpers =====
const P0 = { x: 110, y: 22 };
const P1 = { x: 190, y: 168 };
const P2 = { x: 22, y: 168 };

const AngleArc = ({
  cx,
  cy,
  startAngle,
  endAngle,
  radius,
  color,
}: {
  cx: number;
  cy: number;
  startAngle: number;
  endAngle: number;
  radius: number;
  color: string;
}) => {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + radius * Math.cos(toRad(startAngle));
  const y1 = cy + radius * Math.sin(toRad(startAngle));
  const x2 = cx + radius * Math.cos(toRad(endAngle));
  const y2 = cy + radius * Math.sin(toRad(endAngle));
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  const d = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
  );
};

const TickMark = ({
  p1,
  p2,
  count,
  color,
}: {
  p1: { x: number; y: number };
  p2: { x: number; y: number };
  count: number;
  color: string;
}) => {
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len;
  const ny = dx / len;
  const size = 7;
  const gap = 5;
  const start = -((count - 1) * gap) / 2;
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const off = start + i * gap;
        const cx = midX + (dx / len) * off * 0.5;
        const cy = midY + (dy / len) * off * 0.5;
        return (
          <line
            key={i}
            x1={cx - nx * size}
            y1={cy - ny * size}
            x2={cx + nx * size}
            y2={cy + ny * size}
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
};

const Triangle = ({
  fill,
  stroke,
  highlightSides = [],
  highlightAngles = [],
  showTicks = false,
}: {
  fill: string;
  stroke: string;
  highlightSides?: number[];
  highlightAngles?: number[];
  showTicks?: boolean;
}) => {
  const sideColor = "hsl(var(--accent))";
  const angleColor = "hsl(var(--gold))";
  return (
    <svg width="210" height="190" viewBox="0 0 210 190">
      <path
        d={`M${P0.x},${P0.y} L${P1.x},${P1.y} L${P2.x},${P2.y} Z`}
        fill={fill}
        stroke={stroke}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      {highlightSides.includes(0) && (
        <line
          x1={P0.x}
          y1={P0.y}
          x2={P1.x}
          y2={P1.y}
          stroke={sideColor}
          strokeWidth={6}
          strokeLinecap="round"
        />
      )}
      {highlightSides.includes(1) && (
        <line
          x1={P1.x}
          y1={P1.y}
          x2={P2.x}
          y2={P2.y}
          stroke={sideColor}
          strokeWidth={6}
          strokeLinecap="round"
        />
      )}
      {highlightSides.includes(2) && (
        <line
          x1={P2.x}
          y1={P2.y}
          x2={P0.x}
          y2={P0.y}
          stroke={sideColor}
          strokeWidth={6}
          strokeLinecap="round"
        />
      )}
      {highlightAngles.includes(0) && (
        <AngleArc cx={P0.x} cy={P0.y} startAngle={62} endAngle={118} radius={26} color={angleColor} />
      )}
      {highlightAngles.includes(1) && (
        <AngleArc cx={P1.x} cy={P1.y} startAngle={182} endAngle={242} radius={26} color={angleColor} />
      )}
      {highlightAngles.includes(2) && (
        <AngleArc cx={P2.x} cy={P2.y} startAngle={302} endAngle={358} radius={26} color={angleColor} />
      )}
      {showTicks && (
        <>
          <TickMark p1={P0} p2={P1} count={1} color="hsl(var(--foreground))" />
          <TickMark p1={P1} p2={P2} count={2} color="hsl(var(--foreground))" />
          <TickMark p1={P2} p2={P0} count={3} color="hsl(var(--foreground))" />
        </>
      )}
    </svg>
  );
};

const TriangleShowcase = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx];

  useEffect(() => {
    const t = setTimeout(() => {
      setStepIdx((i) => (i + 1) % STEPS.length);
    }, step.duration);
    return () => clearTimeout(t);
  }, [stepIdx, step.duration]);

  const id = step.id;
  const triangles =
    id === "intro"
      ? "hidden"
      : id === "meet"
      ? "split"
      : "overlap";

  const blueProps =
    id === "sas"
      ? { highlightSides: [0, 2], highlightAngles: [0] }
      : id === "asa"
      ? { highlightSides: [1], highlightAngles: [1, 2] }
      : id === "sss"
      ? { highlightSides: [0, 1, 2], showTicks: true }
      : {};

  const redProps = blueProps;

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Stage */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-card to-secondary border border-border shadow-2xl-soft overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        {/* Narration */}
        <div className="relative px-8 pt-8 pb-2 text-center min-h-[110px] flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            דוגמא חיה
          </div>
          <h3
            key={`title-${stepIdx}`}
            className="text-2xl md:text-3xl font-bold text-foreground leading-snug animate-fade-in"
          >
            {step.title}
          </h3>
          {step.caption && (
            <p
              key={`cap-${stepIdx}`}
              className="text-base md:text-lg text-muted-foreground mt-2 animate-fade-in"
            >
              {step.caption}
            </p>
          )}
        </div>

        {/* Stage with triangles */}
        <div className="relative h-[280px] md:h-[320px] flex items-center justify-center">
          {triangles !== "hidden" && (
            <>
              {/* Blue triangle */}
              <div
                className={`absolute transition-all duration-1000 ease-out ${
                  triangles === "split"
                    ? "translate-x-[140px] md:translate-x-[180px] opacity-100"
                    : "translate-x-0 opacity-95"
                }`}
                style={{ filter: "drop-shadow(0 10px 30px hsl(234 75% 35% / 0.25))" }}
              >
                <Triangle
                  fill="hsl(234 75% 35% / 0.10)"
                  stroke="hsl(234 75% 35%)"
                  {...blueProps}
                />
              </div>

              {/* Red triangle (rotates in to land on blue when overlapping) */}
              <div
                className={`absolute transition-all duration-1000 ease-out ${
                  triangles === "split"
                    ? "-translate-x-[140px] md:-translate-x-[180px] opacity-100"
                    : "translate-x-0 opacity-70"
                }`}
                style={{ filter: "drop-shadow(0 10px 30px hsl(0 84% 60% / 0.25))" }}
              >
                <Triangle
                  fill="hsl(0 84% 60% / 0.10)"
                  stroke="hsl(0 84% 60%)"
                  {...redProps}
                />
              </div>

              {/* Overlap badge */}
              {id === "overlap" && (
                <div className="absolute bottom-4 px-4 py-2 rounded-full bg-foreground text-background text-sm font-bold shadow-lg animate-fade-in">
                  בדיוק אותו דבר ✓
                </div>
              )}
            </>
          )}

          {id === "intro" && (
            <div
              key="intro-vis"
              className="text-center animate-fade-in flex flex-col items-center gap-4"
            >
              <div className="flex gap-3 items-end">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full bg-accent animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-base">בעוד רגע מתחילים…</p>
            </div>
          )}
        </div>

        {/* Theorem chips */}
        <div className="relative px-8 pb-7 flex items-center justify-center gap-2 flex-wrap">
          {(["sas", "asa", "sss"] as StepId[]).map((s) => (
            <span
              key={s}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-500 ${
                id === s
                  ? "bg-foreground text-background scale-110 shadow-lg"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {s === "sas" && "צ.ז.צ"}
              {s === "asa" && "ז.צ.ז"}
              {s === "sss" && "צ.צ.צ"}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
          <div
            key={stepIdx}
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{
              animation: `showcaseProgress ${step.duration}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes showcaseProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default TriangleShowcase;
