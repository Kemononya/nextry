"use client";

import Link from "next/link";
import Image from "next/image";
import MoveBackIcon from "@/public/ArrowBack.png";
import { useState } from "react";
import Button from "@/components/button/Button";

import style from "./LogInContainer.module.scss";

interface LogIn {
  type: "sign-in" | "sign-up";
}

const LogInContainer = ({ type }: LogIn) => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  return (
    <main className={style.logInContainer}>
      <Link href="/" className={style.moveBack}>
        <Image src={MoveBackIcon} alt="move back img" />
        <p>BACK</p>
      </Link>
      <form
        className={style.logInForm}
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          console.log(process.env)

          const res = await fetch(
            `${process.env.NEXTRY_SERVER}/user/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
              }),
            }
          );

          console.log(res);
        }}
      >
        <h1>Sign In</h1>
        <p>use E-mail to Sign In</p>
        <div className={style.inputsBlock}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="email"
              //value={email}
              placeholder=""
              required
              //onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
            <div>E-mail</div>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="password"
              //value={password}
              placeholder=""
              required
              //onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
            />
            <div>Password</div>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div className={style.policy}>
          <div className={style.policy__icon} />
          <p>
            By clicking “Sign In”, I agree to the{" "}
            <a href="#" className={style.link}>
              policy regarding the processing of personal data
            </a>
          </p>
        </div>
        <Button type="submit">Sign In</Button>
        <p>
          You don’t have an account yet?{" "}
          <a href="#" className={style.link}>
            Sign Up
          </a>
        </p>
      </form>
    </main>
  );
};

export default LogInContainer;
