import styled from "styled-components";
import logo from "../assets/logo/logo.svg";
const StyledLogo = styled.img`
  width: 180px;
  height: 80px;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Logo = () => {
  return <StyledLogo src={logo} />;
};

export default Logo;
