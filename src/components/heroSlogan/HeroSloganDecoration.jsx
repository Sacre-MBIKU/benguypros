import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const HeroSloganDecoration = styled.h1`
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 35px;
  color: white;
  text-align: center;
  width: 45%;
  font-family: Barlow;

  span {
    color: #f9bf2c;
  }
`;
export default HeroSloganDecoration;
