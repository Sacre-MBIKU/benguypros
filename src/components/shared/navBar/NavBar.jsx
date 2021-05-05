import NavBarDecoration from "./NavBarDecoration";
import Logo from "../../Logo";
import ButtonSearch from "../buttonSearch/ButtonSearch";
import { Link } from "react-router-dom";

const NavBar = ({positionX}) => (
  <NavBarDecoration>
    <ButtonSearch positionX = {positionX} />
    <Link to = "/">
      <Logo />
    </Link>
    
  </NavBarDecoration>
);

export default NavBar;
