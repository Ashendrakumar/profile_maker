import React from "react";
import { Link } from "react-router-dom";

export default function UserLogo({ userName }: { userName: string }) {
  return (
    <div className="flex-shrink-0 hero-title inline-block">
      <Link to="/" className="flex items-center">
        <span className="text-4xl uppercase font-extrabold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent hover:from-emerald-300 hover:to-cyan-400 transition-all duration-300">
          {userName.slice(0, 2)}{"  "}
        </span>
      </Link>
    </div>
  );
}
