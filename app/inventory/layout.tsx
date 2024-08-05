import { ReactNode } from "react";
import InventoryItems from "@/app/_components/InventoryItems";
import { auth } from "../_lib/auth";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();
  return (
    <>
      {session && (
        <div className="text-[1.5rem] mb-3 midPhone:text-[1rem] midPhone:ml-4">
          Welcome, {session?.user?.name?.split(" ").at(0)} 👋🏼
        </div>
      )}
      <div className="grid grid-cols-[35rem_1fr] h-full gap-12 tabletCustom:flex tabletCustom:flex-col-reverse">
        <InventoryItems />
        <div className="">{children}</div>
      </div>
    </>
  );
}
