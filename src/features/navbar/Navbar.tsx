import { links } from "./links";
import NavBtn from "./NavBtn";

const Navbar = () => {
  return (
    <div className="max-h-2lh absolute right-0 left-0 z-10 flex max-w-full justify-end gap-4 p-3">
      {links.map((link, i) => (
        <NavBtn key={i} title={link.title} path={link.path} />
      ))}
    </div>
  );
};

export default Navbar;
