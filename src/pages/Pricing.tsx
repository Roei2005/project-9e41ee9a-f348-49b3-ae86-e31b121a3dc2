import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Crown, ShieldCheck } from "lucide-react";
import AppNav from "@/components/AppNav";
import { Button } from "@/components/ui/button";
import GoogleButton from "@/components/GoogleButton";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

interface Tier {
  id: "free" | "plus" | "premium";
  name: string;
  tagline: string;
  price: string;
  unit?: string;
  features: string[];
  cta: string;
  badge?: string;
  highlight?: boolean;
  variant: "neutral" | "accent" | "gold";
}

const tiers: Tier[] = [
  {
    id: "free",
    name: "חינם",
    tagline: "להתחיל ולהתאהב.",
    price: "0 ₪",
    features: [
      "כלים ויזואליים בסיסיים",
      "סיכומים פתוחים לכולם",
      "תרגול לכל הכיתות",
      "ללא צורך בכרטיס אשראי",
    ],
    cta: "להתחיל בחינם",
    variant: "neutral",
  },
  {
    id: "plus",
    name: "אלוגברה פלוס",
    tagline: "כל הכלים פתוחים.",
    price: "29 ₪",
    unit: "/ חודש",
    badge: "הכי פופולרי",
    highlight: true,
    features: [
      "כל המעבדות האינטראקטיביות",
      "פותר משוואות שלב-אחר-שלב",
      "סיכומים מלאים לכל הנושאים",
      "מעקב התקדמות אישי",
    ],
    cta: "שדרוג לפלוס",
    variant: "accent",
  },
  {
    id: "premium",
    name: "אלוגברה פרימיום",
    tagline: "פלוס + מורה זמין בשבילך.",
    price: "99 ₪",
    unit: "/ חודש",
    badge: "1 על 1",
    features: [
      "כל מה שיש בפלוס",
      "כל הסיכומים המלאים",
      "מענה ממורה מוסמך לכל שאלה",
      "זמינות מלאה ועזרה בשאלות",
      "ליווי אישי בחומר",
    ],
    cta: "אני רוצה פרימיום",
    variant: "gold",
  },
];

const Pricing = () => {
  const { user, signInWithGoogle, upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithGoogle();
    navigate("/dashboard");
  };

  const handleSelect = (tier: Tier) => {
    if (tier.id === "free") {
      if (!user) signInWithGoogle();
      navigate("/dashboard");
      return;
    }
    if (!user) signInWithGoogle();
    upgradeToPremium();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-5">
            <ShieldCheck className="w-4 h-4" />
            תשלום מאובטח · ביטול בכל רגע
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            בחרו איך להתחיל.
          </h1>
          <p className="text-xl text-muted-foreground">
            בלי הפתעות, בלי כוכביות קטנות.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              user={user}
              onSelect={() => handleSelect(tier)}
              onGoogleSignIn={handleSignIn}
            />
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-base">
          תשלום מאובטח · ביטול בכל רגע · 7 ימי ניסיון
        </p>
      </section>
    </div>
  );
};

const TierCard = ({
  tier,
  user,
  onSelect,
  onGoogleSignIn,
}: {
  tier: Tier;
  user: ReturnType<typeof useAuth>["user"];
  onSelect: () => void;
  onGoogleSignIn: () => void;
}) => {
  const isAccent = tier.variant === "accent";
  const isGold = tier.variant === "gold";

  return (
    <div
      className={cn(
        "relative rounded-[2rem] p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1",
        isAccent &&
          "bg-gradient-to-br from-primary to-accent text-white shadow-2xl-soft shadow-glow border-0",
        isGold &&
          "bg-card border-2 border-gold/40 shadow-gold",
        tier.variant === "neutral" && "bg-card border border-border hover:shadow-card"
      )}
    >
      {tier.badge && (
        <div
          className={cn(
            "absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold shadow-md",
            isAccent && "bg-white text-primary",
            isGold && "bg-gradient-to-r from-gold to-gold-light text-foreground",
            tier.variant === "neutral" && "bg-foreground text-background"
          )}
        >
          {isAccent && <Sparkles className="w-3 h-3 inline ml-1" />}
          {isGold && <Crown className="w-3 h-3 inline ml-1" />}
          {tier.badge}
        </div>
      )}

      <div className="mb-6">
        <div
          className={cn(
            "text-base font-semibold mb-2",
            isAccent ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {tier.name}
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span
            className={cn(
              "text-5xl md:text-6xl font-black tracking-tight",
              isAccent ? "text-white" : "text-foreground"
            )}
          >
            {tier.price}
          </span>
          {tier.unit && (
            <span
              className={cn(
                "text-lg",
                isAccent ? "text-white/70" : "text-muted-foreground"
              )}
            >
              {tier.unit}
            </span>
          )}
        </div>
        <p
          className={cn(
            "text-base",
            isAccent ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {tier.tagline}
        </p>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {tier.features.map((t) => (
          <li key={t} className="flex items-start gap-3 text-base">
            <span
              className={cn(
                "mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0",
                isAccent ? "bg-white/20" : isGold ? "bg-gold/20" : "bg-secondary"
              )}
            >
              <Check
                className={cn(
                  "w-3.5 h-3.5",
                  isAccent ? "text-white" : isGold ? "text-gold-dark" : "text-foreground"
                )}
              />
            </span>
            <span className={isAccent ? "text-white" : "text-foreground"}>{t}</span>
          </li>
        ))}
      </ul>

      {tier.id === "free" && !user ? (
        <GoogleButton onClick={onGoogleSignIn} />
      ) : (
        <Button
          onClick={onSelect}
          className={cn(
            "w-full h-13 rounded-2xl text-base font-semibold h-14",
            isAccent && "bg-white text-foreground hover:bg-white/95",
            isGold &&
              "bg-gradient-to-r from-gold to-gold-light text-foreground hover:opacity-95",
            tier.variant === "neutral" &&
              "bg-foreground text-background hover:bg-foreground/90"
          )}
        >
          {tier.cta}
        </Button>
      )}
    </div>
  );
};

export default Pricing;
