import styled, { css } from "styled-components";

const ImageMovieDecoration = styled.img`
width : ${({width}) => "100%" || "100%"};
height : ${({height}) => "100%" || "100%"};
box-shadow: 9px 9px #f9bf2c;
transition : all .5s ease .5s;
z-index : 20;

&:hover{
box-shadow: none;
z-index : -2;
opacity : .5
}
 




`;

const ImageMovie = ({ urlImageMovie, titleMovie, width, height }) => {
  return (
   <ImageMovieDecoration src={urlImageMovie}
    alt={titleMovie} width = {width} height = {height} />
  );
};

export default ImageMovie;
