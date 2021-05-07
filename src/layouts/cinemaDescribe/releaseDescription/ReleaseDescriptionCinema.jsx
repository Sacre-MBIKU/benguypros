import CardMovie from "../../../components/shared/cardMovie/CardMovie";
import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import banner from "../../../assets/backgrounds/releaser.jpg";
import ReleaseDescriptionCinemaDecoration from "./ReleaseDescriptionCinemaDecoration";
import TitleCategoryRelease from "../titleCategoryRelease/TitleCategoryRelease";

const ReleaseDescriptionCinema = () => {
  return (
    <ReleaseDescriptionCinemaDecoration>
      <TitleCategory positionX="0" positionY="2%" size="22px">
        Réalisateur
      </TitleCategory>
      <CardMovie
        heightImage="auto"
        widthImage="170px"
        widthTitle="170px"
        cardHeight="270px"
        titleMovie="Jon Watts"
        positionYTitle="-20%"
        positionXTitle="10%"
        urlImageMovie={banner}
      />
      <TitleCategoryRelease/>
    </ReleaseDescriptionCinemaDecoration>
  );
};

export default ReleaseDescriptionCinema;
