import React from "react";

import { cn } from "@/lib/utils";

export const ActionButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, disabled, ...props }) => {
  return (
    <button
      className={cn(
        "bg-white/10 backdrop-blur-sm border border-white/10 shadow-md flex justify-start transition-all items-center gap-1 theme-secondary-background text-white px-1 rounded-md cursor-pointer",
        { "opacity-50 cursor-not-allowed": disabled },
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
