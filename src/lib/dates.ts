const countLabel = ({ count, unit }: { count: number; unit: string }) =>
	count > 0 && `${count} ${unit}${count === 1 ? "" : "s"}`;

const formatMonth = (isoDate: string) =>
	new Date(isoDate).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});

const formatTimeSpent = (isoDate: string) => {
	const startDate = new Date(isoDate);
	const today = new Date();
	const months =
		(today.getFullYear() - startDate.getUTCFullYear()) * 12 +
		today.getMonth() -
		startDate.getUTCMonth() +
		1;

	return [
		countLabel({ count: Math.floor(months / 12), unit: "year" }),
		countLabel({ count: months % 12, unit: "month" }),
	]
		.filter((label) => !!label)
		.join(" ");
};

export { formatMonth, formatTimeSpent };
