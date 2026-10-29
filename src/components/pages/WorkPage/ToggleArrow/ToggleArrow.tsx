import { MiniArrowDownSVG } from "@/assets";
import { cn } from "@/lib/utils";

const ToggleArrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
	return (
		<div className={cn("transition-all", { "rotate-180": isOpen })}>
			<MiniArrowDownSVG />
		</div>
	);
};

export { ToggleArrow };
