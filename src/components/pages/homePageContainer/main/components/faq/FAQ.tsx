import Image from "next/image";
import CornerLT from "@/public/CornerLT.png";
import CornerLB from "@/public/CornerLB.png";
import CornerRT from "@/public/CornerRT.png";
import CornerRB from "@/public/CornerRB.png";
import { faqTexts } from "./componentAndHandlers/faqTexts";
import ClientComponentFAQ from "./componentAndHandlers/ClientComponentFAQ";
import style from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <article className={style.faq} id="faq">
      <section>
        <h1>FAQ</h1>
        <h2>Find the answer to your question</h2>
      </section>
      <section className={style.faq__list}>
        {faqTexts.map(({ id, question, answer }) => (
          <div className={style.faq__questionBlock} key={id}>
            <h3>{question}</h3>
            <ClientComponentFAQ answer={answer} />
            <Image
              src={CornerLT}
              alt="corner"
              className={style.faq__cornerLT}
            />
            <Image
              src={CornerLB}
              alt="corner"
              className={style.faq__cornerLB}
            />
            <Image
              src={CornerRT}
              alt="corner"
              className={style.faq__cornerRT}
            />
            <Image
              src={CornerRB}
              alt="corner"
              className={style.faq__cornerRB}
            />
          </div>
        ))}
      </section>
    </article>
  );
};

export default FAQ;
