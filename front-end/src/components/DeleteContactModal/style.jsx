import styled from "styled-components";

export const ModalBoxDelete = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  flex-direction: column;

  width: 350px;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 10px;

  color: #ffff;
  background: #2d2d2d;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  h2 {
    padding-top: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    width: 100%;

    button {
      height: 51px;
      margin-top: 5px;
      padding: 0px 1.1rem;

      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      border: none;
      border-radius: 4px;

      color: #f8f8ff;
      background: #03e8f4b8;
    }

    .delete-button {
      height: 51px;
      margin-right: 5px;

      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      background: #b2222290;
    }
    .delete-button:hover {
      background: #b22222;
    }
  }
`;
