import { ReactNode } from "react";

interface FractionProps {
  numerator: ReactNode;
  denominator: ReactNode;
}

/**
 * CSS-based fraction. NEVER use "/" for fractions in UI text.
 */
export const Fraction = ({ numerator, denominator }: FractionProps) => (
  <div
    className="inline-flex flex-col items-center justify-center align-middle mx-1.5 font-math leading-none"
    dir="ltr"
  >
    <span className="border-b-2 border-current px-1.5 text-center w-full pb-0.5">
      {numerator}
    </span>
    <span className="text-center px-1.5 pt-0.5">{denominator}</span>
  </div>
);

export default Fraction;
