import Image from "next/image";
import testImage from "@/public/test.jpg";
import UploadForm from "@/app/_components/UploadForm";
import { useState } from "react";
import ImageView from "@/app/_components/ImageView";

export const metadata = {
  title: "Inventory",
};

export default function Page() {
  return (
    <div className="font-semibold text-2xl mb-7 flex flex-col mx-[5rem]">
      <div>
        <ImageView />
      </div>
    </div>
  );
}
