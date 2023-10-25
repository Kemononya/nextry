import TextSection from "./components/TextSection";
import ImgSection from "./components/ImgSection";
import style from "./About.module.scss";

const About = () => {
  return (
    <article className={style.about} id="about">
      <TextSection />
      <ImgSection />
    </article>
  );
};

export default About;
