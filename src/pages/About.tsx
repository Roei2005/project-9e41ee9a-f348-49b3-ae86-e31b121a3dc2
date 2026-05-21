import { Link } from "react-router-dom";
import AppNav from "@/components/AppNav";
import { Button } from "@/components/ui/button";
import { Eye, Brain, Heart, Sparkles, MoveLeft, Users, Lightbulb, BookOpen } from "lucide-react";
import teacherImg from "@/assets/teacher-students.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
                <Heart className="w-4 h-4 text-accent" />
                קצת עליי
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-6">
                שלום, אני המורה
                <br />
                <span className="text-gradient-hero">מאחורי אלוגברה.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                כבר שנים אני מלמד מתמטיקה. ראיתי אלפי תלמידים נתקעים באותם מקומות —
                ולמדתי משהו אחד שמשנה הכל: <span className="font-bold text-foreground">המוח שלנו לא אוהב נוסחאות יבשות, הוא אוהב לראות</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button
                    size="xl"
                    className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg h-14 px-8 shadow-2xl-soft group"
                  >
                    לכלים שלנו
                    <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="ghost" size="xl" className="rounded-full text-lg h-14 px-8">
                    למחירים
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-gold/10 to-primary/20 rounded-[2.5rem] blur-2xl" />
              <img
                src={teacherImg}
                alt="המורה מאחורי אלוגברה מסביר לתלמידים"
                width={1920}
                height={1080}
                className="relative rounded-[2rem] shadow-2xl-soft w-full h-auto object-cover border border-border"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-2xl-soft hidden md:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold grid place-items-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground tabular-nums leading-none">+500</div>
                  <div className="text-xs text-muted-foreground mt-0.5">תלמידים</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-5">
              <Lightbulb className="w-4 h-4" />
              איך זה התחיל
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              למה בכלל בניתי את זה?
            </h2>
          </div>

          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              שנים בכיתה, אני עומד מול הלוח ומסביר. רוב התלמידים מבינים — אבל יש כאלה שעד שמגיעים הביתה, הכל נמחק.
              לא בגלל שהם לא חכמים. בגלל שהם <span className="font-bold text-foreground">לא ראו את זה זז</span>.
            </p>
            <p>
              מתמטיקה זה לא מילים. זה <span className="font-bold text-foreground">תנועה, יחסים, סיבה ותוצאה</span>.
              ברגע שתלמיד מזיז סליידר וגרף משתנה מולו — הוא מבין יותר טוב ממה שעשרה הסברים יעשו.
            </p>
            <p>
              לכן בניתי את אלוגברה. לא עוד אתר עם דפי נוסחאות. <span className="font-bold text-foreground">כלים שזזים, מסבירים, ומגיבים</span>.
              כל מה שניסיתי להעביר בכיתה — עכשיו אצלכם במסך, מתי שתרצו.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              שלושה דברים שמנחים אותי.
            </h2>
            <p className="text-xl text-muted-foreground">לא סיסמאות. ככה אני באמת מלמד.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Eye,
                title: "רואים, לא מדמיינים",
                desc: "כל מושג מתמטי מקבל ויזואל שזז. המוח שלכם נדלק אחרת כשרואים.",
              },
              {
                icon: Brain,
                title: "פשוט, לא יבש",
                desc: "בלי שפה גבוהה ומפחידה. מסבירים כמו שאני מסביר בכיתה — בגובה העיניים.",
              },
              {
                icon: Sparkles,
                title: "מבינים, לא משננים",
                desc: "כשמבינים לעומק — לא שוכחים. זה ההבדל בין '95 במבחן' ל'95 בבגרות'.",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl p-8 bg-card border border-border hover:-translate-y-1 hover:shadow-2xl-soft transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-md mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] bg-hero-gradient p-12 md:p-20 text-center overflow-hidden shadow-2xl-soft">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                בואו תראו את ההבדל
                <br />
                במו עיניכם.
              </h2>
              <Link to="/dashboard">
                <Button
                  size="xl"
                  className="rounded-full bg-white text-foreground hover:bg-white/95 text-lg h-14 px-10 shadow-2xl group"
                >
                  התחילו עכשיו בחינם
                  <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center text-muted-foreground">
          © {new Date().getFullYear()} אלוגברה · כל הזכויות שמורות
        </div>
      </footer>
    </div>
  );
};

export default About;
