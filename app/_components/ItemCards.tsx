import React from "react";
import Button from "./Button";

export interface Item {
  name: string;
  quantity: number;
  image?: string;
  userId?: string;
}

export default function ItemCards({ name, quantity }: Item) {
  function handleAdd() {
    console.log("newton");
  }

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
          // onClick={handleAdd}
        />
        <Button text="Remove" bgColor="bg-primary-900" type="secondary" />
      </div>
    </div>
  );
}
