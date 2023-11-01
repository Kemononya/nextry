"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import Button from "@/components/button/Button";
import { navbarItems } from "./navBarItems";
import style from "./Header.module.scss";

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
      <Button type="logIn">Log In</Button>
    </header>
  );
};

export default Header;
