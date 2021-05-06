import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const ContainerCinemaCardsDecoration = styled.main`
  width: 99%;
  height: auto;
  display: flex;
  flex-wrap : wrap;
  justify-content: center;
  align-items: center;
  padding: 5% 2%;
  position : relative;

  ul {
      position : absolute;
      top : 20%;
      left : 50%;
      transform : translateX(-50%);
     display: flex;
     flex-wrap : wrap;
     width: 85%;
     justify-content : space-between;
     align-items : space-around;

    li {
      list-style: none;
      width : auto;
      height : auto;
      margin: 35px 0;
      display :flex;
      justify-content : center;
      align-items : center;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default ContainerCinemaCardsDecoration;
