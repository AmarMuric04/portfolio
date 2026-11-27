import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import router from "./router";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MotionConfig reducedMotion="user">
        <NiceModal.Provider>
          <RouterProvider router={router} />
        </NiceModal.Provider>
      </MotionConfig>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
