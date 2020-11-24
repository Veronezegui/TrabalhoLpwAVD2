import React, { useEffect, useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header';

import api from '../../services/api';

import { Detalhes } from './styles';

interface IFuncionario {
  name: string;
  departamento: string;
  email: string;
  telefone: string;
}

interface IParams {
  id: string;
}

const DetalhesFuncionario: React.FC<RouteComponentProps<IParams>> = props => {
  const { id } = props.match.params;
  const [funcionario, setFuncionario] = useState<IFuncionario>();

  async function CarregarFuncionario() {
    api.get(`/funcionarios/${id}`).then(response => {
      setFuncionario(response.data);
    });
  }

  useEffect(() => {
    CarregarFuncionario();
  }, []);

  return (
    <>
      <Header />
      <Detalhes>
        <form action="#">
          <h3>
            <strong>Nome: </strong>
            <input type="text" value={funcionario?.name} readOnly />
          </h3>
          <h3>
            <strong>Departamento: </strong>
            <input type="text" value={funcionario?.departamento} readOnly />
          </h3>
          <h3>
            <strong>Email: </strong>
            <input type="text" value={funcionario?.email} readOnly />
          </h3>

          <h3>
            <strong>Telefone: </strong>
            <input type="text" value={funcionario?.telefone} readOnly />
          </h3>
        </form>
      </Detalhes>
    </>
  );
};

export default DetalhesFuncionario;
