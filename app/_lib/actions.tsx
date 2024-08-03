"use server";

import { revalidatePath } from "next/cache";
import {
  createItem,
  getItemsByName,
  updateItem,
  uploadImagetoStorage,
} from "./data-service";
import { join } from "path";
//Google
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NewItem } from "../_components/AddtoInventoryButton";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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

export async function uploadImage(
  state: { message: string },
  formData: FormData
): Promise<{
  message: string;
  imagePath?: string;
  success: boolean;
  responseText?: string;
}> {
  const file: File | null = formData.get("file") as unknown as File;

  if (!file) throw new Error("No file upload");

  if (file?.type !== "image/jpeg" && file?.type !== "image/png") {
    return { success: false, message: "File must be an image" };
  }

  if (file?.size > 5000000) {
    return { success: false, message: "Image must be less than 5mb" };
  }
  const bytes = await file.arrayBuffer();

  const image = {
    inlineData: {
      data: Buffer.from(bytes).toString("base64"),
      mimeType: file.type,
    },
  };

  const prompt =
    "Describe the contents of the image and provide a short name for it. the name provided should be at the end of the description and should be in a bracket.";

  //Upload to storage
  const path = join("/", "temp", file.name);
  const res = await uploadImagetoStorage(file, path);

  const result = await model.generateContent([prompt, image]);
  const imageUrl = res.fullPath;

  return {
    success: true,
    responseText: result.response.text(),
    imagePath: imageUrl,
    message: "Image classified successfully",
  };
}

export async function handleCreateItem(newItem: NewItem) {
  try {
    const { name, ...rest } = newItem;

    const data = await getItemsByName(name);

    if (!data) {
      throw new Error("Failed to check for existing item");
    }

    if (data.length >= 1) {
      await handleAdd(data[0].id, data[0].quantity);
      return;
    }

    const res = await createItem(newItem);
    revalidatePath("/inventory");
  } catch (error) {
    console.error("Error adding item:", error);
  }
}
