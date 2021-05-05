import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const TitlePageDecoration = styled.h2`
  font-size: 40px;
  color: white;
  padding: 15px 35px;
  font-family: Barlwow;
  border-bottom: #f9bf2c 3px solid;
  position: absolute;
  top: 60%;
  left: 20%;

`;

export default TitlePageDecoration;
