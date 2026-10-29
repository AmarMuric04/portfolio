const YEARS = ["1st", "2nd", "3rd", "4th"];

const PERCENTAGES = ["0%", "20%", "40%", "60%", "80%", "100%"];

const ProgressLabel: React.FC<{ type: string }> = ({ type }) => {
	if (type === "Online Course") {
		return (
			<div className="mt-1 flex w-full justify-between text-caption text-text-muted tabular-nums">
				{PERCENTAGES.map((percentage) => (
					<p key={percentage}>{percentage}</p>
				))}
			</div>
		);
	}

	return (
		<>
			<div className="mt-1 flex w-full justify-between text-caption text-text tabular-nums">
				{YEARS.map((year) => (
					<p key={year}>{year}</p>
				))}
			</div>

			<div className="flex justify-between text-caption text-text-muted">
				{YEARS.map((year) => (
					<p key={year}>year</p>
				))}
			</div>
		</>
	);
};

export { ProgressLabel };
