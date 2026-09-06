import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import SocialMedia from "./common/SocialMedia";

const HeroSection = () => {
  const { data: portfolioData } = usePortfolio();
  if (!portfolioData) return null;
  const { contactData, aboutData, projectNavbarData } = portfolioData;
  const imageUrl = '../../public/img/profile.webp';

  const roleWords = contactData.role.split(" ");

  const descriptionSnippet = aboutData.description
    ? aboutData.description.length > 160
      ? `${aboutData.description.substring(0, 160)}...`
      : aboutData.description
    : "";

  return (
    <div
      id="about"
      className="relative bg-gradient-to-b from-slate-950 via-emerald-950/30 to-slate-950 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Emerald glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-teal-500 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-cyan-400 opacity-10 rounded-full blur-[70px]"></div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            <span className="hero-badge inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30 hover:border-emerald-400/70 hover:bg-emerald-500/20 transition-all duration-300">
              Hello I'm <span className="uppercase">{contactData.fName}</span>{" "}
              {contactData.lName}
            </span>

            <h1 className="font-black mb-6 tracking-[-0.06em] leading-[0.82]">
              <span className="hero-line block text-white text-2xl md:text-3xl lg:text-[5rem]">A Passionate</span>
              {roleWords.map((word, index) => (
                <span key={word + index} className="hero-title block text-4xl md:text-6xl lg:text-[7rem]">
                  <span
                    className="hero-role-word"
                    style={{
                      ["--word-width" as any]: `${Math.max(word.length + 1.2, 6)}ch`,
                      animationDelay: `${index * 0.7 + 0.45}s`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-description text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0 text-left lg:text-left italic leading-relaxed">
              {descriptionSnippet && <>&ldquo;{descriptionSnippet}&rdquo;</>}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r md:w-1/2 w-full from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 border border-emerald-400/30 hover:border-emerald-400 hover:-translate-y-0.5"
              >
                <a href={"#contact"} className="flex items-center">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {portfolioData.socialLinks.map((social, idx) => (
                <SocialMedia key={idx + "-" + social.name} social={social} />
              ))}
            </div>
          </div>

          <div
            className="animate-fade-in order-1 lg:order-2 flex justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/50 to-emerald-900/20 rounded-2xl border border-emerald-500/30 p-2 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden flex items-center justify-center">
                {/* {projectNavbarData.profileImage ? (
                  <img
                    src={projectNavbarData.profileImage}
                    alt={projectNavbarData.projectName}
                    className="rounded-xl w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center text-gray-500">
                    <User size={200} />
                  </div>
                )} */}
                <img
                    src={imageUrl}
                    alt={projectNavbarData.projectName}
                    className="rounded-xl w-full h-[400px] object-cover"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-emerald-500/30 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-emerald-500/30 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-emerald-500/30 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
