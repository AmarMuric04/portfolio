import { createFileRoute } from "@tanstack/react-router";

import { EducationPage } from "@/components/pages";

export const Route = createFileRoute("/education")({
	component: EducationPage,
});
