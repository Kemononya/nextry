import HomePageHeader from "./header/HomePageHeader";
import HomePageMain from "./main/HomePageMain";
import style from "./HomePageContainer.module.scss";

const HomePageContainer = () => {
  return (
    <div className={style.homePageContainer}>
      <HomePageHeader />
      <HomePageMain />
    </div>
  );
};

export default HomePageContainer;
