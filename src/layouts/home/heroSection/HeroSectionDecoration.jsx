import styled from "styled-components";
import bannerSection from "../../../assets/backgrounds/heroSection.jpg";
const HeroSectionDecoration = styled.section`
  background-color: #1a1b22;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(117, 19, 93, 0.3), #1a1b22),
    url("${({ banner }) => banner || bannerSection}");
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default HeroSectionDecoration;
