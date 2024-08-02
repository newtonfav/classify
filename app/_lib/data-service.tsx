import { supabase } from "./supabase";

export const getItems = async function () {
  const { data, error } = await supabase
    .from("items")
    .select("id, name, quantity, image, userId")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return data;
};

export async function updateItem(
  id: string,
  updatedFields: { quantity?: number }
) {
  const { data, error } = await supabase
    .from("items")
    .update(updatedFields)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Item could not be updated");
  }
  return data;
}

export async function uploadImagetoStorage(file: File, path: string) {
  // Create Supabase client
  const { data, error } = await supabase.storage
    .from("images")
    .upload(path, file, {
      upsert: true,
    });

  if (error) {
    console.error(error);
    throw new Error("Image could not be uploaded");
  }

  return data;
}
