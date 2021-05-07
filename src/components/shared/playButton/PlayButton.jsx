import { FaRegPlayCircle } from "react-icons/fa";
import PlayButtonDecoration from "./PlayButtonDecoration.jsx";
<FaRegPlayCircle />
const PlayIcon = <FaRegPlayCircle />
const PlayButton = () => {
  return <PlayButtonDecoration>{PlayIcon}</PlayButtonDecoration>;
};

export default PlayButton;