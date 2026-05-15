import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const EducationSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { educationData } = portfolioData.resumeData;

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950  border-t border-emerald-900/30"
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
          {educationData.educationItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/50 to-emerald-900/20 rounded-2xl p-6 md:p-8 border border-emerald-800/30 backdrop-blur-sm transition-all duration-500 mb-6 flex flex-col md:flex-row gap-6 overflow-hidden hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 hover:from-slate-900/70 hover:to-emerald-900/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-600/5 group-hover:via-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 group-hover:w-2 transition-all duration-300"></div>

              <div className="flex-grow pl-4 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-lg text-emerald-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                  {item.institution}
                </p>
                <div className="flex flex-col sm:flex-row text-gray-400 text-sm gap-2 sm:gap-6">
                  <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                    <i className="fa fa-calendar mr-2"></i> {item.date}
                  </span>
                  <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                    <i className="fa fa-map-marker-alt mr-2"></i>
                    {item.location}
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
                    {item.percentage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
