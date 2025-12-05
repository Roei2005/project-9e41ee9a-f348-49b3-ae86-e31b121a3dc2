import ActivityCard from "./ActivityCard";
import { Sparkles } from "lucide-react";

const freeActivities = [
  {
    title: "חקירת פונקציות ריבועיות",
    description: "למדו לזהות ולנתח פונקציות ריבועיות דרך פעילות אינטראקטיבית מהנה",
    category: "אלגברה",
    duration: "20 דקות",
    difficulty: "בינוני" as const,
    isPremium: false,
  },
  {
    title: "משחק השברים",
    description: "תרגול שברים בצורה משעשעת עם משחק אינטראקטיבי",
    category: "חשבון",
    duration: "15 דקות",
    difficulty: "קל" as const,
    isPremium: false,
  },
  {
    title: "גיאומטריה בחיי היומיום",
    description: "גלו צורות גיאומטריות בסביבתכם דרך פעילות מעשית",
    category: "גיאומטריה",
    duration: "25 דקות",
    difficulty: "קל" as const,
    isPremium: false,
  },
];

const FreeActivities = () => {
  return (
    <section id="free" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-success" />
            <span className="text-success text-sm font-medium">חינם לגמרי</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            פעילויות חינם
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            התחילו ללמוד עכשיו עם מגוון פעילויות חינמיות. בלי רישום, בלי תשלום, פשוט התחילו!
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeActivities.map((activity, index) => (
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

export default FreeActivities;
