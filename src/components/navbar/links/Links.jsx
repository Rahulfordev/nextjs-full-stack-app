"use client";
import { IoIosMenu } from "react-icons/io";
import style from "./link.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Link from "next/link";
const Links = () => {
  const [isShow, setIsShow] = useState(false);

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
    <>
      <div className={style.container}>
        <Link href="/" className={style.logo}>
          Logo
        </Link>
        <div className={`${style.links}`}>
          {Links.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
              <button className={style.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ name: "Login", path: "/login" }} />
          )}
        </div>
      </div>
      <div className={style.mobileLink}>
        <Link href="/" className={style.logo}>
          Logo
        </Link>
        <IoIosMenu className={style.icon} onClick={() => setIsShow(!isShow)} />
      </div>
      {isShow && (
        <div className={style.responsiveLinks}>
          {Links.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
              <button className={style.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ name: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </>
  );
};

export default Links;
