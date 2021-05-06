import NavBarDecoration from "./NavBarDecoration";
import Logo from "../../Logo";
import ButtonSearch from "../buttonSearch/ButtonSearch";
import { Link } from "react-router-dom";

const NavBar = ({positionX, logoSecondary, borderStyle}) => (
  <NavBarDecoration>
    <ButtonSearch positionX = {positionX} borderStyle = {borderStyle}/>
    <Link to = "/">
      <Logo logoSecondary = {logoSecondary}/>
    </Link>
    
  </NavBarDecoration>
);

export default NavBar;
