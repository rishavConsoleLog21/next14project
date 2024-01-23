'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
