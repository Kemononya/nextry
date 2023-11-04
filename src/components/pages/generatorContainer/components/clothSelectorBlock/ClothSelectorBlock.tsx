import { GET_CATEGORIES_API, GET_CLOTHES_API } from "@/api";
import ContentBlock from "./ContentBlock";
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
    next: { revalidate: 10 },
  });
  const clothesWoman = await resClothesWoman.json();

  const resClothesMan = await fetch(GET_CLOTHES_API + "?category=man", {
    next: { revalidate: 10 },
  });
  const clothesMan: Clothes[] = await resClothesMan.json();

  const resClothesKid = await fetch(GET_CLOTHES_API + "?category=kid", {
    next: { revalidate: 10 },
  });
  const clothesKid: Clothes[] = await resClothesKid.json();

  return (
    <section className={style.clothSelectorBlock}>
      <ContentBlock
        categories={categories}
        clothesMan={clothesMan}
        clothesWoman={clothesWoman}
        clothesKid={clothesKid}
      />
    </section>
  );
};

export default ClothSelectorBlock;
