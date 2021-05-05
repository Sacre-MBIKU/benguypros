import ButtonDecoration from "./ButtonDecoration";

const Button = ({children, bgSecondary, positionX, positionY, size }) => 
<ButtonDecoration bgSecondary = {bgSecondary}
    positionX = {positionX} 
    positionY = {positionY}
    size = {size}
>{children}</ButtonDecoration>;

export default Button;
