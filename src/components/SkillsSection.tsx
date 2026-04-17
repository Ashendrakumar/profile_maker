import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const SkillsSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { skillsData } = portfolioData.resumeData;

  return (
    <div className="bg-saas-black py-16 md:py-24" id="skills">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{skillsData.title}</span>
          </h2>
          <p className="text-gray-400">{skillsData.sub_title}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.skillItems.map((skill, index) => (
            <div
              key={index}
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow flex flex-col items-center justify-center text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-saas-orange/10 w-16 h-16 flex items-center justify-center rounded-full mb-4 group-hover:bg-saas-orange transition-colors">
                <i
                  className={`${skill.icon} text-2xl text-saas-orange group-hover:text-white transition-colors`}
                ></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-saas-orange h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
