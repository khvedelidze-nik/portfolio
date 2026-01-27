import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="relative h-lvh bg-gray-500">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
