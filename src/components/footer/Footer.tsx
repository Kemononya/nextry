import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import { navbarItems } from "./navBarItems";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__firstBlock}>
        <Image src={Logo} alt="nextry logo" />
        <nav className={style.nav}>
          {navbarItems.map(({ id, title, route }) => (
            <Link key={id} href={route}>
              {title}
            </Link>
          ))}
        </nav>
        <Link className={style.aiGenerator} href="/generator">
          TRY AI GENERATOR
        </Link>
      </div>
      <div className={style.footer__line} />
      <div className={style.footer__secondBlock}>
        <div className={style.footer__secondBlock__documents}>
          <Link href={""}>Privacy Policy</Link>
          <Link href={""}>Terms of Use</Link>
        </div>
        <p>2023. AI Generator. All rights are reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
