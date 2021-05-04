import ButtonDecoration from "./ButtonDecoration";

const Button = ({children, bgSecondary, positionX }) => 
<ButtonDecoration bgSecondary = {bgSecondary}
    positionX = {positionX}
>{children}</ButtonDecoration>;

export default Button;
