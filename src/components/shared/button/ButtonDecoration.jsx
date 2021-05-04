import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const ButtonDecoration = styled.button`
  background-color: ${props => props.bgSecondary || "#f9bf2c"} ;
  padding: 15px 35px;
  font-family: Barlwow;
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  border-style: none;
  color: #fff;
  bottom: 18%;
  right:  ${props => props.positionX || "5%"};
  
`;

export default ButtonDecoration;
