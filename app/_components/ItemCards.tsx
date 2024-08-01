"use client";

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
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div className="text-[1.25rem] capitalize">
        <span className="block truncate">{name}</span>
      </div>
      <div className="text-[1.25rem]">
        <span>{quantity}</span>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          text="Add"
          bgColor="bg-accent-600"
          type="primary"
          onClickItem={() => handleAdd(id, quantity)}
        />
        <Button
          onClickItem={() => handleRemove(id, quantity)}
          text="Remove"
          bgColor="bg-primary-900"
          type="secondary"
        />
      </div>
    </div>
  );
}
