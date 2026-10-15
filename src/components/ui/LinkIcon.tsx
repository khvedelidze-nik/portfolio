import type { ReactNode } from "react";

interface LinkIconProps {
  src: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
}

const LinkIcon = ({ src, alt = "", className = "", children }: LinkIconProps) => {
  return (
    <>
      <img
        className={`h-6 w-6 ${className}`}
        src={src}
        alt={alt}
        aria-hidden={!alt}
      />
      {children}
    </>
  );
};

export default LinkIcon;