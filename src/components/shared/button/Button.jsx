import ButtonDecoration from "./ButtonDecoration";

const Button = ({
  children,
  bgSecondary,
  positionX,
  positionY,
  size,
  borderButton,
  responsiveButton768,
  responsiveFilmButton540,
  responsiveSerieButton540,
}) => (
  <ButtonDecoration
    bgSecondary={bgSecondary}
    positionX={positionX}
    positionY={positionY}
    size={size}
    borderButton={borderButton}
    responsiveButton768={responsiveButton768}
    responsiveFilmButton540={responsiveFilmButton540}
    responsiveSerieButton540={responsiveSerieButton540}
  >
    {children}
  </ButtonDecoration>
);

export default Button;
