import { ReactNode } from "react";
import InventoryItems from "@/app/_components/InventoryItems";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[35rem_1fr] h-full gap-12 tabletCustom:flex tabletCustom:flex-col-reverse">
      <InventoryItems />
      <div className="">{children}</div>
    </div>
  );
}
