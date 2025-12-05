import { Award, BookOpen, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "תלמידים" },
  { icon: BookOpen, value: "50+", label: "פעילויות" },
  { icon: Award, value: "10+", label: "שנות ניסיון" },
  { icon: Heart, value: "100%", label: "מסירות" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-primary/10 to-secondary rounded-3xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-accent/20 rounded-2xl rotate-12 animate-float" />
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-primary/20 rounded-full animate-float animation-delay-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-8xl text-primary/20 font-bold">אלוגברה</div>
              </div>
              
              {/* Placeholder for teacher image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                  <span className="text-6xl">👨‍🏫</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-primary text-sm font-medium">הסיפור שלי</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              מלמד מתמטיקה עם
              <span className="text-accent"> תשוקה</span>
            </h2>
            
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              שלום! אני מורה למתמטיקה כבר למעלה מעשור. הקמתי את אלוגברה מתוך אמונה עמוקה 
              שכל תלמיד יכול להצליח במתמטיקה - צריך רק למצוא את הדרך הנכונה ללמד אותו.
            </p>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              הפעילויות האינטראקטיביות שפיתחתי מבוססות על שנים של ניסיון בכיתה, 
              והן מותאמות לתלמידים בכל הרמות. המטרה שלי היא להפוך את הלמידה לחוויה מהנה ויעילה.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-xl shadow-card"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
