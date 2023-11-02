import Link from "next/link";
import { GENERATOR_ROUTE } from "@/routes";
import style from "../About.module.scss";

const TextSection = () => {
  return (
    <section className={style.about__textBlock}>
      <section>
        <h1>AI-POWERED</h1>
        <h2>photo generation made easy</h2>
      </section>
      <p>
        Transform your selfies into Professional Headshots with just a few
        clicks
      </p>
      <Link className={style.generatorLink} href={GENERATOR_ROUTE}>TRY AI GENERATOR</Link>
    </section>
  );
};

export default TextSection;