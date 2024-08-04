import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import LoginButton from "./LoginButton";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/inventory"
            className="hover:text-accent-400 transition-colors"
          >
            Inventory
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <div
              // href="/account"
              className="hover:text-accent-400 transition-colors select-none items-center flex gap-3"
            >
              <Image
                src={session.user.image}
                alt={session.user.name as string}
                width={32}
                height={32}
                className="h-8 rounded-full"
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
