import { createRootRoute } from "@tanstack/react-router";

import { AppLayout } from "@/components/layout";
import { NotFoundPage } from "@/components/pages";
import "@/index.css";

export const Route = createRootRoute({
	component: AppLayout,
	notFoundComponent: NotFoundPage,
});
