import styled from 'styled-components';

export const Detalhes = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    background: #393e46;
    width: 40%;
    height: 40vh;
    padding: 32px;
    border-radius: 16px;
    color: #ffffff;

    h3 {
      margin: 8px;
    }
  }

  input {
    padding: 4px;
    width: 100%;
    border-radius: 4px;
  }
`;
