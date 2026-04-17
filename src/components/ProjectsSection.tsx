import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const ProjectsSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { projects } = portfolioData.aboutData.more_details;

  return (
    <div
      className="bg-gradient-to-b from-saas-darkGray to-saas-black py-16 md:py-24"
      id="projects"
    >
      <div className="section-container border-t border-saas-orange/10 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Check out some of the work I've done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 bg-saas-darkGray border border-gray-800 transform hover:-translate-y-1 hover:border-saas-orange/50 card-shadow flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-2">
                {project.projectHeading}
              </h3>
              <p className="text-sm text-saas-orange mb-4">
                {project.projectRole} at {project.projectOrg}
              </p>
              <p className="text-gray-400 mb-6 flex-grow text-sm line-clamp-3">
                {project.projectDetail.description}
              </p>

              <ul className="space-y-3 mb-8">
                {project.projectDetail.keyFeatures
                  ?.slice(0, 3)
                  .map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-saas-orange mr-2 shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm line-clamp-2">
                        {feature.title || feature.description}
                      </span>
                    </li>
                  )) ||
                  project.projectDetail.keyFeature
                    ?.slice(0, 3)
                    .map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-saas-orange mr-2 shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm line-clamp-2">
                          {feature.title || feature.description}
                        </span>
                      </li>
                    ))}
              </ul>

              <Button
                asChild
                className="w-full bg-secondary border border-saas-orange/30 hover:border-saas-orange text-white"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  View Details <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
