import styled from "styled-components";

const MoviesByCategorieDecoration = styled.section`
  width: 100%;
  height: ${({height}) => height ? height : "100vh"};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`;

export default MoviesByCategorieDecoration;
