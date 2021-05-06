import HeaderDecoration from "../components/shared/header/HeaderDecoration";
import NavBar from "../components/shared/navBar/NavBar";
const HeaderCinema = ({bgColor, boxShadow, logoSecondary, borderStyle}) => (
  <HeaderDecoration bgColor = {bgColor} boxShadow = {boxShadow}>
    <NavBar borderStyle = {borderStyle} logoSecondary = {logoSecondary} positionX="40%" />
  </HeaderDecoration>
);

export default HeaderCinema;
