import styled from "styled-components";
import bannerImage from "../../../../assets/backgrounds/banner.jpg";

const heroSectionModalBoxDecoration = styled.header`
  margin-left : -30px;
  width: 103.8%;
  height: 450px;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(117, 19, 93, 0.3), rgba(8, 9, 22, 1)),
    url("${({ banner }) => bannerImage || "bannerSection"}");
  background-size: cover;
`;

export default heroSectionModalBoxDecoration;
