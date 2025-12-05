import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Play, Clock, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "קל" | "בינוני" | "מתקדם";
  isPremium: boolean;
  imageUrl?: string;
}

const ActivityCard = ({
  id,
  title,
  description,
  category,
  duration,
  difficulty,
  isPremium,
}: ActivityCardProps) => {
  const difficultyColors = {
    "קל": "bg-success/10 text-success",
    "בינוני": "bg-accent/10 text-accent",
    "מתקדם": "bg-destructive/10 text-destructive",
  };

  const CardContent = (
    <div className={cn(
      "group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full",
      isPremium && "ring-2 ring-accent/20"
    )}>
      {/* Top Badge - Free or Premium */}
      <div className="absolute top-4 left-4 z-10">
        {isPremium ? (
          <Badge className="bg-gradient-to-l from-gold to-gold-light text-foreground font-semibold px-3 py-1 gap-1">
            <Lock className="w-3 h-3" />
            פרימיום
          </Badge>
        ) : (
          <Badge className="bg-success text-success-foreground font-semibold px-3 py-1 gap-1">
            <Sparkles className="w-3 h-3" />
            חינם
          </Badge>
        )}
      </div>

      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-primary/20 font-bold">∫</div>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-gold transform scale-0 group-hover:scale-100 transition-transform">
            <Play className="w-6 h-6 text-accent-foreground mr-[-2px]" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Difficulty */}
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="font-normal">
            {category}
          </Badge>
          <Badge className={cn("font-normal", difficultyColors[difficulty])}>
            {difficulty}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>כל הרמות</span>
          </div>
        </div>

        {/* Button */}
        <Button 
          variant={isPremium ? "premium" : "free"} 
          className="w-full"
        >
          {isPremium ? "למנויים בלבד" : "נסו עכשיו"}
        </Button>
      </div>
    </div>
  );

  if (id) {
    return (
      <Link to={`/activity/${id}`} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default ActivityCard;
