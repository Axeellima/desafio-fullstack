import { ModalContainer } from "../AddUserModal/style";
import { ModalBoxDelete } from "./style";

const DeleteUserModal = ({ setDeleteUserModal }) => {
  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Delete user:</h2>
        <p>This action cannot be reversed!</p>

        <div>
          <button className="delete-button">Delete anyway</button>
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
