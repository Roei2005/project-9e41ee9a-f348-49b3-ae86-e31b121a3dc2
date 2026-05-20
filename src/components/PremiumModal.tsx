import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PremiumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  toolName?: string;
}

const PremiumModal = ({ open, onOpenChange, toolName }: PremiumModalProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-[2rem] p-0 overflow-hidden border-0">
        <div className="bg-gradient-to-br from-primary to-accent text-white p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur grid place-items-center mx-auto mb-5">
            <Sparkles className="w-8 h-8" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white text-center">
              זה חלק מאלוגברה פלוס
            </DialogTitle>
            <DialogDescription className="text-white/80 text-lg mt-2 text-center">
              {toolName ? `"${toolName}" ` : "הכלי הזה "}פתוח לחברי פלוס.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-8">
          <ul className="space-y-3 mb-6">
            {[
              "גישה לכל המעבדות האינטראקטיביות",
              "פותר משוואות שלב-אחר-שלב",
              "סיכומים מלאים לכל הכיתות",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg">
                <span className="mt-1 w-6 h-6 rounded-full bg-accent/10 text-accent grid place-items-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => navigate("/pricing")}
              className="h-13 rounded-2xl text-lg bg-foreground text-background hover:bg-foreground/90 h-14"
            >
              ספרו לי עוד
            </Button>
            <button
              onClick={() => onOpenChange(false)}
              className="text-muted-foreground hover:text-foreground text-base py-2 transition-colors"
            >
              אחר כך, תודה
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumModal;
