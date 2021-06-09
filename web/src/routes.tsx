import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Domain from "./pages/Domain";
import Characters from "./pages/Character";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/domain" component={Domain} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
