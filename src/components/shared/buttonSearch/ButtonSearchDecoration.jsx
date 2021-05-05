import styled from "styled-components";

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
color: #fff;
top: 3%;
right: ${({positionX}) => positionX ? positionX : "5%"};
border: 1px solid #f9bf2c;
`;

export default ButtonSearchDecoration;