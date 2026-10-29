export const ProgressLabel: React.FC<{ type: string }> = ({ type }) => {
	switch (type) {
		case "Online Course":
			return (
				<div className="flex w-full justify-between">
					<p>0%</p>
					<p>20%</p>
					<p>40%</p>
					<p>60%</p>
					<p>80%</p>
					<p>100%</p>
				</div>
			);

		default:
			return (
				<>
					<div className="flex w-full justify-between">
						<p>1st</p>
						<p>2nd</p>
						<p>3rd</p>
						<p>4th</p>
					</div>
					<div className="-mt-2 flex justify-between text-xs text-[#697565]">
						<p>year</p>
						<p>year</p>
						<p>year</p>
						<p>year</p>
					</div>
				</>
			);
	}
};
