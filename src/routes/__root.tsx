import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Header } from "@/components/molecules";
import "@/index.css";

const RootLayout = () => (
  <main className="transition-all theme-background min-h-screen pb-32">
    <main className="w-full flex justify-center theme-container-text transition-all">
      <div className="md:w-[40rem] w-[95%]">
        <Header />
        <Outlet />
      </div>
    </main>
    <TanStackRouterDevtools />
  </main>
);

export const Route = createRootRoute({ component: RootLayout });
