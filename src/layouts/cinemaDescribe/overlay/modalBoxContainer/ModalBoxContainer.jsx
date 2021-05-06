import HeroSectionModalBox from "../heroSectionModalBox/HeroSectionModalBox";
import ModalBoxContainerDecoration from "./ModalBoxContainerDecoration";
import banner from "../../../../assets/backgrounds/banner.jpg";

const ModalBoxContainer = () => {
  return (
    <ModalBoxContainerDecoration banner = {banner}>
        <HeroSectionModalBox />
    </ModalBoxContainerDecoration>
  );
};

export default ModalBoxContainer;
