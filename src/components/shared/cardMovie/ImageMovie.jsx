import styled from "styled-components";

const ImageMovieDecoration = styled.img`
width : ${({width}) => width || "200px"};
height : ${({height}) => height || "270px"};
box-shadow: 9px 9px #f9bf2c;
transition : all .5s ease .5s;
z-index : 20;

&:hover{
  scale : 1.08;
  box-shadow: none;
}

`;

const ImageMovie = ({ urlImageMovie, titleMovie, width, height }) => {
  return (
   <ImageMovieDecoration src={urlImageMovie}
    alt={titleMovie} width = {width} height = {height} />
  );
};

export default ImageMovie;
