import React from "react";

interface ProgressBarProps {
	currentProgression: number;
	takeAway: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
	currentProgression,
	takeAway,
}) => {
	return (
		<div>
			<div
				style={{
					left: `${currentProgression - takeAway}%`,
				}}
				className="relative mt-8 inline-flex w-auto"
			>
				{currentProgression !== 100 ? (
					<p className="relative w-auto">
						{currentProgression}
						{currentProgression === currentProgression ? "%" : ""}
					</p>
				) : (
					<p className="relative right-14 w-auto sm:right-10">
						Completed
					</p>
				)}
			</div>

			<div className="theme-surface-alt h-[5px] w-full transition-all">
				<div
					style={{
						width: `${currentProgression}%`,
					}}
					className="theme-secondary-background h-full rounded-full"
				/>
			</div>
		</div>
	);
};
