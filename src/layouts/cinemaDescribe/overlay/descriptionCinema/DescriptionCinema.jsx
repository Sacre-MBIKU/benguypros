import CardMovie from "../../../../components/shared/cardMovie/CardMovie";
import banner from "../../../../assets/backgrounds/banner.jpg";
import OverviewDescriptionCinema from "../../overviewCinema/descriptionCinema/OverviewDescriptionCinema";
import DescriptionCinemaDecoration from "./DescriptionCinemaDecoration";

const DescriptionCinema = () => {
  return (
    <DescriptionCinemaDecoration>
      <CardMovie
        heightImage="200px"
        widthImage="200px"
        cardHeight = "250px"
        titleMovie="Spiderman HomeComing"
        urlImageMovie={banner}
      />
        <OverviewDescriptionCinema />
    </DescriptionCinemaDecoration>
  );
};

export default DescriptionCinema;
