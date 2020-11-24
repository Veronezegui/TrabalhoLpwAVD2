import React from 'react';
import { Link } from 'react-router-dom';

import { Cabecalho } from './styles';

const Header: React.FC = () => {
  return (
    <Cabecalho>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/cadastro">Cadastrar Funcionarios</Link>
      </div>
    </Cabecalho>
  );
};

export default Header;
