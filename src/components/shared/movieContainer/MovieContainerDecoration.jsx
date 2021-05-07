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
`;

export default MovieContainerDecoration;
