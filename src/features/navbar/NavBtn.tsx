import { NavLink } from "react-router-dom";

interface NavBtnProps {
  title: string;
  path: string;
}

const NavBtn = ({ title, path }: NavBtnProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        "text-bold rounded-lg border-b p-1 drop-shadow-xs drop-shadow-white " +
        (isActive ? "text-amber-300" : "text-white")
      }
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default NavBtn;
