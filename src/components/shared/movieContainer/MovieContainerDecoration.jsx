import styled, { css } from "styled-components";

const MovieContainerDecoration = styled.article`
  position: absolute;
  top: 20%;
  left: 4%;
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: space-between;

  ${({ casting }) =>
    casting === true
      ? css`
          top: 15%;
          left: 0;
          width: 100%;
          height: 80%;
        `
      : ""}
      ${({ similarCinema }) =>
    similarCinema === true
      ? css`
          top: 20%;
          left: 10%;
          width: 80%;
          height: 66.5%;
          border-right : 3px solid #f9bf2c;
          border-left : 3px solid #f9bf2c;
          padding-left : 2.5%;
        `
      : ""}
`;

export default MovieContainerDecoration;
