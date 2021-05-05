import { FaSearchengin } from "react-icons/fa";
const SearchIcon = () => (
  <i style = {
      {position : "absolute",
        top : '0%',
        left : "0%",
        height : "100%",
        width : "auto",
        color : "black",
        cursor : "pointer",
        transform : 'translate(50%, 25%)',
    }
  } >
    <FaSearchengin />
  </i>
);
export default SearchIcon;
