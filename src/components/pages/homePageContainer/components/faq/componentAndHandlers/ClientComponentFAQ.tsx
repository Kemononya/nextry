"use client";

import { useState } from "react";

import Image from "next/image";
import plus from "@/public/plus.png";
import minus from "@/public/minus.png";

import style from "../FAQ.module.scss";

const ClientComponentFAQ = ({ answer }: { answer: string }) => {
  const [btnState, setBtnState] = useState("plus");
  const onClickHandler = () => {
    const newBtnState = btnState === "plus" ? "minus" : "plus";
    setBtnState(newBtnState);
  };

  return (
    <>
      <button onClick={onClickHandler}>
        <Image
          src={plus}
          alt="plus"
          className={
            btnState === "plus"
              ? style.faq__elementShow
              : style.faq__elementHide
          }
        />
        <Image
          src={minus}
          alt="minus"
          className={
            btnState === "minus"
              ? style.faq__elementShow
              : style.faq__elementHide
          }
        />
      </button>
      <p
        className={
          btnState === "minus" ? style.faq__elementShow : style.faq__elementHide
        }
      >
        {answer}
      </p>
    </>
  );
};

export default ClientComponentFAQ;
