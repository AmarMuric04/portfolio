import React from "react";
import { ExternalLinkSVG } from "@/assets/svgs";

interface ClassicExternalLinkProps {
  href: string;
  description: string;
  title: string;
}

const ClassicExternalLink: React.FC<ClassicExternalLinkProps> = ({
  href,
  description,
  title,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent"
    >
      <span className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary">
        <ExternalLinkSVG />
      </span>

      <span className="min-w-0">
        <span className="block font-medium text-foreground">{title}</span>
        <span className="block truncate text-sm text-muted-foreground">
          {description}
        </span>
      </span>
    </a>
  );
};

export default ClassicExternalLink;
