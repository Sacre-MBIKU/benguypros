import { Link } from "react-router-dom";
import CardMovie  from "../cardMovie/CardMovie";
import newMovie from "../../../assets/backgrounds/releaser.jpg";
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
