import HeroSectionModalBox from "../heroSectionModalBox/HeroSectionModalBox";
import ModalBoxContainerDecoration from "./ModalBoxContainerDecoration";
import banner from "../../../../assets/backgrounds/banner.jpg";
import DescriptionCinema from "../descriptionCinema/DescriptionCinema";
import ReleaseDescriptionCinema from "../../releaseDescription/ReleaseDescriptionCinema";

const ModalBoxContainer = () => {
  return (
    <ModalBoxContainerDecoration banner = {banner}>
        <HeroSectionModalBox />
        <DescriptionCinema />
        <ReleaseDescriptionCinema />
    </ModalBoxContainerDecoration>
  );
};

export default ModalBoxContainer;
