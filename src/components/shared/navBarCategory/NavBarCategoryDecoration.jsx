import styled from "styled-components";

const NavBarCategoryDecoration = styled.nav`
    width : 100%;
    height : 80px;
    box-shadow : 0 2.5px 4px 3px #2A2A33; 
    display : flex; 
    justify-content : center;
    align-items : center;

    ul{
        display : flex; 
        justify-content : space-arround;
        align-items : center;
        width : auto;
    }

    a{
        text-decoration : none;
    }
`;

export default NavBarCategoryDecoration;
