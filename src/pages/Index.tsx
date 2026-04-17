import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PricingSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";

// Because we renamed components INSIDE the files and imported them,
// wait, we export default their new names. The file names stay the same but we should make sure we use the new default exports or change imports.
// Actually it's cleaner to just import them from their existing filenames, the default export doesn't care.

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection />

        <ExperienceSection />

        <EducationSection />

        <SkillsSection />

        <PricingSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
