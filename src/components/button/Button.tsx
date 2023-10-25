import style from "./Button.module.scss";

interface Button {
  children: string;
  type: "logIn" | "tryAIGen";
}

const Button = ({ children, type }: Button) => {
  return (
    <button className={[style.btn, style[type]].join(" ")}>{children}</button>
  );
};

export default Button;
