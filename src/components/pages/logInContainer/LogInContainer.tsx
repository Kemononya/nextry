"use client";

import Link from "next/link";
import Image from "next/image";
import MoveBackIcon from "@/public/ArrowBack.png";
import type { FormEvent } from "react";
import Button from "@/components/button/Button";

import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "@/routes";

import style from "./LogInContainer.module.scss";

interface LogIn {
  type: "sign-in" | "sign-up";
}

const logInTypes = {
  "sign-up": {
    title: "Sign Up",
    bottomText: "You already have an account?",
    textForLink: "Sign In",
    route: SIGN_IN_ROUTE,
  },
  "sign-in": {
    title: "Sign In",
    bottomText: "You don’t have an account yet?",
    textForLink: "Sign Up",
    route: SIGN_UP_ROUTE,
  },
};

const LogInContainer = ({ type }: LogIn) => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    /*const res = await fetch(
            `https://9c9b-109-198-100-196.ngrok-free.app/user/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password: "asdasdsadsda",
                login: "login",
              }),
            }
          );

          console.log(res);*/
  };

  return (
    <main className={style.logInContainer}>
      <Link href="/" className={style.moveBack}>
        <Image src={MoveBackIcon} alt="move back img" />
        <p>BACK</p>
      </Link>
      <form className={style.logInForm} onSubmit={(e) => onSubmit(e)}>
        <h1>{logInTypes[type].title}</h1>
        <p>use E-mail to {logInTypes[type].title}</p>
        <div className={style.inputsBlock}>
          {type === "sign-up" && (
            <div className={style.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder=""
                required
                aria-label="name"
              />
              <div>Name</div>
            </div>
          )}
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="email"
              placeholder=""
              required
              aria-label="email"
            />
            <div>E-mail</div>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="password"
              placeholder=""
              required
              aria-label="password"
            />
            <div>Password</div>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div className={style.policy}>
          <div className={style.policy__icon} />
          <p>
            By clicking “{logInTypes[type].title}”, I agree to the{" "}
            <a href="#" className={style.link}>
              policy regarding the processing of personal data
            </a>
          </p>
        </div>
        <Button type="submit">Sign In</Button>
        <p>
          {logInTypes[type].bottomText}{" "}
          <Link href={logInTypes[type].route} className={style.link}>
            {logInTypes[type].textForLink}
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LogInContainer;
