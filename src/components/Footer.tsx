import React from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "@src/context/PortfolioContext";
import SocialMedia from "./common/SocialMedia";
import UserLogo from "./common/UserLogo";

const Footer = () => {
  const { data } = usePortfolio();
  if (!data) return null;
  const { footerData, projectNavbarData, socialLinks, contactData } = data;

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 border-t border-emerald-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="inline-block text-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-1">
                <UserLogo userName={projectNavbarData.projectName} /> {" "}
                <span className="uppercase text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent hover:from-emerald-300 hover:to-cyan-400 transition-all duration-300">
                  {projectNavbarData.projectName}{" "}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {contactData.role}
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerData.footerLinks.map((link, idx) => {
              const targetId = link.url.replace("/", "#");
              return (
                <a
                  key={idx}
                  href={targetId}
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:bg-emerald-500/10 px-3 py-2 rounded-lg"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Social */}
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <SocialMedia key={idx + "-" + social.name} social={social} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-emerald-900/30 text-center text-gray-500 text-sm">
          <p>{footerData.footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
