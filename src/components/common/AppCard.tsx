import React from "react";

function AppCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative rounded-2xl p-8 transition-all duration-500 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 border border-emerald-800/30 backdrop-blur-sm hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col  overflow-hidden hover:from-slate-900/70 hover:to-emerald-900/40">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-600/5 group-hover:via-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-600/5 group-hover:via-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl"></div>
      {children}
    </div>
  );
}

export default AppCard;
