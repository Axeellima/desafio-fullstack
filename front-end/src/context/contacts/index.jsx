import { createContext } from "react";
import { useState } from "react";
import api from "../../services";
import { Toast } from "../../utils/toast";

export const ContactContext = createContext({});

const ContactProvider = ({ children }) => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [listContactUser, setListContactUser] = useState([]);

  const createContact = (id, data) => {
    api
      .post(`/users/contacts/${id}`, data)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const updateContact = (id, data) => {
    api
      .patch(`/users/contacts/${id}`, data)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const deleteContact = (id) => {
    api
      .delete(`/users/contacts/${id}`)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const loadContacts = (id) => {
    api
      .get(`/users/contacts/${id}`)
      .then((response) => {
        setListContactUser(response.data);
      })
      .catch((err) => {});
  };

  return (
    <ContactContext.Provider
      value={{
        listContactUser,
        addContactModal,
        setAddContactModal,
        loadContacts,
        createContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider;
