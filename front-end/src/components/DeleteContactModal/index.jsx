import { ModalContainer } from "../AddUserModal/style";
import { ModalBoxDelete } from "./style";

const DeleteContactModal = ({ setDeleteContactModal }) => {
  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Delete contact:</h2>
        <p>This action cannot be reversed!</p>

        <div>
          <button className="delete-button">Delete anyway</button>
          <button
            onClick={() => {
              setDeleteContactModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </ModalBoxDelete>
    </ModalContainer>
  );
};

export default DeleteContactModal;
