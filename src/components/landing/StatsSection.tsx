import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Sparkles } from "lucide-react";

const useCountUp = (
  target: number,
  start: boolean,
  duration = 1600,
  runKey: number = 0
) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) {
      setVal(0);
      return;
    }
    setVal(0);
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, runKey]);
  return val;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  // runKey increments every time the section re-enters the viewport,
  // forcing the counters to restart.
  const [runKey, setRunKey] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(false);
            // next frame: bump key and activate to restart animation
            requestAnimationFrame(() => {
              setRunKey((k) => k + 1);
              setActive(true);
            });
          } else {
            setActive(false);
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const students = useCountUp(500, active, 1700, runKey);
  const improvement = useCountUp(98, active, 1700, runKey);
  const topics = useCountUp(40, active, 1700, runKey);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            המקום היחיד בארץ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5">
            אלוגברה זה המקום היחיד שאפשר ללמוד בו הכל — לבד.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            רק עם כלים מגניבים שבאמת מסבירים את הדברים לעומק.
            <br />
            לא סתם מקיאים את החומר.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <StatCard
            icon={Users}
            value={`+${students}`}
            label="תלמידים כבר למדו"
            sub="עם הכלים של אלוגברה"
            gradient="from-primary to-accent"
          />
          <StatCard
            icon={TrendingUp}
            value={`${improvement}%`}
            label="שיפור בציונים"
            sub="ממוצע אצל לומדים פעילים"
            gradient="from-accent to-gold"
          />
          <StatCard
            icon={Sparkles}
            value={`${topics}+`}
            label="כלים אינטראקטיביים"
            sub="לכל נושא, בכל כיתה"
            gradient="from-gold to-gold-light"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  value,
  label,
  sub,
  gradient,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  sub: string;
  gradient: string;
}) => (
  <div className="relative rounded-[2rem] p-10 bg-card border border-border overflow-hidden group hover:-translate-y-1 hover:shadow-2xl-soft transition-all duration-500">
    <div
      className={`absolute -top-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}
    />
    <div
      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} grid place-items-center mb-6 shadow-lg`}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>
    <div className="relative">
      <div className="text-6xl md:text-7xl font-black text-foreground tracking-tight tabular-nums leading-none">
        {value}
      </div>
      <div className="mt-4 text-xl font-bold text-foreground">{label}</div>
      <div className="text-base text-muted-foreground mt-1">{sub}</div>
    </div>
  </div>
);

export default StatsSection;
