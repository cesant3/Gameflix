import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/App';
import Userpage from './pages/UserPage';
import Detalhes from './pages/Detalhes';
import Cadastro from './pages/Cadastro';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/UserPage" component={Userpage} exact/>
            <Route path="/Detalhes" component={Detalhes} exact/>
            <Route path="/Cadastro" component={Cadastro} exact/>
        </Switch>
    )
}

export default Routes