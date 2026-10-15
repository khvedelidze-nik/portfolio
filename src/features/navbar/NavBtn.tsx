import { useEffect, useRef, useState, useCallback } from "react";

interface NavBtnProps {
  title: string;
  path: string;
  onClick?: () => void;
  className?: string;
}

const NavBtn = ({ title, path, onClick, className = "" }: NavBtnProps) => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    const section = document.getElementById(path);
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    // Account for fixed header height
    const headerOffset = 80;
    const scrollPosition = window.scrollY + headerOffset;

    const active =
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight;

    setIsActive(active);
  }, [path]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = () => {
    const section = document.getElementById(path);
    if (section) {
      const headerOffset = 80;
      const targetPosition = section.offsetTop - headerOffset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={buttonRef}
      className={`
        relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg
        ${isActive ? "text-accent" : "text-navInactive hover:text-text hover:bg-cardHover"}
        ${className}
      `}
      aria-current={isActive ? "page" : undefined}
      aria-label={isActive ? `${title}, current section` : `Go to ${title} section`}
    >
      {title}
      {isActive && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default NavBtn;