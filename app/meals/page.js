import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal and enjoy a delicious lunch or dinner at
          home.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <p className={classes.loading}>Fetching Meals from kitchen...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
