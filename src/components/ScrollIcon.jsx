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
  cursor: pointer;
  display : ${({ displayScroll }) => (displayScroll ? displayScroll : "block")};
  bottom: ${({ positionY }) => (positionY ? positionY : "10%")};
  left: ${({ positionX }) => (positionX ? positionX : "47%")};
  transorm : translateX(50%)
  cursor: pointer;
  animation: ${moveTopToDown} 1s ease-in infinite;

  @media (max-width: 768px) {
    display : none;
  }
`;

const ScrollIcon = ({ positionY, positionX, displayScroll, onClick }) => (
  <ScrollIconDecoration
    src={doubleIcon}
    positionY={positionY}
    positionX={positionX}
    displayScroll={displayScroll}
    onClick={onClick}
  />
);

export default ScrollIcon;
