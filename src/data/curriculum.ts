export type GradeId = "7" | "8" | "9" | "10";

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
  { id: "7", label: "כיתה ז'", hint: "מספרים שלמים, שברים, אחוזים והיכרות עם המשתנה" },
  { id: "8", label: "כיתה ח'", hint: "משוואות, יחס ופרופורציה, פונקציה קווית, סטטיסטיקה" },
  { id: "9", label: "כיתה ט'", hint: "פירוק לגורמים, פרבולה, פיתגורס, גיאומטריה ושטחים" },
  { id: "10", label: "כיתה י'", hint: "פונקציות מתקדמות, גיאומטריה אנליטית, טריגונומטריה ראשונה" },
];

// Curriculum aligned with the 2026 study program — grades 7–10 only.
export const curriculum: Record<GradeId, Topic[]> = {
  "7": [
    {
      id: "numbers", title: "מספרים שלמים ושברים", emoji: "🔢",
      tools: [
        { id: "fractions-visual", title: "שברים על המסך", blurb: "מחלקים, משווים וצובעים שברים.", premium: false, hero: true },
        { id: "negatives", title: "מספרים שליליים על הציר", blurb: "מבינים מינוס דרך תנועה על הציר.", premium: false },
        { id: "percent-lab", title: "אחוזים בקליק", blurb: "אחוז מתוך כמות — חי על המסך.", premium: true },
      ],
    },
    {
      id: "vars", title: "היכרות עם המשתנה", emoji: "✨",
      tools: [
        { id: "expr-builder", title: "ביטוי אלגברי חי", blurb: "מחליפים x ורואים את הביטוי משתנה.", premium: false },
        { id: "simple-eq", title: "משוואה פשוטה", blurb: "פותרים על מאזניים ויזואליים.", premium: true },
      ],
    },
    {
      id: "geo-basics", title: "גיאומטריה ראשונה", emoji: "📐",
      tools: [
        { id: "angles", title: "זוויות שזזות", blurb: "מסובבים זווית ורואים מה קורה.", premium: false },
        { id: "perimeter-area", title: "היקף ושטח", blurb: "משחקים עם צורות וגדלים.", premium: true },
      ],
    },
  ],
  "8": [
    {
      id: "equations", title: "משוואות ואי שוויונות", emoji: "⚖️",
      tools: [
        { id: "balance", title: "מאזניים של משוואה", blurb: "פותרים בעזרת איזון ויזואלי.", premium: false },
        { id: "step-solver", title: "פותר שלב-אחר-שלב", blurb: "הקלידו משוואה, נראה כל מהלך.", premium: true, hero: true },
        { id: "word-problems", title: "בעיות מילוליות", blurb: "תרגום מילים למשוואה — צעד צעד.", premium: true },
      ],
    },
    {
      id: "linear", title: "פונקציה קווית", emoji: "📈",
      tools: [
        { id: "linear-lab", title: "מעבדת פונקציה קווית", blurb: "גררו שיפוע וחיתוך, ראו הכל בזמן אמת.", premium: false },
        { id: "two-points", title: "ישר דרך שתי נקודות", blurb: "סמנו, וקבלו את המשוואה.", premium: true },
      ],
    },
    {
      id: "ratio", title: "יחס ופרופורציה", emoji: "⚗️",
      tools: [
        { id: "ratio-mixer", title: "מערבב יחסים", blurb: "מערבבים צבעים לפי יחס.", premium: false },
      ],
    },
    {
      id: "stats", title: "סטטיסטיקה ראשונה", emoji: "📊",
      tools: [
        { id: "data-vis", title: "ויזואליזציית נתונים", blurb: "ממוצע, חציון ושכיח — חי.", premium: true },
      ],
    },
  ],
  "9": [
    {
      id: "expr", title: "ביטויים אלגבריים ופירוק לגורמים", emoji: "🧮",
      tools: [
        { id: "expand", title: "פתיחת סוגריים בקליק", blurb: "רואים איך כל איבר מתחבר.", premium: false },
        { id: "factor", title: "פירוק לגורמים", blurb: "מורידים את ה-x החוצה צעד אחרי צעד.", premium: true, hero: true },
      ],
    },
    {
      id: "parabola", title: "פונקציה ריבועית — פרבולה", emoji: "🎯",
      tools: [
        { id: "parabola-lab", title: "מעבדת פרבולה", blurb: "משחקים עם a, b, c ורואים איך זה משפיע.", premium: false },
        { id: "parabola-roots", title: "נקודות חיתוך עם הצירים", blurb: "מוצאים שורשים בעין.", premium: true },
      ],
    },
    {
      id: "pyth", title: "משפט פיתגורס", emoji: "📏",
      tools: [
        { id: "pyth-visual", title: "הוכחה ויזואלית", blurb: "מזיזים ריבועים ומבינים למה זה עובד.", premium: false },
        { id: "pyth-solver", title: "פותר פיתגורס", blurb: "כל מצב — עם תרשים והסבר.", premium: true },
      ],
    },
    {
      id: "geo9", title: "גיאומטריה: מצולעים ושטחים", emoji: "🔷",
      tools: [
        { id: "congruence", title: "חפיפת משולשים חיה", blurb: "מזיזים משולש על משולש ובודקים.", premium: false },
      ],
    },
  ],
  "10": [
    {
      id: "func", title: "פונקציות והתמרות", emoji: "🌊",
      tools: [
        { id: "translate", title: "הזזות והרחבות", blurb: "מזיזים את הפונקציה ורואים את הכלל.", premium: false, hero: true },
        { id: "intersect", title: "נקודות חיתוך", blurb: "מוצאים מתי שתי פונקציות נפגשות.", premium: true },
      ],
    },
    {
      id: "analytic", title: "גיאומטריה אנליטית", emoji: "🗺️",
      tools: [
        { id: "line-eq", title: "משוואת הישר", blurb: "שיפוע, מרחק, מקבילים וניצבים.", premium: false },
        { id: "circle-lab", title: "מעגל בשתי נקודות", blurb: "בונים מעגל בעכבר אחד.", premium: true },
      ],
    },
    {
      id: "trig-intro", title: "טריגונומטריה במשולש ישר זווית", emoji: "🔺",
      tools: [
        { id: "sin-cos-tan", title: "סינוס קוסינוס טנגנס", blurb: "ממחישים את היחסים במשולש.", premium: false },
        { id: "trig-solver", title: "פותר משולש ישר זווית", blurb: "נתון אחד — קבלו את כל השאר.", premium: true },
      ],
    },
    {
      id: "stats10", title: "סטטיסטיקה והסתברות", emoji: "🎲",
      tools: [
        { id: "prob-tree", title: "עץ הסתברות", blurb: "בונים מסלולים ומחשבים סיכויים.", premium: true },
      ],
    },
  ],
};
