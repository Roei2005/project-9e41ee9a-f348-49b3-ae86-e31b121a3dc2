import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToGrades = () => {
    document.getElementById("grades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(222 47% 15%) 0%, hsl(222 47% 25%) 50%, hsl(232 47% 20%) 100%)' }}
    >
      {/* Math Pattern Overlay */}
      <div className="absolute inset-0 math-pattern opacity-100" />
      
      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-amber-400/20 rounded-full animate-float" />
      <div className="absolute top-40 left-20 w-20 h-20 border-2 border-white/10 rounded-full animate-float animation-delay-300" />
      <div className="absolute bottom-40 right-1/4 w-16 h-16 border-2 border-amber-400/30 rounded-full animate-float animation-delay-500" />
      
      {/* Math Symbols */}
      <div className="absolute top-1/4 left-10 text-6xl text-white/5 font-bold select-none">∑</div>
      <div className="absolute bottom-1/3 right-20 text-7xl text-white/5 font-bold select-none">π</div>
      <div className="absolute top-1/3 right-1/3 text-5xl text-white/5 font-bold select-none">∞</div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white/90 text-sm font-medium">
              פעילויות אינטראקטיביות למתמטיקה
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
            למדו מתמטיקה
            <br />
            <span className="text-gradient-gold">בדרך חדשה</span>
          </h1>

          {/* Subheading - Updated */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200 leading-relaxed">
            בחרו את השכבה שלכם והתחילו ללמוד בצורה אינטראקטיבית
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="gap-2" onClick={scrollToGrades}>
              בחרו רמה והתחילו
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2">
              <Play className="w-5 h-5" />
              צפו בסרטון
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 animate-fade-up animation-delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-white/60 text-sm md:text-base">פעילויות אינטראקטיביות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-white/60 text-sm md:text-base">תלמידים מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-white/60 text-sm md:text-base">שנות ניסיון</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(45 30% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
