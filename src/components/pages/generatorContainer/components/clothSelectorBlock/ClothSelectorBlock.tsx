"use client";
import { useState } from "react";
import style from "./ClothSelectorBlock.module.scss";

const ClothSelectorBlock = () => {
  const [mainNav, setMainNav] = useState(0);
  const [secondNav, setSecondNav] = useState(3);
  const [cloth, setCloth] = useState(10);

  const genderNav = [
    { id: 0, title: "Women" },
    { id: 1, title: "Men" },
    { id: 2, title: "Kids" },
  ];

  const clothsNav = [
    { id: 3, title: "Shoes" },
    { id: 4, title: "Dresses" },
    { id: 5, title: "Jackets" },
    { id: 6, title: "Sneakers" },
    { id: 7, title: "T-shirts" },
  ];

  const handlerMainNavOnClick = (id: number) => {
    setMainNav(id);
  };

  const handlerSecondNavOnClick = (id: number) => {
    setSecondNav(id);
  };

  return (
    <section className={style.clothSelectorBlock}>
      <section className={style.navSection}>
        <nav className={style.navbar}>
          {genderNav.map(({ id, title }) => (
            <button
              onClick={() => handlerMainNavOnClick(id)}
              className={[
                style.btn,
                style.btn__main,
                id === mainNav ? style["btn-fill"] : null,
              ].join(" ")}
              key={id}
            >
              {title}
            </button>
          ))}
        </nav>
        <nav className={[style.navbar, style.navbar].join(" ")}>
          {clothsNav.map(({ id, title }) => (
            <button
              onClick={() => handlerSecondNavOnClick(id)}
              className={[
                style.btn,
                style.btn__second,
                id === secondNav ? style["btn-fill"] : null,
              ].join(" ")}
              key={id}
            >
              {title}
            </button>
          ))}
        </nav>
      </section>
    </section>
  );
};

export default ClothSelectorBlock;
