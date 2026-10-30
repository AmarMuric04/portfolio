import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/css/Around.css";

import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

const ToggleThemeButton: React.FC<{ className: string }> = ({ className }) => {
	const { isLight, toggleTheme } = useTheme();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		toggleTheme({
			bounds: event.currentTarget.getBoundingClientRect(),
			radius: Number.parseFloat(
				getComputedStyle(event.currentTarget).borderTopLeftRadius,
			),
		});
	};

	return (
		<Around
			className={cn(
				"cursor-pointer place-items-center rounded-2xl border border-hairline bg-inset sheen text-ink shadow-surface",
				className,
			)}
			onPointerLeaveCapture={() => {}}
			onPointerEnterCapture={() => {}}
			onClickCapture={handleClick}
			toggled={isLight}
			duration={300}
			placeholder=""
			forceMotion
		/>
	);
};

export { ToggleThemeButton };
