import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

/*
  Essa propriedade exact é para que ele só mostre o Landing caso seja exatamente a rota só com o /
  Pois se não toda rota que começa com / ele irá chamar
  O Switch faz com que só uma rota seja chamada
*/
