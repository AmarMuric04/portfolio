import { createRootRoute } from "@tanstack/react-router";
import Root from "@/components/organisms/Root";
import NotFound from "@/pages/NotFound";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
