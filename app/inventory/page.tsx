import Button from "../_components/Button";
import folder from "@/public/folder.png";
import Image from "next/image";
import testImage from "@/public/test.jpg";

export const metadata = {
  title: "Inventory",
};

export default function Page() {
  return (
    <div className="font-semibold text-2xl mb-7 flex flex-col mx-[5rem]">
      <div className="h-[20rem] bg-primary-700 rounded-[2rem] flex items-center justify-center">
        <Image
          src={testImage}
          alt="Image of a shoe"
          placeholder="blur"
          quality={80}
          width={200}
          height={100}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mt-4 mb-8 text-center">
          This is an image of a <span className="font-bold">Shoe</span>
        </div>
        <div className="text-center text-[1.2rem]  mb-3">
          <button className=" text-black items-center bg-primary-200 py-1 w-1/2 px-1">
            <div className="overflow-hidden">
              <input type="file" />
            </div>
          </button>
        </div>

        <div className="self-center">
          <Button text="Add item" bgColor="bg-accent-600" type="primary" />
        </div>
      </div>
    </div>
  );
}
