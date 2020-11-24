import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import DetalhesFuncionario from '../pages/DetalhesFuncionario';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro" exact component={Cadastro} />
    <Route path="/detalhes/:id" exact component={DetalhesFuncionario} />
  </Switch>
);

export default Routes;
