export type GradeId = "7" | "8" | "9" | "10" | "11" | "12";

export interface Tool {
  id: string;
  title: string;
  blurb: string;
  premium: boolean;
  hero?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  tools: Tool[];
}

export const grades: { id: GradeId; label: string; hint: string }[] = [
  { id: "7", label: "כיתה ז'", hint: "מספרים, אחוזים והיכרות ראשונה" },
  { id: "8", label: "כיתה ח'", hint: "משוואות ופונקציה קווית" },
  { id: "9", label: "כיתה ט'", hint: "ביטויים, פרבולה ומשפט פיתגורס" },
  { id: "10", label: "כיתה י'", hint: "פונקציות, גיאומטריה אנליטית" },
  { id: "11", label: 'כיתה י"א', hint: "טריגונומטריה וחשבון דיפרנציאלי" },
  { id: "12", label: 'כיתה י"ב', hint: "הכנה לבגרות, אינטגרלים" },
];

export const curriculum: Record<GradeId, Topic[]> = {
  "7": [
    {
      id: "numbers", title: "מספרים ופעולות", emoji: "🔢",
      tools: [
        { id: "fractions-visual", title: "שברים על המסך", blurb: "מחלקים, משווים וצובעים שברים.", premium: false },
        { id: "percent-lab", title: "אחוזים בקליק", blurb: "אחוז מתוך כמות — חי על המסך.", premium: true },
      ],
    },
    {
      id: "geo-basics", title: "גיאומטריה ראשונה", emoji: "📐",
      tools: [
        { id: "angles", title: "זוויות שזזות", blurb: "מסובבים זווית ורואים מה קורה.", premium: false },
      ],
    },
  ],
  "8": [
    {
      id: "equations", title: "משוואות", emoji: "⚖️",
      tools: [
        { id: "balance", title: "מאזניים של משוואה", blurb: "פותרים בעזרת איזון ויזואלי.", premium: false },
        { id: "step-solver", title: "פותר שלב-אחר-שלב", blurb: "הקלידו משוואה, נראה כל מהלך.", premium: true },
      ],
    },
    {
      id: "linear", title: "פונקציה קווית", emoji: "📈",
      tools: [
        { id: "linear-lab", title: "מעבדת פונקציה קווית", blurb: "גררו שיפוע וחיתוך, ראו הכל בזמן אמת.", premium: false, hero: true },
        { id: "two-points", title: "ישר דרך שתי נקודות", blurb: "סמנו, וקבלו את המשוואה.", premium: true },
      ],
    },
  ],
  "9": [
    {
      id: "expr", title: "ביטויים אלגבריים", emoji: "🧮",
      tools: [
        { id: "expand", title: "פתיחת סוגריים בקליק", blurb: "רואים איך כל איבר מתחבר.", premium: false },
        { id: "factor", title: "פירוק לגורמים", blurb: "מורידים את ה-x החוצה צעד אחרי צעד.", premium: true },
      ],
    },
    {
      id: "parabola", title: "פרבולה", emoji: "🎯",
      tools: [
        { id: "parabola-lab", title: "מעבדת פרבולה", blurb: "משחקים עם a, b, c ורואים איך זה משפיע.", premium: false, hero: true },
      ],
    },
    {
      id: "pyth", title: "פיתגורס", emoji: "📏",
      tools: [
        { id: "pyth-visual", title: "הוכחה ויזואלית", blurb: "מזיזים ריבועים ומבינים למה זה עובד.", premium: true },
      ],
    },
  ],
  "10": [
    {
      id: "func", title: "פונקציות", emoji: "🌊",
      tools: [
        { id: "translate", title: "הזזות והרחבות", blurb: "מזיזים את הפונקציה ורואים את הכלל.", premium: false },
        { id: "intersect", title: "נקודות חיתוך", blurb: "מוצאים מתי שתי פונקציות נפגשות.", premium: true },
      ],
    },
    {
      id: "analytic", title: "גיאומטריה אנליטית", emoji: "🗺️",
      tools: [
        { id: "circle-lab", title: "מעגל בשתי נקודות", blurb: "בונים מעגל בעכבר אחד.", premium: true },
      ],
    },
  ],
  "11": [
    {
      id: "trig", title: "טריגונומטריה", emoji: "🔺",
      tools: [
        { id: "unit-circle", title: "מעגל היחידה החי", blurb: "מסובבים זווית, רואים סינוס וקוסינוס.", premium: false },
        { id: "trig-solve", title: "פותר משוואות טריגו", blurb: "פתרון מלא עם כל הפתרונות.", premium: true },
      ],
    },
    {
      id: "deriv", title: "נגזרות", emoji: "💨",
      tools: [
        { id: "tangent", title: "המשיק שזז", blurb: "גוררים נקודה, רואים את הנגזרת קופצת.", premium: false, hero: true },
        { id: "extrema", title: "מציאת קיצון", blurb: "ניתוח מלא של פונקציה.", premium: true },
      ],
    },
  ],
  "12": [
    {
      id: "integral", title: "אינטגרלים", emoji: "∫",
      tools: [
        { id: "area-under", title: "שטח מתחת לגרף", blurb: "רואים את השטח גדל בזמן אמת.", premium: false },
        { id: "integral-solver", title: "פותר אינטגרלים", blurb: "צעד-אחר-צעד עם הסבר.", premium: true },
      ],
    },
    {
      id: "bagrut", title: "הכנה לבגרות", emoji: "🎓",
      tools: [
        { id: "past-exams", title: "בגרויות עם פתרון מלא", blurb: "כל שאלה — עם וידאו והסבר.", premium: true },
      ],
    },
  ],
};
