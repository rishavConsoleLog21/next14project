"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidInput(text) {
  return !text.trim || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidInput(meal.title) ||
    isValidInput(meal.summary) ||
    isValidInput(meal.instructions) ||
    isValidInput(meal.creator) ||
    isValidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Given Input. Please Try Again." };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
