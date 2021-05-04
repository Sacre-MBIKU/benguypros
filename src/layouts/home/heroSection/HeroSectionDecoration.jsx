import styled from "styled-components";
import banner from "../../../assets/backgrounds/heroSection.jpg";
const HeroSectionStyled = styled.section`
  background-color: #1a1b22;
  width: 100%;
  height: 100vh;
  background-image:
  linear-gradient(to bottom, rgba(117, 19, 93, 0.3), #1A1B22),
  url("${banner}");
  background-size: cover;
  position: relative;
`;

export default HeroSectionStyled;
