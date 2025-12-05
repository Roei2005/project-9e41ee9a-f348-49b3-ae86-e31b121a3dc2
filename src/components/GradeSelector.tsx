import { Hexagon, LineChart, Sigma } from "lucide-react";
import { cn } from "@/lib/utils";

export type GradeLevel = "middle" | "tenth" | "bagrut" | null;

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
}

const grades = [
  {
    id: "middle" as const,
    title: "חטיבת ביניים (ז'-ט')",
    subtitle: "בסיס חזק באלגברה וגיאומטריה",
    icon: Hexagon,
    color: "from-emerald-500 to-teal-600",
    hoverColor: "group-hover:from-emerald-400 group-hover:to-teal-500",
  },
  {
    id: "tenth" as const,
    title: "תיכון - כיתה י'",
    subtitle: "פונקציות, אנליטית והכנה לבגרות",
    icon: LineChart,
    color: "from-blue-500 to-indigo-600",
    hoverColor: "group-hover:from-blue-400 group-hover:to-indigo-500",
  },
  {
    id: "bagrut" as const,
    title: "הכנה לבגרות (יא'-יב')",
    subtitle: "חשבון דיפרנציאלי, אינטגרלי וטריגו",
    icon: Sigma,
    color: "from-purple-500 to-pink-600",
    hoverColor: "group-hover:from-purple-400 group-hover:to-pink-500",
  },
];

const GradeSelector = ({ selectedGrade, onSelectGrade }: GradeSelectorProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            בחרו את הרמה שלכם
          </h2>
          <p className="text-muted-foreground">
            לחצו על הקטגוריה המתאימה לכם כדי לראות פעילויות רלוונטיות
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {grades.map((grade) => {
            const Icon = grade.icon;
            const isSelected = selectedGrade === grade.id;
            
            return (
              <button
                key={grade.id}
                onClick={() => onSelectGrade(isSelected ? null : grade.id)}
                className={cn(
                  "group relative p-8 rounded-2xl border-2 transition-all duration-300 text-right",
                  "hover:shadow-lg hover:-translate-y-1",
                  isSelected
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border bg-card hover:border-accent/50"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br transition-all duration-300",
                    grade.color,
                    grade.hoverColor
                  )}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {grade.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {grade.subtitle}
                </p>

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-accent animate-pulse-soft" />
                )}
              </button>
            );
          })}
        </div>

        {selectedGrade && (
          <div className="text-center mt-6">
            <button
              onClick={() => onSelectGrade(null)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              הצג את כל הפעילויות
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GradeSelector;
