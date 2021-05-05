const TitleMovie = ({ children }) => {
  return <h3 style = {{
      position : "absolute",
      bottom : "0",
      right : "-9px",
      width : "300px",
      height : "15%",
      border : "1px solid #f9bf2c",
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      color : "white"
  }}>{children} </h3>;
};

export default TitleMovie;
