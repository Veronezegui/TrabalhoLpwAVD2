import React, { FormEvent, useState, ChangeEvent } from 'react';

import { useHistory } from 'react-router-dom';

import { ImHeart, ImHeartBroken, ImBin, ImAttachment } from 'react-icons/im';
import Header from '../../components/Header';
import api from '../../services/api';

import { MenuPrincipal, Novo } from './styles';

interface NovoFuncionario {
  id: string;
  name: string;
  funcao: string;
  foto: string;
  like: number;
  deslike: number;
}

interface QuantidadeLike {
  like: number;
  deslike: number;
}

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [funcao, setFuncao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState<File[]>();

  const history = useHistory();
  const [funcionarioLike, setFuncionarioLike] = useState<QuantidadeLike>();

  const [mostrarNovoFuncionario, setMostrarNovoFuncionario] = useState(0);
  const [novoFuncionario, setNovoFuncionario] = useState<NovoFuncionario>();

  const mudarRota = () => {
    history.push('/');
  };

  const deletarFuncionario = async (id: string) => {
    await api.delete(`/funcionarios/${id}`);
  };

  const like = async (id: string) => {
    await api.put(`/funcionarios/like/${id}`).then(response => {
      const likes = response.data;
      if (funcionarioLike?.deslike === undefined) {
        setFuncionarioLike({ deslike: 0, like: likes });
      } else {
        setFuncionarioLike({ ...funcionarioLike, like: likes });
      }
    });
  };

  const deslikes = async (id: string) => {
    await api.put(`/funcionarios/deslike/${id}`).then(response => {
      const deslike = response.data;
      if (funcionarioLike?.like === undefined) {
        setFuncionarioLike({ like: 0, deslike });
      } else {
        setFuncionarioLike({ ...funcionarioLike, deslike });
      }
    });
  };

  const salvarFotoDoFuncionario = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.files === null ||
      event.target.files === undefined ||
      event.target.files.length === 0
    ) {
      return;
    }

    const { files } = event.target;

    setFoto(Array.from(files));
  };

  async function CarregarFuncionario(id: string) {
    api.get(`/funcionarios/${id}`).then(response => {
      setNovoFuncionario(response.data);
    });
  }

  const cadastrarNovoFuncionario = async (event: FormEvent) => {
    event.preventDefault();

    const dados = new FormData();

    dados.append('name', nome);
    dados.append('email', email);
    dados.append('departamento', departamento);
    dados.append('funcao', funcao);
    dados.append('foto', foto[0]);
    dados.append('telefone', telefone);

    await api
      .post('/funcionarios', dados)
      .then(response => {
        CarregarFuncionario(response.data.id);
        setMostrarNovoFuncionario(1);
      })
      .catch(err => {
        alert('Erro ao enviar o formulário');
      });
  };

  return (
    <>
      <Header />
      <MenuPrincipal>
        {mostrarNovoFuncionario === 0 ? (
          <form onSubmit={cadastrarNovoFuncionario}>
            <section>
              <strong>Nome</strong>
              <input
                type="text"
                value={nome}
                onChange={event => setNome(event.target.value)}
                required
              />
            </section>
            <section>
              <strong>Função</strong>
              <input
                type="text"
                value={funcao}
                onChange={event => setFuncao(event.target.value)}
                required
              />
            </section>
            <section>
              <strong>Departamento</strong>
              <input
                type="text"
                value={departamento}
                onChange={event => setDepartamento(event.target.value)}
                required
              />
            </section>

            <section>
              <strong>Email</strong>
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </section>
            <section>
              <strong>Telefone</strong>
              <input
                type="text"
                value={telefone}
                onChange={event => setTelefone(event.target.value)}
                required
              />
            </section>

            <section>
              <strong>Foto</strong>
              <label htmlFor="Foto">
                <ImAttachment size={20} />
                <input
                  style={{
                    background: '#222831',
                    opacity: '0',
                  }}
                  type="file"
                  id="Foto"
                  onChange={salvarFotoDoFuncionario}
                  required
                />
              </label>
            </section>

            <button type="submit">Enviar</button>
          </form>
        ) : (
          <Novo>
            <img
              src={`http://localhost:3333/files/${novoFuncionario?.foto}`}
              alt="Imagem"
            />

            <article>
              <p>
                <strong>Nome: </strong>
                {novoFuncionario?.name}
              </p>
            </article>
            <article>
              <p>
                <strong>Função: </strong>
                {novoFuncionario?.funcao}
              </p>
            </article>

            <main>
              <span>
                <ImBin
                  size={22}
                  onClick={() => {
                    deletarFuncionario(novoFuncionario?.id);
                    mudarRota();
                  }}
                />
                Deletar
              </span>
              <span>
                <ImHeart size={22} onClick={() => like(novoFuncionario?.id)} />
                Like
              </span>
              <span>
                <ImHeartBroken
                  size={22}
                  onClick={() => deslikes(novoFuncionario?.id)}
                />
                Dislike
              </span>
            </main>
          </Novo>
        )}
      </MenuPrincipal>
    </>
  );
};

export default Cadastro;
