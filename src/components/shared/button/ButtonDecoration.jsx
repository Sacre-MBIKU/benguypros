import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const ButtonDecoration = styled.button`
  background-color: ${(props) => props.bgSecondary || "#f9bf2c"};
  padding: 15px 35px;
  font-family: Barlwow;
  font-weight: 700;
  font-size: ${(props) => props.size || "30px"};
  position: absolute;
  border-style: none;
  color: #fff;
  bottom: ${(props) => props.positionY || "5%"};
  cursor: pointer;
  right: ${(props) => props.positionX || "5%"};
  border: ${(props) => props.borderButton || "none"};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
  }
`;

export default ButtonDecoration;
