import HeroSectionModalBox from "../heroSectionModalBox/HeroSectionModalBox";
import ModalBoxContainerDecoration from "./ModalBoxContainerDecoration";
import DescriptionCinema from "../descriptionCinema/DescriptionCinema";
import ReleaseDescriptionCinema from "../../releaseDescription/ReleaseDescriptionCinema";
import Casting from "../../castingCinema/Casting";
import SimilarCinema from "../../similar_cinema/SimilarCinema";

const ModalBoxContainer = () => {
  return (
    <ModalBoxContainerDecoration >
        <HeroSectionModalBox />
        <DescriptionCinema />
        <ReleaseDescriptionCinema />
        <Casting />
        <SimilarCinema />
    </ModalBoxContainerDecoration>
  );
};

export default ModalBoxContainer;
