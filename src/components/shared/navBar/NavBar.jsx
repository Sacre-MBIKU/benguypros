import NavBarDecoration from "./NavBarDecoration";
import Logo from "../../Logo";
import ButtonSearch from "../buttonSearch/ButtonSearch";

const NavBar = () => (
  <NavBarDecoration>
    <ButtonSearch />
    <Logo />
  </NavBarDecoration>
);

export default NavBar;
