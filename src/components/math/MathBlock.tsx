import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MathBlockProps {
  children: ReactNode;
  className?: string;
}

/**
 * MathBlock - wraps any mathematical expression in LTR direction.
 * NEVER mix RTL Hebrew and LTR math inside the same span.
 * Always use this wrapper for numbers, equations, coordinates, variables.
 */
export const MathBlock = ({ children, className = "" }: MathBlockProps) => (
  <span
    dir="ltr"
    className={cn("inline-block font-math tracking-wide", className)}
  >
    {children}
  </span>
);

export default MathBlock;
