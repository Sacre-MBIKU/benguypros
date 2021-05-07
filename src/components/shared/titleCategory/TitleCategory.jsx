import TitleCategoryDecoration from "./TitleCategoryDecoration";

const TitleCategory = ({ children, size, positionY, positionX }) => (
  <TitleCategoryDecoration positionX = {positionX} positionY = {positionY}  size = {size}>{children}</TitleCategoryDecoration>
);

export default TitleCategory;
