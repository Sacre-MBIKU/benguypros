import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
