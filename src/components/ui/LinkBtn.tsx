import LinkIcon from "./LinkIcon";
import type { ReactNode } from "react";

interface LinkBtnProps {
  href: string;
  children: ReactNode;
  icon?: string;
  iconAlt?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const LinkBtn = ({
  href,
  children,
  icon,
  iconAlt,
  variant = "primary",
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}: LinkBtnProps) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variants = {
    primary:
      "text-accent border border-accent hover:bg-accent/10 hover:text-accentHover",
    secondary:
      "text-text border border-border hover:bg-cardHover hover:border-accent",
    ghost: "text-muted hover:text-text hover:bg-cardHover",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      title={typeof children === "string" ? children : undefined}
    >
      {icon && <LinkIcon src={icon} alt={iconAlt || ""} />}
      {children}
    </a>
  );
};

export default LinkBtn;