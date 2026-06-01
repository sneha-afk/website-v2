import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Shell() {
  return (
    <div className="shell">
      <main className="shell-content">
        <Header className="global-header" />
        <Outlet />
        <br />
        <Footer />
      </main>
    </div>
  );
}
