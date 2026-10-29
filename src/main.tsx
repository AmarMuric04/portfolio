import { RouterProvider, createRouter } from "@tanstack/react-router";
import NiceModal from "@ebay/nice-modal-react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<NiceModal.Provider>
				<RouterProvider router={router} />
			</NiceModal.Provider>
		</StrictMode>,
	);
}
