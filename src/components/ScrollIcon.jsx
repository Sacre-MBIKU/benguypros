import styled, { keyframes } from "styled-components";
import doubleIcon from "../assets/icons/angle-double-down.svg";

const moveTopToDown = keyframes`
  from {
    transform: translateY(10%);
  }

  to {
    transform: translateY(18%);
  }
`;

const ScrollIconDecoration = styled.img`
  position: absolute;
  bottom: ${({ positionY }) => (positionY ? positionY : "10%")};
  left: ${({ positionX }) => (positionX ? positionX : "47%")};
  transorm : translateX(50%)
  cursor: pointer;
  animation: ${moveTopToDown} 1s ease-in infinite;
`;

const ScrollIcon = ({ positionY }) => (
  <ScrollIconDecoration src={doubleIcon} positionY={positionY} />
);

export default ScrollIcon;
