import style from "./Button.module.scss";

interface Button {
  children: string | JSX.Element;
  type: "logIn" | "tryAIGen" | "submit";
}

const Button = ({ children, type }: Button) => {
  return (
    <button className={[style.btn, style[type]].join(" ")}>{children}</button>
  );
};

export default Button;
