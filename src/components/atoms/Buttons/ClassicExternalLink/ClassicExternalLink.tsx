import React from "react";

import { ExternalLinkSVG } from "@/assets";

export const ClassicExternalLink: React.FC<{
  description: string;
  title: string;
  href: string;
}> = ({ description, title, href }) => {
  return (
    <a
      className="theme-surface transition-all group cursor-pointer p-2 flex gap-2 rounded-lg hover:bg-[#26282580]"
      target="_blank"
      href={href}
    >
      <span className="transition-all theme-title-text font-semibold flex gap-2 items-center">
        <div className="group-hover:scale-120">
          <ExternalLinkSVG />
        </div>
        {title}
      </span>{" "}
      - {description}
    </a>
  );
};
