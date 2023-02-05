import { ModalContainer } from "../AddUserModal/style";
import { ModalBoxDelete } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../context/contacts";

const DeleteContactModal = ({ setDeleteContactModal, id, idUser }) => {
  const { loadContacts, deleteContact } = useContext(ContactContext);
  return (
    <ModalContainer>
      <ModalBoxDelete>
        <h2>Delete contact:</h2>
        <p>This action cannot be reversed!</p>

        <div>
          <button
            className="delete-button"
            onClick={() => {
              deleteContact(id);
              setTimeout(() => {
                loadContacts(idUser);
                setDeleteContactModal(false);
              }, 2000);
            }}
          >
            Delete anyway
          </button>
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
