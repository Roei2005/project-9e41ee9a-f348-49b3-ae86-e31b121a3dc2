import ActivityCard from "./ActivityCard";
import { GradeLevel } from "./GradeSelector";

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "קל" | "בינוני" | "מתקדם";
  isPremium: boolean;
  gradeLevel: GradeLevel;
}

const allActivities: Activity[] = [
  // Middle School (ז'-ט')
  {
    id: "1",
    title: "משחק השברים",
    description: "תרגול שברים בצורה משעשעת עם משחק אינטראקטיבי",
    category: "חשבון",
    duration: "15 דקות",
    difficulty: "קל",
    isPremium: false,
    gradeLevel: "middle",
  },
  {
    id: "2",
    title: "גיאומטריה בחיי היומיום",
    description: "גלו צורות גיאומטריות בסביבתכם דרך פעילות מעשית",
    category: "גיאומטריה",
    duration: "25 דקות",
    difficulty: "קל",
    isPremium: false,
    gradeLevel: "middle",
  },
  {
    id: "3",
    title: "יסודות האלגברה",
    description: "הכירו משתנים וביטויים אלגבריים בצורה אינטראקטיבית",
    category: "אלגברה",
    duration: "30 דקות",
    difficulty: "בינוני",
    isPremium: true,
    gradeLevel: "middle",
  },
  // 10th Grade (י')
  {
    id: "4",
    title: "חקירת פונקציות ריבועיות",
    description: "למדו לזהות ולנתח פונקציות ריבועיות דרך פעילות אינטראקטיבית מהנה",
    category: "פונקציות",
    duration: "20 דקות",
    difficulty: "בינוני",
    isPremium: false,
    gradeLevel: "tenth",
  },
  {
    id: "5",
    title: "גיאומטריה אנליטית",
    description: "חקרו קווים, מעגלים ופרבולות בסביבה אינטראקטיבית",
    category: "גיאומטריה אנליטית",
    duration: "35 דקות",
    difficulty: "בינוני",
    isPremium: true,
    gradeLevel: "tenth",
  },
  {
    id: "6",
    title: "הסתברות ומשחקים",
    description: "למדו הסתברות דרך משחקים וסימולציות מעניינות",
    category: "הסתברות",
    duration: "25 דקות",
    difficulty: "בינוני",
    isPremium: false,
    gradeLevel: "tenth",
  },
  // Bagrut Prep (יא'-יב')
  {
    id: "7",
    title: "מעבדת טריגונומטריה",
    description: "פעילות מעמיקה עם סימולציות אינטראקטיביות לטריגונומטריה",
    category: "טריגונומטריה",
    duration: "45 דקות",
    difficulty: "מתקדם",
    isPremium: true,
    gradeLevel: "bagrut",
  },
  {
    id: "8",
    title: "חשבון דיפרנציאלי בסיסי",
    description: "מבוא לנגזרות ואינטגרלים בפעילות ויזואלית",
    category: "חדו״א",
    duration: "40 דקות",
    difficulty: "מתקדם",
    isPremium: true,
    gradeLevel: "bagrut",
  },
  {
    id: "9",
    title: "סדרות ופרוגרסיות",
    description: "הבנה מעמיקה של סדרות חשבוניות והנדסיות עם תרגול אינטנסיבי",
    category: "סדרות",
    duration: "35 דקות",
    difficulty: "בינוני",
    isPremium: false,
    gradeLevel: "bagrut",
  },
];

interface ActivitiesSectionProps {
  selectedGrade: GradeLevel;
}

const ActivitiesSection = ({ selectedGrade }: ActivitiesSectionProps) => {
  const filteredActivities = selectedGrade
    ? allActivities.filter((a) => a.gradeLevel === selectedGrade)
    : allActivities;

  const freeActivities = filteredActivities.filter((a) => !a.isPremium);
  const premiumActivities = filteredActivities.filter((a) => a.isPremium);

  return (
    <section id="activities" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Free Activities */}
        {freeActivities.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                פעילויות חינם
              </h2>
              <p className="text-muted-foreground">
                התחילו ללמוד עכשיו - בלי רישום, בלי תשלום
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ActivityCard {...activity} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Premium Activities */}
        {premiumActivities.length > 0 && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                פעילויות פרימיום
              </h2>
              <p className="text-muted-foreground">
                תוכן מתקדם ומעמיק יותר למנויים
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ActivityCard {...activity} />
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              אין פעילויות זמינות בקטגוריה זו כרגע
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
