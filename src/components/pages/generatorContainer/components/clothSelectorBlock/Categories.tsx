"use client";

import { useState } from "react";
import ClothesCard from "./ClothesCard";
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

const Categories = ({
  categories,
  clothesMan,
  clothesWoman,
}: {
  categories: Categories[];
  clothesMan: Clothes[];
  clothesWoman: Clothes[];
}) => {
  const [selectedCategories, setSelectedCategories] = useState("man");

  const NavClothes = () => (
    <nav>
      {clothesMan.map(({ id, title, preview_url, brand_url }) => (
        <ClothesCard
          key={id}
          id={id}
          title={title}
          preview_url={preview_url}
          brand_url={brand_url}
        />
      ))}
    </nav>
  );

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
      <section>
        <NavClothes />
      </section>
    </>
  );
};

export default Categories;
