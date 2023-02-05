import { ModalContainer } from "../AddUserModal/style";
import { ModalBoxDelete } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context";

const DeleteUserModal = ({ setDeleteUserModal, id }) => {
  const { deleteUser, loadUsers } = useContext(UserContext);
  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Delete user:</h2>
        <p>This action cannot be reversed!</p>

        <div>
          <button
            className="delete-button"
            onClick={async () => {
              deleteUser(id);
              setTimeout(() => {
                loadUsers();
                setDeleteUserModal(false);
              }, 2000);
            }}
          >
            Delete anyway
          </button>
          <button
            onClick={() => {
              setDeleteUserModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </ModalBoxDelete>
    </ModalContainer>
  );
};

export default DeleteUserModal;
