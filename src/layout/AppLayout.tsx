import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-bg relative min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-14">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
