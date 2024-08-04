import { auth } from "../_lib/auth";

export default async function Account() {
  const session = await auth();
  return (
    <div className="text-[2rem]">
      <h1>Welcome, {session?.user?.name?.split(" ").at(0)} 👋🏼</h1>
    </div>
  );
}
