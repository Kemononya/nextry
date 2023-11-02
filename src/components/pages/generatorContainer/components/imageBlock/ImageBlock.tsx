"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import DropIcon from "@/public/DropImageIcon.svg";
import DeleteIcon from "@/public/deleteIcon.png";
import DownloadIcon from "@/public/downloadIcon.png";
import ArrowForward from "@/public/ArrowForward.png";
import style from "./ImageBlock.module.scss";

const ImageBlock = () => {
  const [selectedImage, setSelectedImage] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImage([
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      }),
    ]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
    },
    maxSize: 52428800,
  });

  const SelectedImage = () => {
    return (
      <section className={style.dropImageBlock__filled}>
        <RemoveButton />
        <div className={style.dropImageBlock__imageWrapper}>
          <Image
            src={selectedImage[0]?.preview}
            alt="selected image"
            width={100}
            height={100}
            onLoad={() => URL.revokeObjectURL(selectedImage[0]?.preview)}
            className={style.dropImage}
          />
        </div>
        <div className={style.buttonBlock}>
          <DownloadButton />
          <GenerateButton />
        </div>
      </section>
    );
  };

  const RemoveButton = () => {
    return (
      <button className={style.removeBtn} onClick={() => setSelectedImage([])}>
        <Image src={DeleteIcon} alt="remove button" />
      </button>
    );
  };

  const DownloadButton = () => {
    return (
      <button className={style.downloadBtn}>
        <Image src={DownloadIcon} alt="download button" />
      </button>
    );
  };

  const GenerateButton = () => {
    return (
      <button className={style.generateBtn}>
        GENERATE IMAGE
        <Image src={ArrowForward} alt="generate icon" />
      </button>
    );
  };

  return (
    <>
      {selectedImage.length > 0 && <SelectedImage />}
      {selectedImage.length === 0 && (
        <form className={style.dropImageBlock__form}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={style.dropImageBlock}>
              <Image src={DropIcon} alt="drop icon" />
              <p>
                DROP YOUR IMAGES, <span>BROWSE</span>
              </p>
              <p>JPG, PNG, WebP up to 50 mb</p>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ImageBlock;
