import TitleCategoryDecoration from "./TitleCategoryDecoration";

const TitleCategory = ({
  children,
  size,
  positionY,
  positionX,
  TitleCategorySecondary,
}) => (
  <TitleCategoryDecoration
    TitleCategorySecondary={TitleCategorySecondary}
    positionX={positionX}
    positionY={positionY}
    size={size}
  >
    {children}
  </TitleCategoryDecoration>
);

export default TitleCategory;
