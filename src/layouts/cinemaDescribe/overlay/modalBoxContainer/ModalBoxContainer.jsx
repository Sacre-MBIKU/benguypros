import HeroSectionModalBox from "../heroSectionModalBox/HeroSectionModalBox";
import ModalBoxContainerDecoration from "./ModalBoxContainerDecoration";
import banner from "../../../../assets/backgrounds/banner.jpg";
import DescriptionCinema from "../descriptionCinema/DescriptionCinema";

const ModalBoxContainer = () => {
  return (
    <ModalBoxContainerDecoration banner = {banner}>
        <HeroSectionModalBox />
        <DescriptionCinema />
    </ModalBoxContainerDecoration>
  );
};

export default ModalBoxContainer;
