import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-bg relative h-lvh">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
