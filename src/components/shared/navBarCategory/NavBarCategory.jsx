import { Link } from "react-router-dom";
import Category from "../categories/Category";
import NavBarCategoryDecoration from "./NavBarCategoryDecoration";

const NavBarCategory = () => {
  return <NavBarCategoryDecoration>
      <ul>
        <Link to = "#"><Category>Pop</Category></Link>
        <Link to = "#"><Category>News</Category></Link>
        <Link to = "#"><Category>Bim</Category></Link>
        <Link to = "#"><Category>Pop</Category></Link>
        <Link to = "#"> <Category>Bam</Category></Link>
        <Link to = "#"><Category>News</Category></Link>
        <Link to = "#"><Category>Bim</Category></Link>
        <Link to = "#"> <Category>Bam</Category></Link>
        
        
        
       
      </ul>
  </NavBarCategoryDecoration>;
};

export default NavBarCategory;
