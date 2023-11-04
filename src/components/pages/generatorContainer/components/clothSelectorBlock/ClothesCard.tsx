"use client";
import Image from "next/image";
import style from "./ClothSelectorBlock.module.scss";
import { BASE_URL } from "@/api";
import { useEffect, useState } from "react";

interface Clothes {
  id: string;
  title: string;
  brand_url: string;
  preview_url: string;
}

const ClothesCard = ({ id, title, brand_url, preview_url }: Clothes) => {
  const [img, setImg] = useState<any>(null);
  useEffect(() => {
    const fetchImg = async (url: string) => {
      const res = await fetch(BASE_URL + url, {
        next: { revalidate: 10 },
      });
      const img = await res.blob();
      setImg(URL.createObjectURL(img));
    };
    fetchImg(preview_url);
  }, [preview_url]);
  return (
    <div key={id}>
      {title}
      {img && <Image src={img} width={100} height={100} alt="cloth image" />}
    </div>
  );
};

export default ClothesCard;
