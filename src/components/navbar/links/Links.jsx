import React from "react";
import styles from "./link.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      {Links.map((item) => (
        <NavLink key={item.name} item={item} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ name: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
