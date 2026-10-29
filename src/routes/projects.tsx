import { createFileRoute } from "@tanstack/react-router";

import { WorkPage } from "@/components/pages";

export const Route = createFileRoute("/projects")({
	component: WorkPage,
});
