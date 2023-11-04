import { GET_CATEGORIES_API, GET_CLOTHES_API } from "@/api";
import Categories from "./Categories";
import style from "./ClothSelectorBlock.module.scss";

interface Clothes {
  id: string;
  title: string;
  brand_url: string;
  preview_url: string;
}

const ClothSelectorBlock = async () => {
  const res = await fetch(GET_CATEGORIES_API);
  const categories = await res.json();

  const resClothesWoman = await fetch(GET_CLOTHES_API + "?category=woman", {
    next: { revalidate: 3600 },
  });
  const clothesWoman = await resClothesWoman.json();

  const resClothesMan = await fetch(GET_CLOTHES_API + "?category=man", {
    next: { revalidate: 3600 },
  });
  const clothesMan: Clothes[] = await resClothesMan.json();

  return (
    <section className={style.clothSelectorBlock}>
      <Categories
        categories={categories}
        clothesMan={clothesMan}
        clothesWoman={clothesWoman}
      />
    </section>
  );
};

export default ClothSelectorBlock;
