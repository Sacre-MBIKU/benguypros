import { FaTimes } from "react-icons/fa";
import CrossButtonDecoration from "./CrossButtonDecoration.jsx";

const CrossIcon = <FaTimes />;
const CrossButton = () => {
  return <CrossButtonDecoration>{CrossIcon}</CrossButtonDecoration>;
};

export default CrossButton;
