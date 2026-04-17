import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { contactData, aboutData, projectNavbarData } = portfolioData;

  return (
    <div
      id="about"
      className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
              Hello I'm {contactData.fName} {contactData.lName}
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              A Passionate{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {contactData.role}
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {aboutData.description.substring(0, 150)}...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                <Link to="/contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
              >
                <Link to="/about">More About Me</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {portfolioData.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-saas-orange/20 hover:border-saas-orange hover:bg-saas-orange/10 transition-colors"
                  title={social.name}
                >
                  <i
                    className={social.icon}
                    style={{ color: social.color }}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          <div
            className="animate-fade-in order-1 lg:order-2 flex justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-saas-orange to-orange-700 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-saas-darkGray rounded-xl border border-saas-orange/20 p-2 card-shadow transform transition-all duration-500 hover:scale-[1.01] hover:shadow-orange-500/10 hover:shadow-lg overflow-hidden flex items-center justify-center">
                {aboutData.image ? (
                  <img
                    src={aboutData.image}
                    alt={projectNavbarData.projectName}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center text-gray-500">
                    <User size={120} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
