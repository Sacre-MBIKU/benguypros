const ImageMovie = ({ urlImageMovie, titleMovie }) => {
  return (
    <img
      src={urlImageMovie}
      alt={titleMovie}
      style={{
        width: "300px",
        height: "75%",
        boxShadow: "9px 9px #f9bf2c",
      }}
    />
  );
};

export default ImageMovie;
