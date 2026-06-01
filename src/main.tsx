import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Shell } from "./pages/Shell";
import { KitchenSink } from "./pages/KitchenSink";
import "./styles/_index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen-sink" element={<KitchenSink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
