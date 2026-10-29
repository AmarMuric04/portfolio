import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/css/Around.css";

import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

const ToggleThemeButton: React.FC<{ className: string }> = ({ className }) => {
	const { isLight, toggleTheme } = useTheme();

	return (
		<Around
			className={cn(
				"theme-surface-border theme-background cursor-pointer place-items-center rounded-2xl border-2 shadow-md transition-all",
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

export { ToggleThemeButton };
