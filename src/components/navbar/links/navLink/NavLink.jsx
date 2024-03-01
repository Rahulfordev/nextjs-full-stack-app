"use client";
import { usePathname } from "next/navigation";
import style from "./navlink.module.css";
import Link from "next/link";
const NavLink = ({ item }) => {
  const {name, path} = item;
  const pathName = usePathname();
  return (
    <Link
      className={`${style.container} ${pathName === path && style.active}`}
      href={path}
    >
      {name}
    </Link>
  );
};

export default NavLink;
