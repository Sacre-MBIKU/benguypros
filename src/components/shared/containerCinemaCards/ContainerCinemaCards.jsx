import { Link } from "react-router-dom";
import CardMovie  from "../cardMovie/CardMovie";
import newMovie from "../../../assets/card/newMovies4.jpg";
import newMovie2 from "../../../assets/card/newMovies2.jpg";
import newMovie3 from "../../../assets/card/newMovies3.jpg";
import ContainerCinemaCardsDecoration from "./ContainerCinemaCardsDecoration";

const ContainerCinemaCard = () => {
  return (
    <ContainerCinemaCardsDecoration>
      <ul>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
            <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
        <Link to="#">
          <li>
          <CardMovie urlImageMovie = {newMovie} />
          </li>
        </Link>
      </ul>
    </ContainerCinemaCardsDecoration>
  );
};

export default ContainerCinemaCard;
