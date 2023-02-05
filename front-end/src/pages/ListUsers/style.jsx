import styled from "styled-components";

export const DivListUsers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000000ee;

  .content {
    background-color: #2d2d2d;
    padding: 20px 20px;
    border-radius: 3px;
  }
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .title h1 {
    color: #ffff;
    text-transform: uppercase;
  }
  .list-content {
    list-style: none;
    width: 700px;
    background-color: #f8f8ff;
    padding: 10px 5px;
    border-radius: 3px;
  }
  .list-info {
    font-weight: bold;
    font-size: 16px;
    padding: 5px 10px;
    display: flex;
  }
  .user {
    font-size: 14px;
    padding: 5px 10px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .name {
    width: 15%;
  }
  .mail {
    width: 30%;
  }
  .phone {
    width: 25%;
  }
  .contacts {
    width: 15%;
  }
  .contacts-icons {
    display: flex;
    position: relative;
    left: 5px;
    gap: 5px;
  }
  .action {
    width: 15%;
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
  @media (max-width: 900px) {
    .list-content {
      width: 400px;
    }
    .mail {
      display: none;
    }
    .name {
      width: 20%;
    }
    .phone {
      width: 30%;
    }
    .contacts {
      width: 25%;
    }
    .action {
      width: 25%;
    }
  }
  @media (max-width: 450px) {
    background-color: #2d2d2d;
    .content {
      width: 100vw;
      padding: 0;
    }
    .list-content {
      width: 100%;
      padding: 0;
    }
    .mail {
      display: none;
    }
    .name {
      width: 20%;
    }
    .phone {
      width: 30%;
    }
    .contacts {
      width: 25%;
    }
    .action {
      width: 25%;
    }
  }
`;
