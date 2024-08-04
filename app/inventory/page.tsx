import ImageView from "@/app/_components/ImageView";
import { auth } from "../_lib/auth";
import LoginMessage from "../_components/LoginMessage";

export const metadata = {
  title: "Inventory",
};

export default async function Page() {
  const session = await auth();

  return (
    <div className="font-semibold text-2xl mb-7 flex flex-col mx-[5rem]">
      <div>{session?.user ? <ImageView /> : <LoginMessage />}</div>
    </div>
  );
}
