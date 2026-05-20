import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppNav from "@/components/AppNav";
import TriangleShowcase from "@/components/landing/TriangleShowcase";
import StatsSection from "@/components/landing/StatsSection";
import LearnAloneSection from "@/components/landing/LearnAloneSection";
import { MoveLeft, Sparkles } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      {/* HERO — showcase first */}
      <section className="relative overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              אלוגברה · מתמטיקה בגובה העיניים
            </div>
          </div>

          {/* The auto-playing demo is the star */}
          <TriangleShowcase />

          {/* After the demo — pitch */}
          <div className="text-center max-w-3xl mx-auto mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-6">
              ככה לומדים אצלנו.
              <br />
              <span className="text-gradient-hero">לבד — אבל באמת מבינים.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
              אלוגברה זה המקום היחיד בארץ שאפשר ללמוד בו את הכל לבד.
              <br className="hidden md:inline" />
              רק עם כלים שמסבירים את הדברים לעומק — לא מקיאים את החומר.
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
                  ראו את המחירים
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <StatsSection />

      {/* "אבל רגע..." */}
      <LearnAloneSection />

      {/* CTA */}
      <section className="py-24">
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
