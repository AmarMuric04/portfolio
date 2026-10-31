import dayjs from "dayjs";

const countLabel = ({ count, unit }: { count: number; unit: string }) =>
	count > 0 && `${count} ${unit}${count === 1 ? "" : "s"}`;

const formatMonth = (isoDate: string) => dayjs(isoDate).format("MMMM YYYY");

const formatTimeSpent = (isoDate: string) => {
	const months = dayjs().diff(dayjs(isoDate), "month") + 1;

	return [
		countLabel({ count: Math.floor(months / 12), unit: "year" }),
		countLabel({ count: months % 12, unit: "month" }),
	]
		.filter((label) => !!label)
		.join(" ");
};

export { formatMonth, formatTimeSpent };
