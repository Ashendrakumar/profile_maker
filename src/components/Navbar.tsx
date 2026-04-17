import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { data: portfolioData } = usePortfolio();

  if (!portfolioData) return null;
  const { projectNavbarData } = portfolioData;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                {projectNavbarData.projectName}{" "}
                {projectNavbarData.projectOptionName}
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium transition-colors text-white hover:text-saas-orange"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </a>
              {projectNavbarData.projectNavLink.map((link, index) => {
                const targetId = link.url.replace("/", "#");
                return (
                  <a
                    key={index}
                    href={targetId}
                    className="px-3 py-2 text-sm font-medium transition-colors text-white hover:text-saas-orange"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={portfolioData.resumeData.downloadLink}
              download={portfolioData.resumeData.resumeName}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <i
                className={`${portfolioData.resumeData.downloadIcon} mr-2`}
              ></i>
              {portfolioData.resumeData.downloadText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </a>
            {projectNavbarData.projectNavLink.map((link, index) => {
              const targetId = link.url.replace("/", "#");
              return (
                <a
                  key={index}
                  href={targetId}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-4 px-3 py-2">
              <a
                href={portfolioData.resumeData.downloadLink}
                download={portfolioData.resumeData.resumeName}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full inline-block text-center"
              >
                <i
                  className={`${portfolioData.resumeData.downloadIcon} mr-2`}
                ></i>
                {portfolioData.resumeData.downloadText}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
