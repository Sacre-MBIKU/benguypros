import styled, { css } from "styled-components";

const TitleMovieDecoration = styled.h3`
  position: absolute;
  top: ${({ positionYTitle }) => "0" || "0"};
  right: ${({ positionXTitle }) => "0" || "0"};
  width: ${({ width }) => "50%" || "30%"};
  height: 50%;
  border: 1px solid #f9bf2c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9bf2c;
  font-size: ${({ sizeTitle }) => sizeTitle || "13px"};
  text-align: center;
  transition: all 0.5s ease;
  background-color : #1a1a1a;
  opacity : .5;
  z-index : 2;
  

`;

const TitleMovie = ({
  children,
  width,
  positionXTitle,
  positionYTitle,
  sizeTitle,
  isTitleMovieDisplayed
}) => {
  return (
    <TitleMovieDecoration
      positionYTitle={positionYTitle}
      positionXTitle={positionXTitle}
      sizeTitle={sizeTitle}
      width={width}
      isTitleMovieDisplayed = {isTitleMovieDisplayed}
    >
      {children}{" "}
    </TitleMovieDecoration>
  );
};

export default TitleMovie;
