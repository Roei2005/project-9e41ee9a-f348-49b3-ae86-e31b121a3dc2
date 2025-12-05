import ActivityCard from "./ActivityCard";
import { Button } from "@/components/ui/button";
import { Crown, ArrowLeft, CheckCircle } from "lucide-react";

const premiumActivities = [
  {
    title: "מעבדת טריגונומטריה",
    description: "פעילות מעמיקה עם סימולציות אינטראקטיביות לטריגונומטריה",
    category: "טריגונומטריה",
    duration: "45 דקות",
    difficulty: "מתקדם" as const,
    isPremium: true,
  },
  {
    title: "פותרי משוואות מתקדם",
    description: "למדו לפתור משוואות מורכבות עם הדרכה שלב אחר שלב",
    category: "אלגברה",
    duration: "30 דקות",
    difficulty: "מתקדם" as const,
    isPremium: true,
  },
  {
    title: "סדרות ופרוגרסיות",
    description: "הבנה מעמיקה של סדרות חשבוניות והנדסיות עם תרגול אינטנסיבי",
    category: "סדרות",
    duration: "35 דקות",
    difficulty: "בינוני" as const,
    isPremium: true,
  },
  {
    title: "חשבון דיפרנציאלי בסיסי",
    description: "מבוא לנגזרות ואינטגרלים בפעילות ויזואלית",
    category: "חשבון אינפי",
    duration: "40 דקות",
    difficulty: "מתקדם" as const,
    isPremium: true,
  },
  {
    title: "הסתברות ומשחקים",
    description: "למדו הסתברות דרך משחקים וסימולציות מעניינות",
    category: "הסתברות",
    duration: "25 דקות",
    difficulty: "בינוני" as const,
    isPremium: true,
  },
  {
    title: "גיאומטריה אנליטית",
    description: "חקרו קווים, מעגלים ופרבולות בסביבה אינטראקטיבית",
    category: "גיאומטריה",
    duration: "35 דקות",
    difficulty: "בינוני" as const,
    isPremium: true,
  },
];

const premiumFeatures = [
  "גישה לכל הפעילויות",
  "סיכומים מקצועיים להורדה",
  "מעקב התקדמות אישי",
  "תמיכה ישירה מהמורה",
];

const PremiumActivities = () => {
  return (
    <section id="premium" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">תוכן פרימיום</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            פעילויות פרימיום
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            פעילויות מתקדמות ומעמיקות יותר, עם חומרי לימוד נלווים וליווי אישי
          </p>
        </div>

        {/* Premium Banner */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                שדרגו לחשבון פרימיום
              </h3>
              <ul className="space-y-2 mb-6">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-primary-foreground/80">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-primary-foreground/60 text-sm mb-1">החל מ-</div>
              <div className="text-4xl font-bold text-accent mb-2">₪49</div>
              <div className="text-primary-foreground/60 text-sm mb-4">לחודש</div>
              <Button variant="hero" size="lg" className="gap-2">
                הצטרפו עכשיו
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumActivities.map((activity, index) => (
            <div
              key={activity.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumActivities;
