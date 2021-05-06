import styled, { css } from "styled-components";
import GoogleFontLoader from "react-google-font-loader";
<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const PageNumberDecoration = styled.li`
    cursor : pointer;
    border : 3px solid #f9bf2c;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    color white;
    font-weight : 600;
    font-family : Barlow;
    font-size : 20px;
    margin : 0 20px;

    ${({ active }) =>
      active === true
        ? css`
            background-color: #f9bf2c;
            color : #1a1a1a;
          `
        : ""}
`;
export default PageNumberDecoration;
