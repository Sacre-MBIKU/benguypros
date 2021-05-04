import SearchIcon from "../../SearchIcon";
import ButtonSearchDecoration from "../buttonSearch/ButtonSearchDecoration";
import InputSearch from "../inputSearch/InputSearch";

const ButtonSearch = () => {
  return (
    <ButtonSearchDecoration>
      <InputSearch placeHolder="faites une recherche" />
      <SearchIcon />
    </ButtonSearchDecoration>
  );
};

export default ButtonSearch;
