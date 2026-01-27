import { NavLink } from "react-router-dom";

interface NavBtnProps {
  title: string;
  path: string;
}

const NavBtn = ({ title, path }: NavBtnProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        "text-bold border-border rounded-lg border-b px-1 " +
        (isActive
          ? "text-accent font-semibold"
          : "text-navInactive hover:text-text")
      }
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default NavBtn;
