import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const ContactSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { contactData } = portfolioData;

  return (
    <div className="bg-saas-darkGray py-16 md:py-20" id="contact">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{contactData.title}</span>
          </h2>
          <p className="text-gray-400">{contactData.sub_title}</p>
        </div>

        <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactData.contact.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-12 h-12 bg-saas-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i
                        className={`${item.icon} text-saas-orange text-xl`}
                      ></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.title}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-white hover:text-saas-orange transition-colors"
                      >
                        {item.displayName}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {portfolioData.socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-saas-orange hover:bg-saas-orange/10 transition-colors"
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

            <div className="md:w-1/2">
              <div className="bg-saas-black/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">
                  {contactData.contactFormSection.title}
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-saas-darkGray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-saas-orange transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-saas-darkGray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-saas-orange transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-saas-darkGray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-saas-orange transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn-primary w-full py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors bg-saas-orange text-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
