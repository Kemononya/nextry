import Link from "next/link";
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
      <Link href="/generator">TRY AI GENERATOR</Link>
    </section>
  );
};

export default TextSection;
