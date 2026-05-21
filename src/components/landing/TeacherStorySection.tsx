import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeft, Quote } from "lucide-react";
import teacherImg from "@/assets/teacher-students.jpg";

const TeacherStorySection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

    <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        {/* Image */}
        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-gold/15 to-primary/20 rounded-[2.5rem] blur-2xl" />
          <img
            src={teacherImg}
            alt="המורה של אלוגברה עם תלמידים בכיתה"
            width={1920}
            height={1080}
            loading="lazy"
            className="relative rounded-[2rem] shadow-2xl-soft w-full h-auto object-cover border border-border"
          />
          <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-5 py-3 shadow-2xl-soft hidden md:flex items-center gap-3">
            <Quote className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">סיפור אמיתי מהכיתה</span>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold mb-5">
            למה בכלל בניתי את זה
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            הניסיון בכיתה
            <br />
            <span className="text-gradient-hero">לימד אותי דבר אחד.</span>
          </h2>

          <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              שנים שאני מלמד מתמטיקה. שמתי לב לדבר ברור — תלמידים{" "}
              <span className="font-bold text-foreground">מבינים משמעותית יותר טוב</span>{" "}
              כשיש להם דברים <span className="font-bold text-foreground">דינאמיים ואינטראקטיביים</span>.
            </p>
            <p>
              במקום מתמטיקה יבשה והעתקה מהלוח — המוח שלנו{" "}
              <span className="font-bold text-foreground">רואה את הדברים בצורה מדהימה</span>.
              משנים פרמטר, הגרף זז. גוררים נקודה, הזווית משתנה. ככה הראש קולט באמת.
            </p>
            <p>
              לכן בניתי את אלוגברה — את הכלים שתמיד רציתי שיהיו לתלמידים שלי בבית.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/about">
              <Button
                size="xl"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg h-14 px-8 group"
              >
                קצת עליי
                <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="xl" className="rounded-full text-lg h-14 px-8">
                לכלים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeacherStorySection;
