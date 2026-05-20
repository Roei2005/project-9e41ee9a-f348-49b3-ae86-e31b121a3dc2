import { Eye, MessageCircleQuestion, Zap, BookOpenCheck } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "רואים את החומר בעיניים",
    desc: "כל מושג מצויר, זז, ומגיב לכם. בלי לדמיין בראש — פשוט מסתכלים.",
  },
  {
    icon: BookOpenCheck,
    title: "הסברים פשוטים, בתכלס",
    desc: "בלי חפירות מיותרות. רק מה שצריך כדי להבין ולהמשיך הלאה.",
  },
  {
    icon: Zap,
    title: "הכל קורה בלייב",
    desc: "משנים מספר, הגרף זז מיד. רואים סיבה ותוצאה ברגע.",
  },
  {
    icon: MessageCircleQuestion,
    title: "דוגמאות לכל דבר",
    desc: "כל הסבר מגיע עם דוגמה אמיתית — לא רק נוסחאות.",
  },
];

const LearnAloneSection = () => (
  <section className="py-24 relative bg-gradient-to-b from-background to-secondary/40">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <div className="rounded-[2.5rem] bg-card border border-border p-10 md:p-16 shadow-2xl-soft relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold mb-5">
              שאלה אמיתית מתלמידים
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5">
              "אבל רגע, אני לא מסתדר ללמוד לבד.
              <br />
              זה יעזור לי?"
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              כן. וזה לא סתם "ללמוד לבד". זה אחרת.
              <br />
              אלו כלים שעוזרים לכם <span className="font-bold text-foreground">לראות את זה בעיניים</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-5 items-start p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{p.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LearnAloneSection;
