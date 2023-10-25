"use client";

import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";
import rightImg from "@/public/BGRight.png";
import style from "./Comparison.module.scss";

const Comparison = () => {
  return (
    <article className={style.comparison}>
      <ImgComparisonSlider>
        <Image slot="first" src={rightImg} alt="ai-generator-example" />
        <Image slot="second" src={rightImg} alt="ai-generator-example" />
      </ImgComparisonSlider>
    </article>
  );
};

export default Comparison;
