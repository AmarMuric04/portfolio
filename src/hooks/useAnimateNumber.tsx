import { useEffect, useState } from "react";

export const useAnimatedNumber = (target: number, duration = 1000) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const start = 0;
		const step = (target - start) / (duration / 10);
		const interval = setInterval(() => {
			setCount((prev) => {
				if (prev + step >= target) {
					clearInterval(interval);
					return parseFloat(target.toFixed(1));
				}
				return parseFloat((prev + step).toFixed(1));
			});
		}, 10);

		return () => clearInterval(interval);
	}, [target, duration]);

	return count;
};
