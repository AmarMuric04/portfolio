import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Outlet } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";

import { Header } from "../Header";

const AppLayout: React.FC = () => {
	return (
		<MotionConfig reducedMotion="user">
			<div className="flex min-h-screen justify-center bg-ground pb-32 text-text">
				<div className="w-[95%] md:w-[40rem]">
					<Header />

					<main>
						<Outlet />
					</main>
				</div>
			</div>

			<TanStackRouterDevtools />
		</MotionConfig>
	);
};

export { AppLayout };
