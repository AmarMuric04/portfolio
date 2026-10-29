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
				"theme-surface-border theme-background cursor-pointer place-items-center rounded-full border-2 shadow-md transition-all",
				className,
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
