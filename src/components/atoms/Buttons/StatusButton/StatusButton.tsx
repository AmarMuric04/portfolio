import React from "react";

export const StatusButton: React.FC<{
  icon: React.ElementType;
  status: string;
  color: string;
}> = ({ icon: Icon, status, color }) => {
  return (
    <div
      className="cursor-pointer border-2 text-xs px-1 rounded-full flex gap-1 items-center"
      style={{ borderColor: color, color }}
    >
      <Icon />
      <p>{status}</p>
    </div>
  );
};
