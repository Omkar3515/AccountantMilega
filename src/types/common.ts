import type {
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}