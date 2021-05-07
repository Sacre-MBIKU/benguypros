import styled from "styled-components";

const OverviewCinemaDecoration = styled.h4`
  width: 80%;
  font-size: 16px;
  color: #fff;
  padding-top : 14px;
  // border-top : 3px solid #f9bf2c;
  margin-top : 20px;
  position : relative;
  padding-bottom : 15px;

  span.before {
    position : absolute;
    bottom : 0;
    right : 0;
    width : 50px;
    height : 3px;
    background-color : #f9bf2c;
  }

  span.after {
    position : absolute;
    bottom : 0;
    right : 0;
    width : 3px;
    height : 20px;
    background-color : #f9bf2c;
  }
`;

export default OverviewCinemaDecoration;
