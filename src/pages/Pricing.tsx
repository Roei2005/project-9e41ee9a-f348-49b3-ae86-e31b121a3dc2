import { useNavigate } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import AppNav from "@/components/AppNav";
import { Button } from "@/components/ui/button";
import GoogleButton from "@/components/GoogleButton";
import { useAuth } from "@/contexts/AuthContext";
import { MathBlock } from "@/components/math/MathBlock";

const Pricing = () => {
  const { user, signInWithGoogle, upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithGoogle();
    navigate("/dashboard");
  };

  const handleUpgrade = () => {
    if (!user) {
      signInWithGoogle();
    }
    upgradeToPremium();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            בחרו איך להתחיל.
          </h1>
          <p className="text-xl text-muted-foreground">
            בלי הפתעות, בלי כוכביות קטנות.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* FREE */}
          <div className="rounded-[2rem] p-10 bg-card border border-border">
            <div className="mb-8">
              <div className="text-base font-medium text-muted-foreground mb-2">חשבון רגיל</div>
              <div className="flex items-baseline gap-2 mb-2">
                <MathBlock className="text-6xl font-bold text-foreground">0 ₪</MathBlock>
              </div>
              <p className="text-muted-foreground text-lg">להתחיל ולהתאהב.</p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "כלים ויזואליים בסיסיים",
                "סיכומים פתוחים לכולם",
                "תרגול לכל הכיתות",
                "ללא צורך בכרטיס אשראי",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg">
                  <span className="mt-1 w-6 h-6 rounded-full bg-secondary grid place-items-center shrink-0">
                    <Check className="w-4 h-4 text-foreground" />
                  </span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>

            {user ? (
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                className="w-full h-14 rounded-2xl text-lg"
              >
                לדף הלימודים שלי
              </Button>
            ) : (
              <GoogleButton onClick={handleSignIn} />
            )}
          </div>

          {/* PREMIUM */}
          <div className="relative rounded-[2rem] p-10 bg-gradient-to-br from-primary to-accent text-white overflow-hidden shadow-2xl-soft shadow-glow">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sm font-medium mb-3 backdrop-blur">
                    <Sparkles className="w-3.5 h-3.5" />
                    הכי פופולרי
                  </div>
                  <div className="text-base font-medium text-white/70 mb-2">אלוגברה פלוס</div>
                  <div className="flex items-baseline gap-2">
                    <MathBlock className="text-6xl font-bold">29 ₪</MathBlock>
                    <span className="text-white/70 text-lg">/ חודש</span>
                  </div>
                  <p className="text-white/70 text-lg mt-2">ביטול בלחיצה, בלי שאלות.</p>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "כל המעבדות האינטראקטיביות",
                  "פותר משוואות שלב-אחר-שלב",
                  "סיכומים מלאים לכל הנושאים",
                  "מעקב התקדמות אישי",
                  "תמיכה ישירה מהמורה",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-lg">
                    <span className="mt-1 w-6 h-6 rounded-full bg-white/20 grid place-items-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleUpgrade}
                className="w-full h-14 rounded-2xl text-lg font-semibold bg-white text-foreground hover:bg-white/95"
              >
                שדרוג לאלוגברה פלוס
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-10 text-base">
          תשלום מאובטח · ביטול בכל רגע · 7 ימי ניסיון
        </p>
      </section>
    </div>
  );
};

export default Pricing;
