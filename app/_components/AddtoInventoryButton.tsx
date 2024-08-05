import React, { useTransition } from "react";
import extractNameFromPrompt from "../utils/extractNameFromPrompt";
import { handleCreateItem } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

export interface NewItem {
  name: string;
  userId?: "";
  quantity: number;
  image: string;
  description: string;
}

export function AddtoInventoryButton({
  responseText,
  imagePath,
  onUpdate,
}: {
  responseText: string;
  imagePath: string | undefined;
  onUpdate: () => void;
}) {
  const [isloading, startTransition] = useTransition();

  const imageUrl = `https://yphdqckpsujxoxakgalj.supabase.co/storage/v1/object/public/${imagePath}`;
  const { name, mainText } = extractNameFromPrompt(responseText);

  function handleAddItem() {
    const newItem = {
      name,
      quantity: 1,
      image: imageUrl,
      description: mainText,
    };
    startTransition(() => handleCreateItem(newItem));
    onUpdate();
  }

  function handleNotAddItem() {
    onUpdate();
  }

  return (
    <div className="space-x-4 inline-flex">
      <div
        onClick={isloading ? undefined : handleAddItem}
        className={`bg-accent-600 px-6 select-none py-2 midPhone:text-[0.8rem] cursor-pointer ${
          isloading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isloading ? <SpinnerMini /> : "Yes"}
      </div>
      <div
        onClick={handleNotAddItem}
        className="bg-primary-900 px-6 py-2 midPhone:text-[0.8rem] select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        No
      </div>
    </div>
  );
}
