import styled from "styled-components";
const CircleStyled = styled.img`
  position: absolute;
  top: ${(props) => props.circlePositionY || "50%"};
  right: ${(props) => props.circlePositionX || "5%"};
  transform: translateY(-50%);
  width: 100px;
  height: 100px;
`;

export default CircleStyled;
