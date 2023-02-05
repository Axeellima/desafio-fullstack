import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 450px) {
    background-color: #2d2d2d;
  }
`;

export const ModalBoxEdit = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  color: #ffff;

  background: #2d2d2d;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  .modal-content {
    background-color: #2d2d2d;
    padding: 20px 20px;
    border-radius: 3px;
  }
  .modal-title {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
  .modal-title h1 {
    color: #ffff;
    text-transform: uppercase;
  }
  .modal-list-content {
    list-style: none;
    width: 700px;
    padding: 10px 5px;
    border-radius: 3px;
  }
  .modal-list-info {
    font-weight: bold;
    font-size: 16px;
    padding: 5px 10px;
    display: flex;
  }
  .modal-contact {
    font-size: 14px;
    padding: 5px 10px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .modal-name {
    width: 20%;
  }
  .modal-mail {
    width: 30%;
  }
  .modal-phone {
    width: 30%;
  }
  .modal-action {
    width: 20%;
  }
  .action-icons {
    position: relative;
    left: 12px;
    display: flex;
    gap: 5px;
  }
  .list-icon {
    width: 25px;
    height: 25px;
  }
  .add-icon {
    width: 26px;
    height: 26px;
  }
  .edit-icon {
    width: 25px;
    height: 25px;
  }
  .delete-icon {
    position: relative;
    bottom: 3px;
    width: 33px;
    height: 33px;
  }
  .edit-icon:hover {
    cursor: pointer;
  }
  .add-icon:hover {
    cursor: pointer;
  }
  .delete-icon:hover {
    cursor: pointer;
    color: #b22222;
  }
  .list-icon:hover {
    cursor: pointer;
  }
  .modal-close {
    margin-top: -20px;
    border-style: none;
    background: transparent;
    font-size: 22px;
    color: #b22222;
    position: relative;
    left: 330px;
    top: 25px;
    font-weight: bold;
  }
  @media (max-width: 900px) {
    .modal-list-content {
      width: 400px;
    }
    .modal-mail {
      display: none;
    }
    .modal-name {
      width: 35%;
    }
    .modal-phone {
      width: 35%;
    }
    .modal-action {
      width: 20%;
    }
    .modal-close {
      left: 190px;
    }
  }
  @media (max-width: 450px) {
    background-color: #2d2d2d;
    .modal-content {
      width: 100vw;
      padding: 0;
    }
    .modal-list-content {
      width: 100vw;
      padding: 0;
    }
    .modal-mail {
      display: none;
    }
    .modal-close {
      left: 150px;
    }
  }
`;
