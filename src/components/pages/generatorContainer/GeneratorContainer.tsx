import ClothSelectorBlock from "./components/clothSelectorBlock/ClothSelectorBlock";
import ImageBlock from "./components/imageBlock/ImageBlock";
import style from "./GeneratorContainer.module.scss";

const GeneratorContainer = () => {
  return (
    <main className={style.generator}>
      <ImageBlock />
      <ClothSelectorBlock />
    </main>
  );
};

export default GeneratorContainer;
