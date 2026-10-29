import { ChevronDownSVG } from "@/assets";
import { cn } from "@/lib/utils";

const ToggleArrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
	return (
		<div className={cn("transition-all", { "rotate-180": isOpen })}>
			<ChevronDownSVG />
		</div>
	);
};

export { ToggleArrow };
