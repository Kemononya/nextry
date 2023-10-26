"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import Button from "@/components/button/Button";
import { navbarItems } from "./navBarItems";
import useChangeHeaderBackground from "@/hooks/useChangeHeaderBackground";
import style from "./HomePageHeader.module.scss";

const HeaderHomePage = () => {
  const background = useChangeHeaderBackground();
  return (
    <header className={style.homePageHeader} style={{ background }}>
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

export default HeaderHomePage;
