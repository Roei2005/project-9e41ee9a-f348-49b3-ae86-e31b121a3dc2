import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const annualFeatures = [
    "גישה מלאה לכל הפעילויות לשנה",
    "תרגול ללא הגבלה",
    "גישה מכל מכשיר",
    "סיכומים להורדה",
  ];

  const monthlyFeatures = [
    "גישה מלאה לכל הפעילויות",
    "תרגול ללא הגבלה",
    "גישה מכל מכשיר",
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">מחירים</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            השקיעו בעתיד שלכם במחיר של שיעור פרטי אחד
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            בחרו את החבילה המתאימה לכם והתחילו ללמוד עוד היום
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Annual Plan - Highlighted */}
          <div className="relative">
            {/* Recommended Badge */}
            <div className="absolute -top-4 right-1/2 translate-x-1/2 z-10">
              <div className="bg-gradient-to-l from-gold to-gold-light text-foreground px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-gold">
                <Star className="w-4 h-4" fill="currentColor" />
                מומלץ
              </div>
            </div>

            <div className="h-full bg-card rounded-2xl p-8 border-2 border-accent shadow-lg relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-gold to-gold-light" />
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  חבילה שנתית
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-accent">149</span>
                  <span className="text-xl text-foreground">₪</span>
                </div>
                <p className="text-muted-foreground mt-2">חד פעמי לשנה שלמה</p>
              </div>

              <ul className="space-y-4 mb-8">
                {annualFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="premium" size="lg" className="w-full">
                התחל עכשיו
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                חסכון של 67% לעומת מנוי חודשי
              </p>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="h-full bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                מנוי חודשי
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">49</span>
                <span className="text-xl text-foreground">₪</span>
              </div>
              <p className="text-muted-foreground mt-2">לחודש</p>
            </div>

            <ul className="space-y-4 mb-8">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" className="w-full">
              בחר חודשי
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              ניתן לביטול בכל עת
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>תשלום מאובטח</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>גישה מיידית</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
