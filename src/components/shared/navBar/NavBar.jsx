import NavBarDecoration from "./NavBarDecoration";
import Logo from "../../Logo";
import ButtonSearch from "../buttonSearch/ButtonSearch";

const NavBar = ({positionX}) => (
  <NavBarDecoration>
    <ButtonSearch positionX = {positionX} />
    <Logo />
  </NavBarDecoration>
);

export default NavBar;
