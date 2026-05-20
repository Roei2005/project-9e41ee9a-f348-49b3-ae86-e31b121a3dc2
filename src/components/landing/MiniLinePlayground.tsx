import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathBlock } from "@/components/math/MathBlock";

/**
 * Tiny on-the-hero interactive: drag the slider, watch the line move.
 * SVG is in LTR coordinate space — Hebrew labels live outside the SVG.
 */
const MiniLinePlayground = () => {
  const [m, setM] = useState(1);
  const [b, setB] = useState(0);

  // Map math coordinates to SVG (viewport 400x400, range -5..5)
  const toX = (x: number) => 200 + x * 36;
  const toY = (y: number) => 200 - y * 36;

  const y1 = m * -5 + b;
  const y2 = m * 5 + b;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="glass rounded-[2rem] p-6 md:p-8 shadow-2xl-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">מעבדה חיה</div>
          <div className="flex items-center gap-2 text-base">
            <span className="text-muted-foreground">המשוואה:</span>
            <MathBlock className="text-xl font-semibold text-foreground">
              y = {m.toFixed(1)}x {b >= 0 ? "+" : "−"} {Math.abs(b).toFixed(1)}
            </MathBlock>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white border border-border">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-auto block"
            dir="ltr"
          >
            {/* grid */}
            <defs>
              <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="hsl(220 20% 91%)" strokeWidth="1" />
              </pattern>
              <linearGradient id="lineGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(234 75% 35%)" />
                <stop offset="100%" stopColor="hsl(260 84% 65%)" />
              </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />
            {/* axes */}
            <line x1="0" y1="200" x2="400" y2="200" stroke="hsl(222 47% 11%)" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="hsl(222 47% 11%)" strokeWidth="1.5" />
            {/* the line */}
            <line
              x1={toX(-5)}
              y1={toY(y1)}
              x2={toX(5)}
              y2={toY(y2)}
              stroke="url(#lineGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ transition: "all 0.25s ease-out" }}
            />
            {/* y-intercept dot */}
            <circle
              cx={toX(0)}
              cy={toY(b)}
              r="7"
              fill="white"
              stroke="hsl(238 84% 60%)"
              strokeWidth="3"
              style={{ transition: "all 0.25s ease-out" }}
            />
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-base font-medium">השיפוע</label>
              <MathBlock className="text-lg font-semibold text-accent">
                m = {m.toFixed(1)}
              </MathBlock>
            </div>
            <Slider
              min={-3}
              max={3}
              step={0.1}
              value={[m]}
              onValueChange={([v]) => setM(v)}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-base font-medium">החיתוך עם ציר Y</label>
              <MathBlock className="text-lg font-semibold text-accent">
                b = {b.toFixed(1)}
              </MathBlock>
            </div>
            <Slider
              min={-4}
              max={4}
              step={0.1}
              value={[b]}
              onValueChange={([v]) => setB(v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniLinePlayground;
