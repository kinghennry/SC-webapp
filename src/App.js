import { Route, Switch } from "react-router-dom";
import Auth from "./Pages/Auth";
import Code from "./Pages/Code";
import Home from "./Pages/Home";
import Success from "./Pages/Success";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Auth />
      </Route>
      <Route exact path="/entercode">
        <Code />
      </Route>
      <Route exact path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
