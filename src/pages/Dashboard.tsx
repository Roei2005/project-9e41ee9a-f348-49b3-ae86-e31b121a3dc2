import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppNav from "@/components/AppNav";
import PremiumModal from "@/components/PremiumModal";
import { useAuth } from "@/contexts/AuthContext";
import { curriculum, grades, GradeId, Tool } from "@/data/curriculum";
import { Lock, Sparkles, Play, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState<GradeId | null>(null);
  const [premiumModal, setPremiumModal] = useState<{ open: boolean; tool?: string }>({
    open: false,
  });

  if (!user) return <Navigate to="/pricing" replace />;

  const isPremium = user.tier === "premium";

  const handleToolClick = (tool: Tool) => {
    if (tool.premium && !isPremium) {
      setPremiumModal({ open: true, tool: tool.title });
    } else {
      navigate(`/activity/${tool.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        {/* Greeting */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            איזה כיף שבאת, {user.name} <span className="inline-block">👋</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            {selectedGrade
              ? "בחרו נושא שמסקרן אתכם."
              : "באיזו כיתה אתם השנה?"}
          </p>
        </div>

        {/* Grade Picker — 4 grades aligned with the 2026 curriculum */}
        {!selectedGrade ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {grades.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelectedGrade(g.id)}
                className="group relative text-right p-8 rounded-[2rem] bg-card border border-border hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl-soft transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute -top-16 -left-16 w-44 h-44 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ animationDelay: `${i * 60}ms` }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center text-2xl font-black text-white shadow-md group-hover:scale-110 transition-transform">
                      {g.id}
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:-translate-x-1 transition-all rtl:rotate-180" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {g.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{g.hint}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <>
            {/* Back + grade indicator */}
            <div className="flex items-center justify-between mb-10">
              <button
                type="button"
                onClick={() => setSelectedGrade(null)}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
                לכל הכיתות
              </button>
              <div className="px-5 py-2 rounded-full bg-foreground text-background font-semibold text-lg">
                {grades.find((g) => g.id === selectedGrade)?.label}
              </div>
            </div>

            {/* Topics */}
            <div className="space-y-14">
              {curriculum[selectedGrade].map((topic) => (
                <div key={topic.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{topic.emoji}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                      {topic.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {topic.tools.map((tool) => {
                      const locked = tool.premium && !isPremium;
                      return (
                        <button
                          key={tool.id}
                          type="button"
                          onClick={() => handleToolClick(tool)}
                          className={cn(
                            "group relative text-right p-7 rounded-[1.75rem] border transition-all duration-300 overflow-hidden cursor-pointer",
                            tool.hero
                              ? "bg-gradient-to-br from-primary to-accent text-white border-transparent shadow-2xl-soft hover:-translate-y-1"
                              : "bg-card border-border hover:border-accent/40 hover:-translate-y-1 hover:shadow-card",
                            locked && !tool.hero && "hover:border-gold/40"
                          )}
                        >
                          {tool.hero && (
                            <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                          )}

                          <div className="relative">
                            <div className="flex items-start justify-between mb-5">
                              {tool.premium ? (
                                <span
                                  className={cn(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold",
                                    tool.hero
                                      ? "bg-white/20 text-white"
                                      : "bg-gradient-to-r from-gold to-gold-light text-foreground shadow-gold"
                                  )}
                                >
                                  <Sparkles className="w-3 h-3" />
                                  פלוס
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success">
                                  חינם
                                </span>
                              )}

                              {locked ? (
                                <div className="w-10 h-10 rounded-xl bg-secondary grid place-items-center">
                                  <Lock className="w-5 h-5 text-muted-foreground" />
                                </div>
                              ) : (
                                <div
                                  className={cn(
                                    "w-10 h-10 rounded-xl grid place-items-center transition-transform group-hover:scale-110",
                                    tool.hero
                                      ? "bg-white/20"
                                      : "bg-accent/10 text-accent"
                                  )}
                                >
                                  <Play
                                    className={cn(
                                      "w-5 h-5",
                                      tool.hero && "text-white"
                                    )}
                                    fill="currentColor"
                                  />
                                </div>
                              )}
                            </div>

                            <h3
                              className={cn(
                                "text-2xl font-bold mb-2 leading-tight",
                                tool.hero ? "text-white" : "text-foreground"
                              )}
                            >
                              {tool.title}
                            </h3>
                            <p
                              className={cn(
                                "text-base leading-relaxed",
                                tool.hero ? "text-white/80" : "text-muted-foreground"
                              )}
                            >
                              {tool.blurb}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <PremiumModal
        open={premiumModal.open}
        onOpenChange={(open) => setPremiumModal({ open })}
        toolName={premiumModal.tool}
      />
    </div>
  );
};

export default Dashboard;
