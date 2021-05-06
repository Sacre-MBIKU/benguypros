import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";

<GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 700, 900] }]} />;

const CategoryDecoration = styled.li`
list-style : none;
padding : 0 10px 10px;
margin : 5px 10px;
border-radius : 2px;
font-family: Barlwow;
color : #fff;
transition : all .5s ease-in;

    &:hover{
        border-bottom : 2px solid #f9bf2c;
    }
`;

export default CategoryDecoration;
