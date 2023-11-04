"use client";

import { useState } from "react";
import Image from "next/image";
import { BASE_URL } from "@/api";
import style from "./ClothSelectorBlock.module.scss";

interface Categories {
  name: string;
  color: string;
}

interface Clothes {
  id: string;
  title: string;
  brand_url: string;
  preview_url: string;
}

const ContentBlock = ({
  categories,
  clothesMan,
  clothesWoman,
  clothesKid,
}: {
  categories: Categories[];
  clothesMan: Clothes[];
  clothesWoman: Clothes[];
  clothesKid: Clothes[];
}) => {
  const [selectedCategories, setSelectedCategories] = useState("man");
  const [selectedCloth, setSelectedCloth] = useState("");

  const clothes: { [key: string]: Clothes[] } = {
    man: clothesMan,
    woman: clothesWoman,
    kid: clothesKid,
  };

  const handleClothStyle = (id: string) =>
    selectedCloth === "" || id == selectedCloth
      ? style.card
      : [style.card, style.opacityCard].join(" ");

  return (
    <>
      <section className={style.navSection}>
        <nav className={style.navbar}>
          {categories.map(({ name, color }, id) => (
            <button
              className={[
                style.btn,
                name === selectedCategories ? style["btn-fill"] : null,
              ].join(" ")}
              key={id}
              style={{ background: color }}
              onClick={() => setSelectedCategories(name)}
            >
              {name}
            </button>
          ))}
        </nav>
      </section>
      <section className={style.cardBlock}>
        {clothes[selectedCategories].map(
          ({ id, title, preview_url, brand_url }) => (
            <div
              key={id}
              className={handleClothStyle(id)}
              onClick={() => setSelectedCloth(id)}
            >
              <Image
                src={BASE_URL + preview_url}
                width={150}
                height={170}
                alt="cloth image"
              />
              {title}
            </div>
          )
        )}
      </section>
    </>
  );
};

export default ContentBlock;
