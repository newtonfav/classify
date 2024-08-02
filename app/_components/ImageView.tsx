"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import UploadForm from "@/app/_components/UploadForm";
import Spinner from "./Spinner";

export default function ImageView() {
  const [imagePath, setImagePath] = useState("");
  const [aiResponse, setaiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl = `https://yphdqckpsujxoxakgalj.supabase.co/storage/v1/object/public/${imagePath}`;

  // console.log(isLoading);

  return (
    <div>
      <div className="h-[16rem] rounded-[2rem] bg-primary-800 backdrop-blur-[20px] opacity-90 flex items-center justify-center overflow-hidden p-6 relative">
        {isLoading && <Spinner />}
        {imagePath && (
          <Image
            src={imageUrl}
            alt="Image of a shoe"
            quality={80}
            width={200}
            height={100}
            className=""
          />
        )}
        {!isLoading && !imagePath && (
          <div className="text-[1.3rem] text-wrap text-center text-white">
            Identify an image using AI🤖, start by uploading an image
          </div>
        )}
        {/* {!imagePath ? (
          <div className="text-[1.3rem] text-wrap text-center text-white">
            Identify an image using AI🤖, start by uploading an image
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt="Image of a shoe"
            placeholder="blur"
            quality={80}
            width={200}
            height={100}
            className=""
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8vMOnHgAG1QJoDxd3CAAAAABJRU5ErkJggg=="
          />
        )} */}
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          {aiResponse && (
            <div className="mt-2 text-[1rem] text-center">{aiResponse}</div>
          )}
        </div>

        <div className="text-center text-[1.2rem]">
          <UploadForm
            setImagePath={setImagePath}
            setaiResponse={setaiResponse}
            setisLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <Image
  src={imageUrl}
  alt="Image of a shoe"
  placeholder="blur"
  quality={80}
  width={200}
  height={100}
  className=""
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8vMOnHgAG1QJoDxd3CAAAAABJRU5ErkJggg=="
/>; */
}
