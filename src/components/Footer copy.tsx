import React from "react";
import portfolioData from "../ashendra.json";

const Footer = () => {
  const { footerData, projectNavbarData, socialLinks } = portfolioData;

  return (
    <footer className="bg-saas-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div>
            <a href="#" className="inline-block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                {projectNavbarData.projectName} {projectNavbarData.projectOptionName}
              </span>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerData.footerLinks.map((link, idx) => {
              const targetId = link.url.replace("/", "#");
              return (
                <a key={idx} href={targetId} className="text-gray-400 hover:text-saas-orange transition-colors">
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Social */}
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-saas-orange transition-colors" title={social.name}>
                <i className={social.icon} style={{ color: social.color }}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{footerData.footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
