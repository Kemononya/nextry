"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import { navbarItemsHome, navbarItemsGenerator } from "./navBarItems";
import style from "./Header.module.scss";
import { SIGN_IN_ROUTE } from "@/routes";

interface IHeader {
  type: "home" | "generator";
}

const headerTypes = {
  home: {
    navBarItems: navbarItemsHome,
    className: style.header,
  },
  generator: {
    navBarItems: navbarItemsGenerator,
    className: [style.header, style.generator].join(" "),
  },
};

const Header = ({ type }: IHeader) => {
  return (
    <header className={headerTypes[type].className}>
      <Image src={Logo} alt="nextry logo" />
      <nav className={style.nav}>
        {headerTypes[type].navBarItems.map(({ id, title, route }) => (
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
