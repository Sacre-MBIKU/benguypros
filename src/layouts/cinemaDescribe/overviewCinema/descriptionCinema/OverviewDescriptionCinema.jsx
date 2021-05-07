import OverviewCinema from "../OverviewCinema";
import TitleDescription from "../TitleDescription";
import OverviewDescriptionCinemaDecoration from "./OverviewDescriptionCinemaDecoration";

const OverviewDescriptionCinema = () => {
    return(
        <OverviewDescriptionCinemaDecoration>
            <TitleDescription />
            <OverviewCinema />
        </OverviewDescriptionCinemaDecoration>
    )
}

export default OverviewDescriptionCinema ;