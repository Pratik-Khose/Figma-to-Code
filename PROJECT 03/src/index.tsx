import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Figma } from "./screens/Figma";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Figma />
  </StrictMode>,
);
