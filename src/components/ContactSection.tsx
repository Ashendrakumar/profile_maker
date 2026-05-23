import React, { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import SocialMedia from "./common/SocialMedia";
import config from "@/config";

const ContactSection = () => {
  const { data: portfolioData } = usePortfolio();
  const [result, setResult] = useState("");
  if (!portfolioData) return null;
  const { contactData } = portfolioData;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", config.EMAIL_ACCESS_KEY);

    const response = await fetch(config.EMAIL_SERVICE_API, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target?.reset();
    } else {
      console.error(result);
      setResult("Error");
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 py-16 md:py-20"
      id="contact"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{contactData.title}</span>
          </h2>
          <p className="text-gray-400">{contactData.sub_title}</p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-emerald-800/30 backdrop-blur-sm">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactData.contact.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/30 group-hover:border-emerald-400/70 group-hover:bg-gradient-to-br group-hover:from-emerald-600/30 group-hover:to-teal-600/30 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                      <i
                        className={`${item.icon} text-emerald-400 text-xl`}
                      ></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.title}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-white hover:text-emerald-400 transition-all duration-300 hover:translate-x-1"
                      >
                        {item.displayName}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {portfolioData.socialLinks.map((social, idx) => (
                  <SocialMedia key={idx + "-" + social.name} social={social} />
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/10 p-6 rounded-2xl border border-emerald-800/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">
                  {contactData.contactFormSection.title}
                </h3>
                {/* {result && <p className="text-green-400 mb-4">{result}</p>} */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-900/50 border border-emerald-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      className="w-full bg-slate-900/50 border border-emerald-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full bg-slate-900/50 border border-emerald-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 backdrop-blur-sm resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={onSubmit}
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-400/30 hover:border-emerald-400 hover:-translate-y-0.5"
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
