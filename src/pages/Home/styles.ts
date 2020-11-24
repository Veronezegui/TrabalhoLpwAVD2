import styled from 'styled-components';

export const MenuPrincipal = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  h1 {
    font-size: 32px;
    margin: 16px;
    padding: 8px 16px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
`;

export const TodosFuncionarios = styled.div`
  width: 40%;
  border-radius: 8px;

  section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #393e46;
    border-radius: 6px;

    padding: 16px 32px;
  }

  section + section {
    margin-top: 16px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &,
  span,
  svg {
    color: #ffffff;
  }

  svg {
    margin: 0 6px;
  }
`;
