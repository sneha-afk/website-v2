import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Shell() {
  return (
    <div className="shell">
      <Header className="global-header" />
      <main className="shell-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
