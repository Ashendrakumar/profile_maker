import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const SkillsSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { skillsData } = portfolioData.resumeData;

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 "
      id="skills"
    >
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
              key={index + "-" + skill.name}
              className="group  hover:-translate-y-2 relative bg-gradient-to-br from-slate-900/50 to-emerald-900/20 p-6 rounded-2xl border border-emerald-800/30 backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 hover:from-slate-900/70 hover:to-emerald-900/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-600/5 group-hover:via-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl"></div>

              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 group-hover:border-emerald-400/70 group-hover:from-emerald-600/30 group-hover:to-teal-600/30 group-hover:shadow-lg group-hover:shadow-emerald-500/20 group-hover:scale-110 transition-all duration-500">
                <i
                  className={`text-2xl text-emerald-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-125`}
                >
                  {skill.level + "%"}
                </i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300 relative z-10">
                {skill.name}
              </h3>
              <div className="w-full bg-gradient-to-r from-slate-700 to-slate-800 rounded-full h-2 mt-2 relative z-10 overflow-hidden group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-300">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full group-hover:from-cyan-400 group-hover:to-emerald-500 transition-all duration-500 shadow-lg shadow-emerald-500/50 group-hover:shadow-cyan-500/50"
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
