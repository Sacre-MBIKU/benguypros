import CrossButton from "../../../../components/shared/crossButton/CrossButton";
import PlayButton from "../../../../components/shared/playButton/PlayButton";
import TitleCinema from "../../../../components/shared/titleCinema/TitleCinema";
import HeroSectionModalBoxDecoration from "./HeroSectionModalBoxDecoration";
const heroSectionModalBox = () => {
  return <HeroSectionModalBoxDecoration>
      <CrossButton/>
      <PlayButton />
      <TitleCinema />
      </HeroSectionModalBoxDecoration>;
};

export default heroSectionModalBox;
