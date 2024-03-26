import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
const page = () => {
  return (
    <header className={classes.header}>
        <h1>
          Restrurant Review, From{" "}
          <span className={classes.highlight}>Anonymous</span>
        </h1>
        <p>
          Choose your favorite Restrurant and review the delicious breakfast, lunch or dinner
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Review</Link>
        </p>
      </header>
  )
}

export default page