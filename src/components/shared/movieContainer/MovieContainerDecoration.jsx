import styled from "styled-components";

const MovieContainerDecoration = styled.article`
  position: absolute;
  top: 20%;
  left: 4%;
  width: 90%;
  height: 50%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: space-around;
  }
`;

export default MovieContainerDecoration;
