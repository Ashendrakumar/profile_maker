import React from "react";
import Navbar from "@src/components/Navbar";
import HeroSection from "@src/components/HeroSection";
import SkillsSection from "@src/components/SkillsSection";
import ProjectsSection from "@src/components/ProjectsSection";
import EducationSection from "@src/components/EducationSection";
import ContactSection from "@src/components/ContactSection";
import Footer from "@src/components/Footer";
import ExperienceSection from "@src/components/ExperienceSection";
import { ScrollReveal } from "@src/components/common/ScrollReveal";

// Because we renamed components INSIDE the files and imported them,
// wait, we export default their new names. The file names stay the same but we should make sure we use the new default exports or change imports.
// Actually it's cleaner to just import them from their existing filenames, the default export doesn't care.

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden  bg-gradient-to-b from-slate-950 to-emerald-950/10 text-white">
        <main>
          <HeroSection />

          <ScrollReveal variant="fade-left" delay={100}>
            <ExperienceSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-right" delay={100}>
            <ProjectsSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <EducationSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-down">
            <SkillsSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={300}>
            <ContactSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
