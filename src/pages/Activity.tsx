import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ActivityCard from "@/components/ActivityCard";

// Mock data - in real app this would come from a database
const activitiesData: Record<string, {
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "קל" | "בינוני" | "מתקדם";
  isPremium: boolean;
  htmlContent?: string;
}> = {
  "1": {
    title: "משחק השברים",
    description: "תרגול שברים בצורה משעשעת עם משחק אינטראקטיבי",
    category: "חשבון",
    duration: "15 דקות",
    difficulty: "קל",
    isPremium: false,
  },
  "2": {
    title: "גיאומטריה בחיי היומיום",
    description: "גלו צורות גיאומטריות בסביבתכם דרך פעילות מעשית",
    category: "גיאומטריה",
    duration: "25 דקות",
    difficulty: "קל",
    isPremium: false,
  },
  "3": {
    title: "יסודות האלגברה",
    description: "הכירו משתנים וביטויים אלגבריים בצורה אינטראקטיבית",
    category: "אלגברה",
    duration: "30 דקות",
    difficulty: "בינוני",
    isPremium: true,
  },
};

const relatedActivities = [
  {
    id: "2",
    title: "גיאומטריה בחיי היומיום",
    description: "גלו צורות גיאומטריות בסביבתכם",
    category: "גיאומטריה",
    duration: "25 דקות",
    difficulty: "קל" as const,
    isPremium: false,
  },
  {
    id: "3",
    title: "יסודות האלגברה",
    description: "הכירו משתנים וביטויים אלגבריים",
    category: "אלגברה",
    duration: "30 דקות",
    difficulty: "בינוני" as const,
    isPremium: true,
  },
];

const Activity = () => {
  const { id } = useParams<{ id: string }>();
  const activity = id ? activitiesData[id] : null;

  if (!activity) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            הפעילות לא נמצאה
          </h1>
          <Link to="/">
            <Button variant="outline">חזרה לדף הבית</Button>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    "קל": "bg-success/10 text-success",
    "בינוני": "bg-accent/10 text-accent",
    "מתקדם": "bg-destructive/10 text-destructive",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium">חזרה</span>
            </Link>

            <h1 className="text-lg font-bold text-foreground truncate max-w-md">
              {activity.title}
            </h1>

            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Activity Info */}
            <div className="bg-card rounded-2xl p-6 mb-6 border border-border">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary" className="gap-1">
                  <Tag className="w-3 h-3" />
                  {activity.category}
                </Badge>
                <Badge className={difficultyColors[activity.difficulty]}>
                  {activity.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>כל הרמות</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">
                {activity.title}
              </h2>
              <p className="text-muted-foreground">{activity.description}</p>
            </div>

            {/* Activity Container - For HTML/iframe content */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div 
                className="w-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-muted/30"
              >
                {/* 
                  HTML Content Container
                  You can embed your custom HTML widgets/iframes here.
                  Example: <iframe src="your-widget-url" className="w-full h-full" />
                */}
                <div className="text-center p-8">
                  <div className="text-6xl text-primary/20 font-bold mb-4">∫</div>
                  <p className="text-muted-foreground">
                    מקום להטמעת תוכן אינטראקטיבי
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    HTML / iframe / widget
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Related Activities */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">
                פעילויות נוספות
              </h3>
              <div className="space-y-4">
                {relatedActivities
                  .filter((a) => a.id !== id)
                  .map((activity) => (
                    <Link key={activity.id} to={`/activity/${activity.id}`}>
                      <div className="transform hover:scale-[1.02] transition-transform">
                        <ActivityCard {...activity} />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Activity;
