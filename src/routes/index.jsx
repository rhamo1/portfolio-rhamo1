import { Router, Switch, Route } from "react-router-dom";
import { Fodase } from "../Pages/Fodase";
import { Home } from "../Pages/Home";
import history from "../history/";

export const Routes = () => {
  return (
    // <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fodase" component={Fodase} />
    </Switch>
    // </Router>
  );
};
