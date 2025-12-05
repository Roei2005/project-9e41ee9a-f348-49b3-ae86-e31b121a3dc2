import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GradeSelector, { GradeLevel } from "@/components/GradeSelector";
import ActivitiesSection from "@/components/ActivitiesSection";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="grades">
        <GradeSelector 
          selectedGrade={selectedGrade} 
          onSelectGrade={setSelectedGrade} 
        />
      </div>
      <ActivitiesSection selectedGrade={selectedGrade} />
      <Pricing />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
