import { BrowserRouter, Route, Switch } from "react-router-dom";
import Overlay from "./layouts/cinemaDescribe/overlay/Overlay";
import Home from "./pages/Home";
import MovieCategory from "./pages/MovieCategory";
import Movies from "./pages/Movies";
import SerieCategory from "./pages/SerieCategory";
import Series from "./pages/Series";

const Application = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/movies-categories">
          <MovieCategory />
        </Route>
        <Route path="/series-categories">
          <SerieCategory />
        </Route>
        <Route path="/overlay">
          <Overlay />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
