import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeActivities from "@/components/FreeActivities";
import PremiumActivities from "@/components/PremiumActivities";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FreeActivities />
      <PremiumActivities />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
