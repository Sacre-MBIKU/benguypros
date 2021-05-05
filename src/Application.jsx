import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
