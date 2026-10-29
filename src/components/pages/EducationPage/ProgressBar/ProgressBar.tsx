const ProgressBar: React.FC<{ progression: number; labelOffset: number }> = ({
	progression,
	labelOffset,
}) => {
	return (
		<div>
			<div
				className="relative mt-6 inline-flex w-auto text-caption text-ink tabular-nums"
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

			<div className="mt-1 h-1 w-full rounded-full bg-inset">
				<div
					className="h-full rounded-full bg-accent"
					style={{ width: `${progression}%` }}
				/>
			</div>
		</div>
	);
};

export { ProgressBar };
