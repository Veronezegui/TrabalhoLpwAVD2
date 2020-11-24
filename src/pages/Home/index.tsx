import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { ImProfile } from 'react-icons/im';
import api from '../../services/api';

import Header from '../../components/Header';

import { MenuPrincipal, TodosFuncionarios } from './styles';

interface ResponseAPI {
  id: string;
  name: string;
  like: number;
  deslike: number;
}

const Home: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<ResponseAPI[]>();
  const history = useHistory();

  async function CarregarFuncionarios() {
    await api.get('/funcionarios').then(response => {
      setFuncionarios(response.data);
    });
  }

  useEffect(() => {
    CarregarFuncionarios();
  }, []);

  function mudarRota(id: string) {
    history.push(`/detalhes/${id}`);
  }

  return (
    <>
      <Header />
      <MenuPrincipal>
        <h1>Home</h1>
        <TodosFuncionarios>
          {funcionarios
            ? funcionarios.map(funcionario => {
                return (
                  <section key={funcionario.id}>
                    <p>
                      Nome:
                      {funcionario.name}
                    </p>

                    <p>
                      <strong>
                        {`Likes: ${funcionario.like ? funcionario.like : 0} `}
                      </strong>
                      <strong>
                        {`Dislike: ${
                          funcionario.deslike ? funcionario.deslike : 0
                        } `}
                      </strong>
                    </p>

                    <span>
                      <ImProfile
                        size={20}
                        onClick={() => mudarRota(funcionario.id)}
                      />
                      Detalhes
                    </span>
                  </section>
                );
              })
            : ''}
        </TodosFuncionarios>
      </MenuPrincipal>
    </>
  );
};

export default Home;
