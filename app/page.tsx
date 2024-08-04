import Image from "next/image";
import avatar from "@/public/avatar.svg";
import illustration from "@/public/illustration.svg";
import SignInButton from "./_components/SigninButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["greek"], display: "swap" });
export default function Home() {
  return (
    <div className=" my-auto text-center flex flex-row justify-evenly items-center">
      <div>
        <Image src={illustration} alt="avatar illustration" />
      </div>

      <div>
        <div className="text-[1.8rem] items-center select-none">
          <div className="inline-flex items-center mb-6">
            <h1 className="font-bold text-accent-600">Welcome to Classify </h1>
            <Image
              src={avatar}
              alt="magnifying glass"
              width={150}
              height={150}
              className="invert transform scale-x-[-1]"
            />
          </div>

          <div
            className={` ${inter.className} text-wrap font-bold bg-accent-600 px-5 py-6 self-center capitalize text-white`}
          >
            An Image recognition <br /> inventory-based Web Application.
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-16 items-center">
          <h2 className="font-semibold text-[1rem]">
            Sign in with Google to use Classify
          </h2>

          <SignInButton />
        </div>
      </div>
    </div>
  );
}
