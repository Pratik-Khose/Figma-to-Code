import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TravelAgency } from "./screens/TravelAgency/TravelAgency";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TravelAgency />
  </StrictMode>,
);
