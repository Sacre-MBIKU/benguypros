import styled from "styled-components";

const TitleMovieDecoration = styled.h3`
  position: absolute;
  bottom: ${({ positionYTitle }) => positionYTitle || "0"};
  right: ${({ positionXTitle }) => positionXTitle || "-9px"};
  width: ${({ width }) => width || "200px"};
  height: 13%;
  border: 1px solid #f9bf2c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${({ sizeTitle }) => sizeTitle || "13px"};
  text-align: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff;
    color: #1a1a1a;
    border: none;
  }
`;

const TitleMovie = ({
  children,
  width,
  positionXTitle,
  positionYTitle,
  sizeTitle,
}) => {
  return (
    <TitleMovieDecoration
      positionYTitle={positionYTitle}
      positionXTitle={positionXTitle}
      sizeTitle={sizeTitle}
      width={width}
    >
      {children}{" "}
    </TitleMovieDecoration>
  );
};

export default TitleMovie;
