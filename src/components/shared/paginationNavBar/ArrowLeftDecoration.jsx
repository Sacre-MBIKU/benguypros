import styled from "styled-components";
import arrowLeft from "../../../assets/icons/arrowLeft.svg";

const ArrowLeftDecoration = styled.li`
  background-image: url("${arrowLeft}");
  background-size : cover;
  border : 3px solid #f9bf2c;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right : 20px;
  cursor : pointer;
`;
export default ArrowLeftDecoration;
