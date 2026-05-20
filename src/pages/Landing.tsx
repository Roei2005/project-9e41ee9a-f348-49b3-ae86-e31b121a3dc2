import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppNav from "@/components/AppNav";
import MiniLinePlayground from "@/components/landing/MiniLinePlayground";
import { MoveLeft, Sparkles, BookOpen, Wand2, Brain } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "כלים שזזים",
    desc: "גרפים, פונקציות וצורות שאתם מזיזים בעצמכם. כי לראות זה להבין.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "סיכומים קצרים",
    desc: "כל נושא בעמוד אחד נקי. בלי קירות של טקסט. רק מה שצריך.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "תרגול שמבין אותך",
    desc: "טעיתם? נסביר איפה. הצלחתם? נעלה רמה. בלי לחץ, רק התקדמות.",
    color: "from-emerald-500 to-teal-500",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-28">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              מתמטיקה בגובה העיניים
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-8">
              אלוגברה.
              <br />
              <span className="text-gradient-hero">
                לומדים מתמטיקה בקל.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              גררו, נסו, ותראו את המתמטיקה זזה.
              <br className="hidden md:inline" />
              בלי שינון. בלי לחץ. רק הבנה.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button
                  size="xl"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg h-14 px-8 shadow-2xl-soft group"
                >
                  בואו נתחיל
                  <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="ghost"
                  size="xl"
                  className="rounded-full text-lg h-14 px-8 text-muted-foreground hover:text-foreground"
                >
                  איך זה עובד?
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive Playground */}
          <MiniLinePlayground />

          <p className="text-center text-muted-foreground mt-6 text-base">
            ↑ זוזו עם הסליידרים. זה אמיתי.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-accent font-semibold mb-3 text-lg">מה יש בפנים</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              שלושה דברים שעושים את כל ההבדל.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group relative rounded-[2rem] p-10 bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl-soft"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} grid place-items-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground">{f.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] bg-hero-gradient p-12 md:p-20 text-center overflow-hidden shadow-2xl-soft">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                מוכנים לראות
                <br />
                איך מתמטיקה יכולה להיראות?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                התחילו עכשיו בחינם. בלי כרטיס אשראי.
              </p>
              <Link to="/dashboard">
                <Button
                  size="xl"
                  className="rounded-full bg-white text-foreground hover:bg-white/95 text-lg h-14 px-10 shadow-2xl group"
                >
                  אני בפנים
                  <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center text-muted-foreground">
          © {new Date().getFullYear()} אלוגברה · כל הזכויות שמורות
        </div>
      </footer>
    </div>
  );
};

export default Landing;
