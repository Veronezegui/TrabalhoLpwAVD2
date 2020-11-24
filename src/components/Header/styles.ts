import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;

  padding: 4px;

  background: #222831;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;

    a {
      color: #ffffff;
      font-weight: bold;
      text-decoration: none;
    }
  }

  div::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    height: 2px;
    width: 0%;
    background: #ffd369;

    transition: width 0.4s ease-in;
  }

  div:hover {
    ::after {
      width: 100%;
    }
  }

  div + div {
    margin-left: 24px;
  }
`;
