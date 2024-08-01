import { supabase } from "./supabase";

export const getItems = async function () {
  const { data, error } = await supabase
    .from("items")
    .select("id, name, quantity, image, userId");
  //  .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};
