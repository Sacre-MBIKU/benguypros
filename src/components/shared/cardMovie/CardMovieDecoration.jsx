import styled from "styled-components";

const CardMovieDecoration = styled.div`
  width: ${({ cardWidth }) => cardWidth || "200px"};
  height: ${({ cardHeight }) => cardHeight || "330px"};
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  position: relative;
  cursor: pointer;
`;

export default CardMovieDecoration;
