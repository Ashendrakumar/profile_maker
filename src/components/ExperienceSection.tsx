import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import AppCard from "./common/AppCard";

const ExperienceSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { experienceData } = portfolioData.resumeData;

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 pt-16 md:pt-20"
      id="experience"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{experienceData.title}</span>
          </h2>
          <p className="text-gray-400">{experienceData.sub_title}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {experienceData.experienceItems.map((item, index) => (
              <AppCard key={index + "experience" + item.org_title}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="text-nowrap text-center w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center rounded-xl border border-emerald-500/30 group-hover:border-emerald-400/70 group-hover:bg-gradient-to-br group-hover:from-emerald-600/30 group-hover:to-teal-600/30 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
                        <span className="w-10 text-2xl font-bold h-10 text-emerald-300 group-hover:text-emerald-200 object-contain rounded group-hover:scale-110 transition-transform duration-300">
                          {item.org_title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="md:hidden block text-right w-full md:w-auto relative z-10">
                      <div className="bg-gradient-to-br from-emerald-600/15 to-teal-600/15 border border-emerald-500/30 rounded-xl px-4 py-3 inline-block group-hover:border-emerald-400/70 group-hover:from-emerald-600/25 group-hover:to-teal-600/25 group-hover:shadow-lg group-hover:shadow-emerald-500/15 transition-all duration-500">
                        <p className="text-xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">
                          {item.projectsHandled}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {item.jobRole}
                    </h3>
                    <a
                      href={item.org_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:text-cyan-300 text-lg font-medium inline-block mb-2 transition-colors duration-300 hover:underline"
                    >
                      {item.org_title}
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm gap-2 sm:gap-6 mt-1">
                      <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <i className="far fa-calendar mr-2 align-middle"></i>
                        <em> {item.date}</em>
                      </span>
                      <span className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <i className="fa fa-map-marker-alt alt mr-2 align-middle"></i>
                        <em>{item.location}</em>{" "}
                      </span>
                    </div>
                  </div>

                  <div className="md:block hidden text-right w-full md:w-auto relative z-10">
                    <div className="bg-gradient-to-br from-emerald-600/15 to-teal-600/15 border border-emerald-500/30 rounded-xl px-4 py-3 inline-block group-hover:border-emerald-400/70 group-hover:from-emerald-600/25 group-hover:to-teal-600/25 group-hover:shadow-lg group-hover:shadow-emerald-500/15 transition-all duration-500">
                      <p className="text-xs text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">
                        Projects Handled
                      </p>
                      <p className="text-xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">
                        {item.projectsHandled}
                      </p>
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

export default ExperienceSection;
