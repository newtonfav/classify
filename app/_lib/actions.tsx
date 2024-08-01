"use server";

import { revalidatePath } from "next/cache";
import { updateItem } from "./data-service";

export async function handleAdd(id: string, quantity: number) {
  try {
    await updateItem(id, { quantity: quantity + 1 });
    revalidatePath("/inventory");
  } catch (error) {
    console.error("Error updating item:", error);
  }
}

export async function handleRemove(id: string, quantity: number) {
  try {
    await updateItem(id, { quantity: quantity - 1 });
    revalidatePath("/inventory");
  } catch (error) {
    console.error("Error updating item:", error);
  }
}
