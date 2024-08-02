"use client";

import React, { useState } from "react";
import Image from "next/image";
import testImage from "@/public/test.jpg";
import UploadForm from "@/app/_components/UploadForm";

export default function ImageView() {
  const [imagePath, setImagePath] = useState("");
  const [aiResponse, setaiResponse] = useState("");

  const imageUrl = `https://yphdqckpsujxoxakgalj.supabase.co/storage/v1/object/public/${imagePath}`;

  return (
    <div>
      <div className="h-[16rem] bg-primary-700 rounded-[2rem] flex items-center justify-center">
        {imagePath && (
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
        )}
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
          />
        </div>
      </div>
    </div>
  );
}
