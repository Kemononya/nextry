import style from "./Button.module.scss";

interface Button {
  children: string | JSX.Element;
  type:
    | "logIn"
    | "tryAIGenMain"
    | "tryAIGenFooter"
    | "submit"
    | "clothsMain"
    | "clothsSecond";
}

const Button = ({ children, type }: Button) => {
  return (
    <button className={[style.btn, style[type]].join(" ")}>{children}</button>
  );
};

export default Button;
