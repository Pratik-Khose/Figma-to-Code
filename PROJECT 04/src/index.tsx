import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainFrame } from "./screens/MainFrame";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainFrame />
  </StrictMode>,
);
