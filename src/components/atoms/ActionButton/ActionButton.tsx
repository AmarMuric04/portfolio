import React from "react";
import { Button } from "@/components/ui/button";
import { cw } from "@/utils/cw";

interface ActionButtonProps extends React.ComponentProps<"button"> {
  isDisabled?: boolean;
  action?: () => void;
  classes?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  isDisabled = false,
  action,
  classes = "",
  ...props
}) => {
  return (
    <Button
      type="button"
      {...props}
      disabled={isDisabled}
      onClick={action}
      className={cw(
        "h-auto items-center justify-start gap-1 border border-white/10 px-1 py-1 shadow-md backdrop-blur-sm transition-all",
        classes
      )}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
