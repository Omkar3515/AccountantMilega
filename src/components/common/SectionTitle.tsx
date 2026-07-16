import type { SectionTitleProps } from "../../types/common";
import { cn } from "../../utils/cn";

const SectionTitle = ({ title, description, className }: SectionTitleProps) => (
  <div className={cn("text-center", className)}>
    <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
    {description && <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">{description}</p>}
  </div>
);

export default SectionTitle;
