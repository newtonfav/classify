import { auth } from "./auth";
import { supabase } from "./supabase";

export const getItems = async function () {
  const session: any = await auth();

  const { data, error } = await supabase
    .from("items")
    .select("id, name, quantity, image, userId")
    .eq("userId", session?.user?.userId)
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return data;
};

export const getItemsByName = async function (name: string) {
  const { data, error } = await supabase
    .from("items")
    .select("id, quantity")
    .eq("name", name);

  if (error) {
    console.error(error);
    throw new Error("Unable to check for item");
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

export async function createItem(newItem: {}) {
  const { data, error } = await supabase
    .from("items")
    .insert([newItem])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Item could not be created");
  }

  return data;
}

export async function deleteItem(id: string) {
  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }
}

export async function getUser(email: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createUser(newUser: {}) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}
