import { Switch, Route } from "react-router-dom";
import { Fodase } from "../Pages/Fodase";
import { Home } from "../Pages/Home";
import { Cachorro } from "../Pages/Cachorro";
import { Draw } from "../Pages/Draw";
import { Spiral } from "../Pages/3Dcube";
import { RadioGospel } from "../Pages/RadioGospel";
import { Draw2 } from "../Pages/Draw2";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fodase" component={Fodase} />
      <Route path="/cachorro" component={Cachorro} />
      <Route path="/canvas" component={Draw} />
      <Route path="/canvas2" component={Draw2} />
      <Route path="/radiogospel" component={RadioGospel} />
    </Switch>
  );
};
