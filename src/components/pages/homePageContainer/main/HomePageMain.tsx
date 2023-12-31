import About from "./components/about/About";
import Comparison from "./components/comparison/Comparison";
import HowItWork from "./components/howItWork/HowItWorks";
import FAQ from "./components/faq/FAQ";
import Contact from "./components/contact/Contact";
import style from "./HomePageMain.module.scss";

const HomePageMain = () => {
  return (
    <main className={style.homePageMain}>
      <About />
      <Comparison />
      <HowItWork />
      <FAQ />
      <Contact />
    </main>
  );
};

export default HomePageMain;
