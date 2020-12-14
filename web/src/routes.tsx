import React from 'react'; //Toda vez que vai criar e exportar um componte tem que importar o React
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';



/*Essa propriedade exact é para que ele só mostre o Landing caso seja extamente a rota só com o /
Pois se não toda rota que começa com / ele irá chamar
O Switch faz com que só uma rota seja chamada
*/
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;