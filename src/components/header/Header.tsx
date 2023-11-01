"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import { navbarItems } from "./navBarItems";
import style from "./Header.module.scss";
import { SIGN_IN_ROUTE } from "@/routes";

interface IHeader {
  type: "home" | "generator";
}

const Header = ({ type }: IHeader) => {
  const classNameHeader =
    type === "home" ? style.header : [style.header, style.generator].join(" ");
  return (
    <header className={classNameHeader}>
      <Image src={Logo} alt="nextry logo" />
      <nav className={style.nav}>
        {navbarItems.map(({ id, title, route }) => (
          <Link key={id} href={route}>
            {title}
          </Link>
        ))}
      </nav>
      <Link className={style.logIn} href={SIGN_IN_ROUTE}>
        Log In
      </Link>
    </header>
  );
};

export default Header;
