import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import LoginButton from "./LoginButton";
import Navtoggle from "./Navtoggle";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl relative">
      <div className="flex justify-between items-center px-4 py-2">
        <Navtoggle />
      </div>
      <ul
        id="nav-items"
        className="md:flex gap-16 transition-all duration-500 items-center md:static absolute left-0 bg-white midPhone:text-[1rem] midPhone:text-primary-700 midPhone:-left-[6rem] midPhone:h-[8rem] md:bg-transparent md:w-auto hidden midPhone:p-3"
      >
        <li className="midPhone:mb-2">
          <Link
            href="/inventory"
            className="hover:text-accent-400 transition-colors midPhone:mr-6"
          >
            Inventory
          </Link>
        </li>
        <li className="midPhone:mb-2">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="midPhone:mb-2">
          {session?.user?.image ? (
            <div className="hover:text-accent-400 transition-colors select-none midPhone:w-max items-center flex gap-3 midPhone:gap-0 mr-3">
              <Image
                src={session.user.image}
                alt={session.user.name as string}
                width={32}
                height={32}
                className="h-8 rounded-full mr-2"
                referrerPolicy="no-referrer"
              />
              <SignOutButton />
            </div>
          ) : (
            <Link
              href="/login"
              className="hover:text-accent-400 transition-colors"
            >
              <LoginButton />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
