import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBoxEdit = styled.div`
  max-width: 350px;
  width: 100%;

  margin: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  color: #ffff;

  background: #2d2d2d;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.7rem;

    button {
      width: 18px;
      height: 29px;

      font-weight: 700;
      font-size: 24px;

      border: none;
      color: #cd5c5c;
      background: inherit;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    flex-direction: column;

    background: inherit;

    label {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #f8f8ff;
    }

    input {
      width: 100%;
      height: 51px;
      padding: 10px;

      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      border: none;
      border-radius: 4px;
      background: lightgray;
    }

    input::placeholder {
      color: gray;
    }

    button {
      margin-top: 10px;
      align-self: center;

      width: 150px;
      height: 51px;

      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      border: none;
      border-radius: 4px;

      color: #f8f8ff;
      background: #03e9f4;
    }
  }

  span {
    color: #2d2d2d;
    width: 272px;
    height: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
    margin-top: -8px;
    margin-bottom: 8px;
  }
`;
