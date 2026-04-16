import { useEffect, useRef, useState } from "react";

interface NavBtnProps {
  title: string;
  path: string;
}

const NavBtn = ({ title, path }: NavBtnProps) => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(path);
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + 36;

      const active =
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight;

      setIsActive(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);
  const handleClick = () => {
    const section = document.getElementById(path);
    if (section) {
      scrollTo({ top: section.offsetTop - 36, behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        ref={buttonRef}
        className={`border-border sm:text-md border-b px-1 text-sm font-semibold duration-100 ease-in hover:-translate-y-0.5 ${isActive ? "text-accent" : "text-navInactive hover:text-text"} `}
      >
        {title}
      </button>
    </>
  );
};

export default NavBtn;
