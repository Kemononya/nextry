import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import Button from "@/components/button/Button";
import { navbarItems } from "./navBarItems";
import style from "./HomePageHeader.module.scss";

const HeaderHomePage = () => {
  return (
    <header className={style.homePageHeader}>
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
