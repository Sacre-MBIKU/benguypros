import styled, { css } from "styled-components";

const CardMovieDecoration = styled.div`
  width: 15%;
  height: 75%;
  display: flex;
  align-items: space-between;
  position: relative;
  cursor: pointer;
  border : 1px solid white;
  margin : 20px;

  @media (max-width : 1000px) {
    width : 25%;
    height: 45%;
  }

  @media (max-width : 540px) {
    width : 25%;
    height: 35%;
  }

  }
  
`;

export default CardMovieDecoration;
