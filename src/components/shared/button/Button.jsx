import ButtonDecoration from "./ButtonDecoration";

const Button = ({
  children,
  bgSecondary,
  positionX,
  positionY,
  size,
  borderButton,
}) => (
  <ButtonDecoration
    bgSecondary={bgSecondary}
    positionX={positionX}
    positionY={positionY}
    size={size}
    borderButton = {borderButton}
  >
    {children}
  </ButtonDecoration>
);

export default Button;
