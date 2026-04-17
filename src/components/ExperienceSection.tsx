import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const ExperienceSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { experienceData } = portfolioData.resumeData;

  return (
    <div className="bg-saas-black py-16 md:py-24" id="experience">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{experienceData.title}</span>
          </h2>
          <p className="text-gray-400">{experienceData.sub_title}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.experienceItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-6 md:p-8 card-shadow mb-6 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-saas-orange/10 flex items-center justify-center rounded-lg border border-saas-orange/20">
                  <img
                    src={item.orgLogo}
                    alt={item.org_title}
                    className="w-10 h-10 object-contain rounded"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.jobRole}
                </h3>
                <a
                  href={item.org_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-saas-orange hover:underline text-lg font-medium inline-block mb-2"
                >
                  {item.org_title}
                </a>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm gap-2 sm:gap-6 mt-1">
                  <span className="flex items-center">
                    <i className="fa fa-calendar mr-2 align-middle"></i>{" "}
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <i className="fa fa-map-marker-alt mr-2 align-middle"></i>{" "}
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="md:text-right w-full md:w-auto">
                <div className="bg-saas-darkGray border border-gray-700 rounded-lg px-4 py-3 inline-block">
                  <p className="text-xs text-gray-400 mb-1">Projects Handled</p>
                  <p className="text-xl font-bold text-white">
                    {item.projectsHandled}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
