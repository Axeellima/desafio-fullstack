import { TfiPencilAlt } from "react-icons/tfi";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import DeleteContactModal from "../DeleteContactModal";
import UpdateContactModal from "../UpdateContactModal";
import { useContext } from "react";
import { ModalContainer, ModalBoxEdit } from "./style";
import { ContactContext } from "../../context/contacts";

const ListContactModal = ({ name, setListContactModal, idUser }) => {
  const { listContactUser, loadContacts } = useContext(ContactContext);
  const [deleteContactModal, setDeleteContactModal] = useState(false);
  const [updateContactModal, setUpdateContactModal] = useState(false);

  useEffect(() => {
    loadContacts(idUser);
  }, []);

  return (
    <ModalContainer>
      <ModalBoxEdit className="modal-content">
        <div className="modal-title">
          <button
            className="modal-close"
            onClick={() => setListContactModal(false)}
          >
            X
          </button>
          <h1>Contacts</h1>
          <h2>User: {name}</h2>
        </div>
        <ul className="modal-list-content">
          <li className="modal-list-info">
            <div className="modal-name">Name:</div>
            <div className="modal-mail">E-mail:</div>
            <div className="modal-phone">Phone:</div>
            <div className="modal-action">Edit/Delete:</div>
          </li>
          {listContactUser.map((el, index) => (
            <li className="modal-contact" key={index}>
              <div className="modal-name">{el.name}</div>
              <div className="modal-mail">{el.email}</div>
              <div className="modal-phone">{el.phone}</div>
              <div className="modal-action action-icons">
                <TfiPencilAlt
                  className="edit-icon"
                  onClick={() => {
                    setUpdateContactModal(true);
                  }}
                />
                <AiFillDelete
                  className="delete-icon"
                  onClick={() => {
                    setDeleteContactModal(true);
                  }}
                />
                {deleteContactModal && (
                  <DeleteContactModal
                    setDeleteContactModal={setDeleteContactModal}
                    id={el.id}
                    idUser={idUser}
                  />
                )}
                {updateContactModal && (
                  <UpdateContactModal
                    setUpdateContactModal={setUpdateContactModal}
                    id={el.id}
                    name={el.name}
                    email={el.email}
                    phone={el.phone}
                    idUser={idUser}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default ListContactModal;
