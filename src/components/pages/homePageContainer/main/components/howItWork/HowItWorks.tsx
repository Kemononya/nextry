import Image from "next/image";
import HowItWorkImage1 from "@/public/HowItWorkImage1.png";
import HowItWorkImage2 from "@/public/HowItWorkImage2.png";
import HowItWorkImage3 from "@/public/HowItWorkImage3.png";
import InvestmentFocus from "@/public/InvestmentFocus.png";
import InvestmentUnfocus from "@/public/InvestmentUnfocus.png";
import LineTop from "@/public/LineTop.png";
import LineBottom from "@/public/LineBottom.png";
import style from "./HowItWork.module.scss";

const HowItWork = () => {
  return (
    <article className={style.howItWork} id="howItWorks">
      <section>
        <h1>HOW DOES IT WORK?</h1>
        <h2>Make a cool look in 3 easy steps</h2>
      </section>
      <section className={style.howItWork__contentBlock}>
        <section className={style.howItWork__section}>
          <div className={style.howItWork__textBlock}>
            <h2>Upload photo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui congue sem et tempus
              aliquam leo. In faucibus varius diam nunc. Urna euismod augue
              interdum viverra donec semper. Eu neque vulputate sed sit eu magna
              morbi nibh gravida. Aliquam massa id duis at luctus. Ornare in
              eget aliquet morbi congue pulvinar vitae. Amet senectus eget
              hendrerit ac pulvinar nunc aliquam accumsan. Donec purus purus
              arcu sit purus massa. Imperdiet in dictumst et enim duis ac sed
              vitae.
            </p>
          </div>
          <div className={style.howItWork__iconBlock}>
            <Image src={InvestmentFocus} alt="icons" />
            <Image src={LineTop} alt="icons" />
            <Image src={InvestmentUnfocus} alt="icons" />
            <Image src={LineBottom} alt="icons" />
            <Image src={InvestmentUnfocus} alt="icons" />
          </div>
          <Image
            src={HowItWorkImage1}
            alt="how it work step"
            className={style.howItWork__imgBlock}
            placeholder="blur"
          />
        </section>
        <section className={style.howItWork__section}>
          <Image
            src={HowItWorkImage2}
            alt="how it work step"
            className={style.howItWork__imgBlock}
            placeholder="blur"
          />
          <div className={style.howItWork__textBlock}>
            <h2>Select option</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui congue sem et tempus
              aliquam leo. In faucibus varius diam nunc. Urna euismod augue
              interdum viverra donec semper. Eu neque vulputate sed sit eu magna
              morbi nibh gravida. Aliquam massa id duis at luctus. Ornare in
              eget aliquet morbi congue pulvinar vitae. Amet senectus eget
              hendrerit ac pulvinar nunc aliquam accumsan. Donec purus purus
              arcu sit purus massa. Imperdiet in dictumst et enim duis ac sed
              vitae.
            </p>
          </div>
        </section>
        <section className={style.howItWork__section}>
          <div className={style.howItWork__textBlock}>
            <h2>Generate Image</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui congue sem et tempus
              aliquam leo. In faucibus varius diam nunc. Urna euismod augue
              interdum viverra donec semper. Eu neque vulputate sed sit eu magna
              morbi nibh gravida. Aliquam massa id duis at luctus. Ornare in
              eget aliquet morbi congue pulvinar vitae. Amet senectus eget
              hendrerit ac pulvinar nunc aliquam accumsan. Donec purus purus
              arcu sit purus massa. Imperdiet in dictumst et enim duis ac sed
              vitae.
            </p>
          </div>
          <Image
            src={HowItWorkImage3}
            alt="how it work step"
            className={style.howItWork__imgBlock}
            placeholder="blur"
          />
        </section>
      </section>
    </article>
  );
};

export default HowItWork;
