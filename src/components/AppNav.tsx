import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sparkles, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const AppNav = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "ראשי" },
    { to: "/dashboard", label: "הלימודים שלי" },
    { to: "/pricing", label: "מחירים" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-2xl">א</span>
          </div>
          <span className="font-bold text-2xl text-foreground tracking-tight">
            אלוגברה
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-5 py-2.5 rounded-full text-lg font-medium transition-all",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {user.tier === "premium" ? (
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-foreground text-sm font-semibold shadow-gold">
                  <Sparkles className="w-4 h-4" /> פלוס
                </span>
              ) : null}
              <div className="hidden sm:flex items-center gap-2 text-base">
                <div className="w-9 h-9 rounded-full bg-accent/10 text-accent grid place-items-center font-bold">
                  {user.name[0]}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={signOut}
                aria-label="התנתקות"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("/pricing")}
              className="rounded-full text-base px-6 h-11 bg-foreground text-background hover:bg-foreground/90"
            >
              התחברות
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
