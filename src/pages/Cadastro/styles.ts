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

  form {
    width: 40%;
    height: 85vh;

    section {
      margin: 12px 0;
      padding: 12px;
      border-radius: 4px;
      background: #222831;

      strong {
        color: #ffffff;
        margin: 2px;
      }

      label {
        position: relative;

        svg {
          position: absolute;
          bottom: -5px;
          left: -25px;
        }
      }
    }

    section input {
      font-size: 16px;
      padding: 4px;
      width: 100%;
    }

    button {
      background: #00adb5;
      padding: 8px;
      border-radius: 4px;
      width: 100%;

      font-size: 16px;
      color: #ffffff;
    }

    button:hover {
      border: 1px solid #00adb5;
    }
  }
`;

export const Novo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  p {
    width: 200px;
    margin: 2px 0;
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
    }

    span + span {
      margin-left: 8px;
    }

    svg {
      color: #00adb5;
      padding: 0 4px;
    }
  }
`;
