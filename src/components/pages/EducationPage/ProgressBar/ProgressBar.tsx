const ProgressBar: React.FC<{ progression: number }> = ({ progression }) => {
	return (
		<div className="mt-6 flex flex-col gap-1">
			<div
				className="flex min-w-fit justify-end text-caption text-ink tabular-nums"
				style={{ width: `${progression}%` }}
			>
				{progression === 100 ? "Completed" : `${progression}%`}
			</div>

			<div className="h-1 w-full rounded-full bg-inset">
				<div
					className="h-full rounded-full bg-accent"
					style={{ width: `${progression}%` }}
				/>
			</div>
		</div>
	);
};

export { ProgressBar };
