import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Domain from './pages/Domain';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/domain' component={Domain} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
