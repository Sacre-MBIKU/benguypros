import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import PageNumber from "./PageNumber";
import PaginationNavBarDecoration from "./PaginationNavBarDecoration";
const PaginationNavBar = () => {
  return (
    <div style={{
        width : "100%",
        position : "absolute",
        top : "298vh",
        zIndex : "200",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }} >
        <PaginationNavBarDecoration>
            <ArrowLeft />
            <PageNumber active>1</PageNumber>
            <PageNumber>2</PageNumber>
            <PageNumber>3</PageNumber>
            <PageNumber>4</PageNumber>
            <PageNumber>5</PageNumber>
            <ArrowRight />
    </PaginationNavBarDecoration>
    </div>
  );
};

export default PaginationNavBar;
