import Image from "next/image";
import AboutImage from "@/public/AboutImage.png";
import AboutGif from "@/public/imgonline-com-ua-GIF-Animation.gif";
import CornerLT from "@/public/CornerLT.png";
import CornerLB from "@/public/CornerLB.png";
import CornerRT from "@/public/CornerRT.png";
import CornerRB from "@/public/CornerRB.png";
import style from "../About.module.scss";

const ImgSection = () => {
  return (
    <section className={style.about__imgBlock}>
      <Image src={AboutGif} alt="about company img" />
      <Image
        src={CornerLT}
        alt="corner"
        className={style.about__imgBlock__cornerLT}
      />
      <Image
        src={CornerLB}
        alt="corner"
        className={style.about__imgBlock__cornerLB}
      />
      <Image
        src={CornerRT}
        alt="corner"
        className={style.about__imgBlock__cornerRT}
      />
      <Image
        src={CornerRB}
        alt="corner"
        className={style.about__imgBlock__cornerRB}
      />
    </section>
  );
};

export default ImgSection;
