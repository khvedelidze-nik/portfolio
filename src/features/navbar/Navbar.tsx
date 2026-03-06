import { links } from "./links";
import NavBtn from "./NavBtn";

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 z-10 flex h-12 max-w-full justify-end gap-1 p-3 backdrop-blur-md md:gap-2">
      {links.map((link, i) => (
        <NavBtn key={i} title={link.title} path={link.path} />
      ))}
    </div>
  );
};

export default Navbar;
