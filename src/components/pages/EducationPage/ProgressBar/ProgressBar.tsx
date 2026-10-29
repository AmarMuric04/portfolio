const ProgressBar: React.FC<{ progression: number; labelOffset: number }> = ({
	progression,
	labelOffset,
}) => {
	return (
		<div>
			<div
				className="relative mt-8 inline-flex w-auto"
				style={{ left: `${progression - labelOffset}%` }}
			>
				{progression === 100 ? (
					<p className="relative right-14 w-auto sm:right-10">
						Completed
					</p>
				) : (
					<p className="relative w-auto">{progression}%</p>
				)}
			</div>

			<div className="theme-surface-alt h-[5px] w-full transition-all">
				<div
					className="theme-secondary-background h-full rounded-full"
					style={{ width: `${progression}%` }}
				/>
			</div>
		</div>
	);
};

export { ProgressBar };
