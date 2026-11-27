import { createFileRoute } from "@tanstack/react-router";
import Hi from "@/pages/Hi";

export const Route = createFileRoute("/hi")({
  component: Hi,
});
