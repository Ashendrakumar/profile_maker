import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "@src/context/PortfolioContext";
import UserLogo from "./common/UserLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { data: portfolioData } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!portfolioData) return null;
  const { projectNavbarData } = portfolioData;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const downloadResume = async (downloadLink: string, downloadName: string) => {
    try {
      const response = await fetch(downloadLink);
      const blob = await response.blob();

      const url = globalThis.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${downloadName}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      globalThis.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "pt-4 px-4" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "max-w-6xl rounded-full border border-emerald-900/30 bg-slate-950/80 backdrop-blur-md shadow-lg shadow-emerald-950/30"
            : "bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 bg-opacity-95 backdrop-blur-md border-b border-emerald-900/30"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? "max-w-6xl px-4 sm:px-6"
              : "max-w-7xl px-4 sm:px-6 lg:px-8"
          }`}
        >
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? "h-14" : "h-16"
            }`}
          >
            {/* Logo */}
            <UserLogo userName={projectNavbarData.projectName} />

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {projectNavbarData.projectNavLink.map((link, index) => {
                  const targetId = link.url.replace("/", "#");
                  return (
                    <a
                      key={index}
                      href={targetId}
                      className="px-3 py-2 text-sm font-medium transition-all duration-300 text-white hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg"
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
                href={portfolioData.resumeData.resumeLink}
                download={portfolioData.resumeData.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400"
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
              <div>
                <a
                  href={portfolioData.resumeData.resumeLink}
                  download={portfolioData.resumeData.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400"
                >
                  <i
                    className={`${portfolioData.resumeData.downloadIcon}`}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-900/80 to-emerald-900/20 backdrop-blur-md pb-4 border-t border-emerald-900/30 ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {projectNavbarData.projectNavLink.map((link, index) => {
                const targetId = link.url.replace("/", "#");
                return (
                  <a
                    key={index}
                    href={targetId}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-4 px-3 py-2">
                <a
                  href={portfolioData.resumeData.resumeLink}
                  download={portfolioData.resumeData.resumeName}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-block text-center px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400"
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
    </div>
  );
};

export default Navbar;
