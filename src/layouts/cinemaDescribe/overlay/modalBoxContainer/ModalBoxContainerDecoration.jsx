import styled from "styled-components";

const ModalBoxContainerDecoration = styled.main`
  margin: 100px 0;
  width: 60%;
  height: auto;
  padding-bottom: 70px;
  background-color: rgba(8, 9, 22, 1);
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, rgba(117, 19, 93, 0.3), #1a1b22),
    url("${({ banner }) => banner || "bannerSection"}");
  background-size: cover;
`;

export default ModalBoxContainerDecoration;
