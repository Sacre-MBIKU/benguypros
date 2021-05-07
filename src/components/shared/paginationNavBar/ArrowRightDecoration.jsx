import styled from "styled-components";
import arrowRight from "../../../assets/icons/arrowRight.svg";

const ArrowRightDecoration = styled.li`  
background-image: url("${arrowRight}");
background-size : cover;
list-style : none;
border : 3px solid #f9bf2c;
width: 30px;
height: 30px;
border-radius: 100%;
margin-left : 20px;
cursor : pointer;
`;
export default ArrowRightDecoration;
