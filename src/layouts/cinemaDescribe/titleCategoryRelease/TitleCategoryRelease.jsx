import TitleCategory from "../../../components/shared/titleCategory/TitleCategory";
import TitleCategoryReleaseDecoration from "./TitleCategoryReleaseDecoration";

const TitleCategoryRelease = () => {
    return (
        <TitleCategoryReleaseDecoration>
            <TitleCategory positionX="0" positionY="4%" size="20px">
            Catégorie : Action/Aventure
            </TitleCategory>
            <TitleCategory positionX="0" positionY="42%" size="20px">
            Notes : 4.3
            </TitleCategory>
            <TitleCategory positionX="0" positionY="80%" size="20px">
            Compagnie : MARVEL
            </TitleCategory>
        </TitleCategoryReleaseDecoration>
    )
}

export default TitleCategoryRelease;