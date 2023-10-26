"use client";

import Button from "@/components/button/Button";
import style from "./Contact.module.scss";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <article className={style.contact} id="contact">
      <h1>CONTACT US</h1>
      <form>
        <span>
          <h2>Want to Feedback?</h2>
          <p>Just fill fields below and we will take a touch with you</p>
        </span>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            value={email}
            placeholder=""
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder=""
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className={style.policy}>
          <div />
          <p>
            By clicking “Continue”, I agree to the{" "}
            <span>policy regarding the processing of personal data</span>
          </p>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </article>
  );
};

export default Contact;
