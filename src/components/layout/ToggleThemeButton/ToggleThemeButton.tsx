import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/css/Around.css";

import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

const ToggleThemeButton: React.FC<{ className: string }> = ({ className }) => {
	const { isLight, toggleTheme } = useTheme();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const bounds = event.currentTarget.getBoundingClientRect();

		toggleTheme({
			x: bounds.left + bounds.width / 2,
			y: bounds.top + bounds.height / 2,
		});
	};

	return (
		<Around
			className={cn(
				"cursor-pointer place-items-center rounded-2xl border border-hairline bg-inset text-ink shadow-surface",
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
