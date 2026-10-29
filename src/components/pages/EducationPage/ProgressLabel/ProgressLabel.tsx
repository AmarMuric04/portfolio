const YEARS = ["1st", "2nd", "3rd", "4th"];

const PERCENTAGES = ["0%", "20%", "40%", "60%", "80%", "100%"];

const ProgressLabel: React.FC<{ type: string }> = ({ type }) => {
	if (type === "Online Course") {
		return (
			<div className="flex w-full justify-between">
				{PERCENTAGES.map((percentage) => (
					<p key={percentage}>{percentage}</p>
				))}
			</div>
		);
	}

	return (
		<>
			<div className="flex w-full justify-between">
				{YEARS.map((year) => (
					<p key={year}>{year}</p>
				))}
			</div>

			<div className="-mt-2 flex justify-between text-xs text-sage">
				{YEARS.map((year) => (
					<p key={year}>year</p>
				))}
			</div>
		</>
	);
};

export { ProgressLabel };
