import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import AppCard from "./common/AppCard";

const ProjectsSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { projects, title, sub_title } = portfolioData.resumeData.projectData;

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 pt-16 md:pt-20"
      id="projects"
    >
      <div className="section-container border-t border-emerald-900/30 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text"> {title}</span>
          </h2>
          <p className="text-gray-400 mb-8">{sub_title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AppCard key={index + "project" + project.projectHeading}>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300 relative z-10">
                {project.projectHeading}
              </h3>
              <p className="text-sm text-emerald-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300 relative z-10 font-medium">
                {project.projectRole} @ {project.projectOrg}
              </p>
              <p className="text-gray-400 mb-6 flex-grow text-sm line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                {project.projectDetail.description}
              </p>

              <ul className="space-y-3 mb-8 relative z-10">
                {project.projectDetail.keyFeatures
                  ?.slice(0, 3)
                  .map((feature, i) => (
                    <li key={i} className="flex items-start group/item">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-1 group-hover/item:text-cyan-300 transition-colors duration-300" />
                      <span className="text-gray-300 text-sm line-clamp-2 group-hover/item:text-gray-100 transition-colors duration-300">
                        {feature.title || feature.description}
                      </span>
                    </li>
                  )) || null}
              </ul>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-400/30 hover:border-emerald-400 text-white hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative z-10"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  View Details{" "}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
