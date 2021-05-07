import styled, { css } from "styled-components";

const ButtonSearchDecoration = styled.div`
height: 50px;
width: 415px;
background-color: transparent;
padding: 15px 15px;
font-family: Barlwow;
font-weight: 700;
font-size: 30px;
position: absolute;
border-style: none;
color: #fff ;
top: 3%;
right: ${({positionX}) => positionX ? positionX : "5%"};
border: ${({borderStyle}) => borderStyle = true ? "1px solid #1a1a1a" : "1px solid #f9bf2c"} ;

${({responsiveButtonSearch}) => 
    responsiveButtonSearch === true ?
    css`
        @media (max-width : 630px){
            width : 200px
        }
    `: ""
}
`;

export default ButtonSearchDecoration;