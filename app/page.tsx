import Image from "next/image";
import avatar from "@/public/avatar.svg";
import illustration from "@/public/illustration.svg";
import SignInButton from "./_components/SigninButton";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["greek"], display: "swap" });
export default function Home() {
  return (
    <div className=" my-auto text-center flex flex-col">
      <div className="flex flex-row justify-evenly items-center mb-10 tabletCustom:flex-col">
        <div className="tabletCustom:hidden">
          <Image src={illustration} alt="avatar illustration" />
        </div>

        <div>
          <div className="text-[1.8rem] items-center select-none tabletPortrait:text-[1.2rem]">
            <div className="inline-flex items-center mb-6 phone:flex-col-reverse">
              <h1 className="font-bold text-accent-600">
                Welcome to Classify{" "}
              </h1>
              <Image
                src={avatar}
                alt="illustration of a person using a computer"
                quality={100}
                width={150}
                height={150}
                className="invert transform scale-x-[-1] phone:mb-5"
              />
            </div>

            <div
              className={` ${inter.className} text-wrap font-bold bg-accent-600 midPhone:px-3 midPhone:py-3 px-5 py-6 self-center capitalize text-white`}
            >
              An Image recognition <br /> inventory-based Web Application.
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-16 items-center">
            <h2 className="font-semibold text-[1rem] phone:text-[0.8rem]">
              Sign in with Google to use Classify
            </h2>

            <SignInButton />
          </div>
        </div>
      </div>

      <div className="mt-4 phone:text-[0.8rem]">
        Built with ❤️ by{" "}
        <a
          href="https://newtonfav.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent-500"
        >
          Favour Oghenekowho
        </a>
      </div>
    </div>
  );
}
