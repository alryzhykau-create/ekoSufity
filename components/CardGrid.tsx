import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function CardGrid({ children, columns = 3, className = "" }: CardGridProps) {
  return (
    <div className={["grid gap-5", columnClasses[columns], className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
