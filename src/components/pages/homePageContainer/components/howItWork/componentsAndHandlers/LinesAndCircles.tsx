"use client";
import Image from "next/image";
import InvestmentFocus from "@/public/InvestmentFocus.png";
import InvestmentUnfocus from "@/public/InvestmentUnfocus.png";
import useFillingLineAndCircle from "@/hooks/useFillingLineAndCircle";
import style from "../HowItWork.module.scss";
import { useRef } from "react";

const LinesAndCircles = () => {
  const topCircleRef = useRef(null);
  const topLineRef = useRef(null);
  const middleCircleRef = useRef(null);
  const bottomLineRef = useRef(null);
  const bottomCircleRef = useRef(null);
  const {
    topFilledLineHeight,
    topPaleLineHeight,
    bottomFilledLineHeight,
    bottomPaleLineHeight,
    topCircleStatus,
    middleCircleStatus,
    bottomCircleStatus,
  } = useFillingLineAndCircle({
    topCircleRef,
    topLineRef,
    middleCircleRef,
    bottomLineRef,
    bottomCircleRef,
  });
  return (
    <div className={style.howItWork__iconBlock}>
      <div ref={topCircleRef}>
        {topCircleStatus === "pale" && (
          <Image src={InvestmentUnfocus} alt="icons" />
        )}
        {topCircleStatus === "filled" && (
          <Image src={InvestmentFocus} alt="icons" />
        )}
      </div>
      <div className={style.line} ref={topLineRef}>
        <div
          className={style.filledLine}
          style={{ height: `${topFilledLineHeight}%` }}
        ></div>
        <div
          className={style.paleLine}
          style={{ height: `${topPaleLineHeight}%` }}
        ></div>
      </div>
      <div ref={middleCircleRef}>
        {middleCircleStatus === "pale" && (
          <Image src={InvestmentUnfocus} alt="icons" />
        )}
        {middleCircleStatus === "filled" && (
          <Image src={InvestmentFocus} alt="icons" />
        )}
      </div>
      <div className={style.line} ref={bottomLineRef}>
        <div
          className={style.filledLine}
          style={{ height: `${bottomFilledLineHeight}%` }}
        ></div>
        <div
          className={style.paleLine}
          style={{ height: `${bottomPaleLineHeight}%` }}
        ></div>
      </div>
      <div ref={bottomCircleRef}>
        {bottomCircleStatus === "pale" && (
          <Image src={InvestmentUnfocus} alt="icons" />
        )}
        {bottomCircleStatus === "filled" && (
          <Image src={InvestmentFocus} alt="icons" />
        )}
      </div>
    </div>
  );
};

export default LinesAndCircles;
