import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Outlet } from "@tanstack/react-router";

import { Header } from "../Header";

const AppLayout: React.FC = () => {
	return (
		<main className="theme-background min-h-screen pb-32 transition-all">
			<main className="theme-container-text flex w-full justify-center transition-all">
				<div className="w-[95%] md:w-[40rem]">
					<Header />

					<Outlet />
				</div>
			</main>

			<TanStackRouterDevtools />
		</main>
	);
};

export { AppLayout };
