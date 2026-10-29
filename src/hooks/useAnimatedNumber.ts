import { useEffect, useState } from "react";

const useAnimatedNumber = ({
	target,
	duration,
}: {
	target: number;
	duration: number;
}) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const step = target / (duration / 10);

		const interval = setInterval(() => {
			setCount((previous) => {
				if (previous + step >= target) {
					clearInterval(interval);

					return +target.toFixed(1);
				}

				return +(previous + step).toFixed(1);
			});
		}, 10);

		return () => clearInterval(interval);
	}, [target, duration]);

	return count;
};

export { useAnimatedNumber };
