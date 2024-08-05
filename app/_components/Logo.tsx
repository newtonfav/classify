import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 midPhone:w-[2.5rem]">
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="Classify logo"
      />
      <span className="text-xl font-semibold text-primary-100">Classify</span>
    </Link>
  );
}

export default Logo;
