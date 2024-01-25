"use client";

import { useFormStatus } from "react-dom";

export default function MealFormStatus() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Sharing..." : "Shared!"}</button>
  );
}
