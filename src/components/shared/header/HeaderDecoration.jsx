import styled from "styled-components";

const HeaderDecoration = styled.header`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  width: auto;
  padding-bottom: 7%;
  box-shadow: ${({ boxShadow }) => (boxShadow ? "0 2px 4px 2px white" : "")};
`;

export default HeaderDecoration;
