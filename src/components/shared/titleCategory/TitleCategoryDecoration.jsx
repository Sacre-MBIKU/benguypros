import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const TitleCategoryDecoration = styled.h2`
  position: absolute;
  left: 4%;
  top: 10%;
  width: auto;
  height: auto;
  padding: 5px 10px;
  color: white;
  border-left: 3px solid #f9bf2c;
  font-family: Barlow;
  font-size: ${({ size }) => (size ? size : "30px")};
  cursor: pointer;
`;

export default TitleCategoryDecoration;