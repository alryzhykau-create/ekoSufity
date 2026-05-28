import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const variantClass =
    variant === "secondary" ? "btnSecondary" : variant === "dark" ? "btnDark" : "btnPrimary";

  return (
    <Link className={`btn ${variantClass} ${className}`} href={href}>
      {children}
    </Link>
  );
}
