import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const InputSearchDecoration = styled.input`
  height: 100%;
  width: 80%;
  background-color: transparent;
  position: absolute;
  border-style: none;
  top: 0;
  right: ${props => props.positionX ? props.positionX : "0"};
  color: white;
  opacity: 1;

  &:input:focus {
    border: 1px solid #f9bf2c;
  }
`;

export default InputSearchDecoration;
