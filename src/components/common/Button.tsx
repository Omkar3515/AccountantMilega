import type { ButtonProps } from "../../types/common";
import { cn } from "../../utils/cn";

const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(
      "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
