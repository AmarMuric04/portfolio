import { ChevronDownSVG } from "@/assets";
import { cn } from "@/lib/utils";

const ToggleArrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
	return (
		<span
			className={cn(
				"grid place-items-center transition-transform duration-300 ease-out",
				{ "rotate-180": isOpen },
			)}
		>
			<ChevronDownSVG />
		</span>
	);
};

export { ToggleArrow };
