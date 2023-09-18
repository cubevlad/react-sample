import React from "react";

import ReactDOM from "react-dom/client";

import { ThemeLayout } from "@app/theme";

import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeLayout>
    <App />
  </ThemeLayout>,
);
