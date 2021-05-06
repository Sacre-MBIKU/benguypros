import SearchIcon from "../../SearchIcon";
import ButtonSearchDecoration from "../buttonSearch/ButtonSearchDecoration";
import InputSearch from "../inputSearch/InputSearch";

const ButtonSearch = ({positionX, borderStyle }) => {
  return (
    <ButtonSearchDecoration positionX = {positionX} borderStyle = {borderStyle}>
      <InputSearch placeHolder="faites une recherche" />
      <SearchIcon />
    </ButtonSearchDecoration>
  );
};

export default ButtonSearch;
