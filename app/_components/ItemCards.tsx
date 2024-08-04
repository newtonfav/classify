"use client";

import { useOptimistic, useTransition } from "react";
import Button from "./Button";
import { handleAdd, handleRemove } from "@/app/_lib/actions";

export interface Item {
  id: string;
  name: string;
  quantity: number;
  image?: string;
  userId?: string;
}

export default function ItemCards({ id, name, quantity }: Item) {
  const [isloading, startTransition] = useTransition();
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    quantity,
    (curQuantity: number, buttonType: string) => {
      if (buttonType === "addButton") {
        return curQuantity + 1;
      } else if (buttonType === "removeButton") {
        return curQuantity - 1;
      } else {
        return curQuantity;
      }
    }
  );

  async function handleAddQuantity(e: React.MouseEvent<HTMLButtonElement>) {
    startTransition(async () => {
      const buttonType = e.currentTarget.id;
      setOptimisticQuantity(buttonType);
      if (buttonType === "addButton") {
        await handleAdd(id, quantity);
      } else if (buttonType === "removeButton") {
        await handleRemove(id, quantity);
      }
    });
  }

  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div className="text-[1.25rem] capitalize">
        <span className="block truncate">{name}</span>
      </div>
      <div className="text-[1.25rem]">
        <span>{optimisticQuantity}</span>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          text="Add"
          bgColor="bg-accent-600"
          id={"addButton"}
          type="primary"
          onClickItem={handleAddQuantity}
        />
        <Button
          isLoading={optimisticQuantity === 0 ? isloading : undefined}
          onClickItem={handleAddQuantity}
          text="Remove"
          id={"removeButton"}
          bgColor="bg-primary-900"
          type="secondary"
        />
      </div>
    </div>
  );
}
