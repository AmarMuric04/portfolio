import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

export const ToggleThemeButton: React.FC<{ className: string }> = ({
  className,
}) => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <Around
      className={cn(
        "transition-all border-2 theme-surface-border shadow-md cursor-pointer place-items-center theme-background rounded-full",
        className
      )}
      onPointerLeaveCapture={() => {}}
      onPointerEnterCapture={() => {}}
      toggle={toggleTheme}
      toggled={isLight}
      duration={300}
      placeholder=""
      forceMotion
    />
  );
};
