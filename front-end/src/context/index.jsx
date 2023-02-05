import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services";
import { Toast } from "../utils/toast";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [inApp, setInApp] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  const createUser = (data) => {
    api
      .post("users", data)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const updateUser = (id, data) => {
    api
      .patch(`users/${id}`, data)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const deleteUser = (id) => {
    api
      .delete(`users/${id}`)
      .then((response) => {
        Toast.sucess();
      })
      .catch((err) => {
        Toast.fail();
      });
  };
  const loadUsers = () => {
    api
      .get("users")
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        navigate,
        inApp,
        setInApp,
        addUserModal,
        setAddUserModal,
        createUser,
        deleteUser,
        listUsers,
        setListUsers,
        loadUsers,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
