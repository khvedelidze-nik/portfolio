import type { ReactNode } from "react";

interface SkillItemProps {
  /** Visible skill name */
  children: ReactNode;
  /** Tooltip text – custom styled tooltip */
  title?: string;
  // Allow any extra HTML attributes (optional)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * SkillItem renders a skill name with a styled tooltip showing the description.
 * Uses Tailwind utilities for a custom tooltip that matches the project's design.
 */
const SkillItem = ({ children, title, ...rest }: SkillItemProps) => {
  return (
    <li
      className="relative text-text text-sm font-medium px-3 py-2 bg-cardHover rounded-lg border border-border transition-colors hover:border-accent/50 hover:bg-card hover:text-accent group"
      {...rest}
    >
      {children}
      {/* Custom tooltip – appears on hover */}
      {title && (
        <div
          className="pointer-events-none absolute left-1/2 bottom-full mb-2 w-max max-w-xs -translate-x-1/2 rounded-md bg-bg text-text text-xs p-2 shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          {title}
        </div>
      )}
    </li>
  );
};

export default SkillItem;

