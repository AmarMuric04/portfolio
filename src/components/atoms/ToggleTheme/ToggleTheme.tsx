import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import React from "react";
import { cw } from "@/utils/cw";

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
  classes: string;
}

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked, classes }) => {
  return (
    /* @ts-expect-error The library's types don't support React 19 yet. */
    <Around
      className={cw(
        "place-items-center rounded-full border-2 border-card bg-background shadow-md transition-all",
        classes
      )}
      forceMotion
      toggle={handleChange}
      toggled={isChecked}
      duration={300}
    />
  );
};

export default Toggle;
