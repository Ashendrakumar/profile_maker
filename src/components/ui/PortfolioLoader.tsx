import { Loader2 } from "lucide-react";

const PortfolioLoader = () => {
  return (
    <div className="bg-saas-black min-h-screen flex flex-col items-center justify-center text-white">
      <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
        <div className="absolute inset-0 border-t-2 border-saas-orange rounded-full animate-spin"></div>
        <div
          className="absolute inset-2 border-r-2 border-amber-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute inset-4 border-b-2 border-orange-400 rounded-full animate-spin"
          style={{ animationDuration: "2s" }}
        ></div>
        <Loader2 className="w-8 h-8 text-saas-orange animate-pulse" />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent animate-pulse">
        Loading Portfolio...
      </h2>
      <p className="text-gray-400 mt-2">Fetching your personalized data</p>
    </div>
  );
};

export default PortfolioLoader;
