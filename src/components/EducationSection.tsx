import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import AppCard from "./common/AppCard";

const EducationSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { educationData } = portfolioData.resumeData;

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950  border-t border-emerald-900/30 pt-16 md:pt-20"
      id="education"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{educationData.title}</span>
          </h2>
          <p className="text-gray-400">{educationData.sub_title}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {educationData.educationItems.map((item, index) => (
              <AppCard key={index + "education" + item.title}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow pl-4 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-lg text-emerald-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                      {item.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row text-gray-400 text-sm gap-2 sm:gap-6">
                      <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <i className="far fa-calendar mr-2"></i>{" "}
                        <em>{item.date}</em>
                      </span>
                      <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <i className="fa fa-map-marker-alt mr-2"></i>
                        <em>{item.location}</em>
                      </span>
                    </div>
                    {item.details && (
                      <p className="text-gray-400 mt-4 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {item.details}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-center relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-emerald-500/30 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600/10 to-teal-600/10 group-hover:border-emerald-400/70 group-hover:bg-gradient-to-br group-hover:from-emerald-600/20 group-hover:to-teal-600/20 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
                      <span className="text-xl font-bold text-emerald-300 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.percentage.replace("%", "")}
                      </span>
                    </div>
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
