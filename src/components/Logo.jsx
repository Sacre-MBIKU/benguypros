import styled from "styled-components";
import logo from "../assets/logo/logo.svg";
import logoSecond from "../assets/logo/logo-secondary.svg";
const StyledLogo = styled.img`
  width: 180px;
  height: 80px;
  position: absolute;
  top: 5px;
  left: 5px;

  @media (max-width : 385px){
    top : 10%;
    left : 25%
  }
`;

const Logo = ({logoSecondary}) => {
  return <StyledLogo src={logoSecondary === true ?  logoSecond : logo} />;
};

export default Logo;
