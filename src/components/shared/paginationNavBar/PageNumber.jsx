import PageNumberDecoration from "./PageNumberDecoration";

const PageNumber = ({ children, active }) => {
  return <PageNumberDecoration active = {active}>{children}</PageNumberDecoration>;
};

export default PageNumber;
