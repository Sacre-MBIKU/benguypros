import HeroSectionModalBox from "../heroSectionModalBox/HeroSectionModalBox";
import ModalBoxContainerDecoration from "./ModalBoxContainerDecoration";
import banner from "../../../../assets/backgrounds/banner.jpg";
import DescriptionCinema from "../descriptionCinema/DescriptionCinema";
import ReleaseDescriptionCinema from "../../releaseDescription/ReleaseDescriptionCinema";
import Casting from "../../castingCinema/Casting";

const ModalBoxContainer = () => {
  return (
    <ModalBoxContainerDecoration banner = {banner}>
        <HeroSectionModalBox />
        <DescriptionCinema />
        <ReleaseDescriptionCinema />
        <Casting />
    </ModalBoxContainerDecoration>
  );
};

export default ModalBoxContainer;
