import React from "react";
import { Badge } from "@/components/ui/badge";
import { cw } from "@/utils/cw";
import { FilterMode } from "@/types";

interface FilterChipProps {
  mode?: FilterMode;
  onCycle: () => void;
  label: string;
  children: React.ReactNode;
}

const MODE_STYLES: Record<FilterMode, string> = {
  include:
    "border-green-600/40 bg-green-500/10 text-green-700 dark:text-green-400",
  exclude: "border-red-600/40 bg-red-500/10 text-red-700 dark:text-red-400",
};

const FilterChip: React.FC<FilterChipProps> = ({
  mode,
  onCycle,
  label,
  children,
}) => {
  return (
    <Badge
      variant="outline"
      render={
        <button
          type="button"
          onClick={onCycle}
          aria-label={label}
          aria-pressed={mode === "include"}
        />
      }
      className={cw(
        "h-auto cursor-pointer rounded-md px-2.5 py-1 text-xs font-normal text-muted-foreground transition-all active:scale-95",
        mode && MODE_STYLES[mode]
      )}
    >
      {children}
    </Badge>
  );
};

export default FilterChip;
