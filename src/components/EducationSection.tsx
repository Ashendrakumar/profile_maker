import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const EducationSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { educationData } = portfolioData.resumeData;

  return (
    <div
      className="bg-saas-black py-16 md:py-24 border-t border-gray-800"
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
              className="bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow hover:border-saas-orange/50 transition-all duration-300 mb-6 flex flex-col md:flex-row gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-saas-orange"></div>

              <div className="flex-grow pl-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-saas-orange mb-3">
                  {item.institution}
                </p>
                <div className="flex flex-col sm:flex-row text-gray-400 text-sm gap-2 sm:gap-6">
                  <span className="flex items-center">
                    <i className="fa fa-calendar mr-2"></i> {item.date}
                  </span>
                  <span className="flex items-center">
                    <i className="fa fa-map-marker-alt mr-2"></i>{" "}
                    {item.location}
                  </span>
                </div>
                {item.details && (
                  <p className="text-gray-400 mt-4 text-sm">{item.details}</p>
                )}
              </div>

              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-saas-orange/20 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white">
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
