import Image from "next/image";
import classe from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classe.header}>
        <div className={classe.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classe.headerText}>
          <h1>{meal.title}</h1>
          <p className={classe.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classe.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classe.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
