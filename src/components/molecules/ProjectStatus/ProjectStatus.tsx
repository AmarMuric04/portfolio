import React from "react";
import { Badge } from "@/components/ui/badge";
import { cw } from "@/utils/cw";

interface ProjectStatusProps {
  status: string;
}

const STATUS_DOTS: Record<string, string> = {
  Live: "bg-red-500",
  Development: "bg-amber-500",
  Archived: "bg-muted-foreground",
};

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => {
  const dotColor = STATUS_DOTS[status];

  if (!dotColor) return null;

  return (
    <Badge
      variant="outline"
      className="gap-1.5 rounded-md font-normal text-muted-foreground"
    >
      <span className={cw("size-1.5 rounded-full", dotColor)} />
      {status}
    </Badge>
  );
};

export default ProjectStatus;
