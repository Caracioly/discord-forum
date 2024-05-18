import { ReactNode } from "react";

interface RootSelectorProps {
  children: ReactNode;
}

export function RootSelector({ children }: RootSelectorProps) {
  return <div className="flex gap-3 gap-x-5 w-full">{children}</div>;
}
