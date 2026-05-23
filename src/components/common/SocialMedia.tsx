import React from "react";

function SocialMedia({ social }: any) {
  return (
    <a
      href={social.link}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-emerald-500/30 hover:border-emerald-400/70 hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
      title={social.name}
    >
      <i
        className={
          social.icon.toLowerCase() == "fab fa-portfolio"
            ? "fa fa-link"
            : social.icon.toLowerCase()
        }
      ></i>
    </a>
  );
}

export default SocialMedia;
