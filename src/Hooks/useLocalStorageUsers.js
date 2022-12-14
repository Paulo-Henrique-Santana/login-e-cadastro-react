import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLocalStorageUsers = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [users, setUsers] = React.useState(null);

  // redireciona a página dependendo se o usuário estiver ou não logado
  // pega os dados do usuário logado
  const checkLoggedUser = () => {
    if (localStorage.loggedUser) {
      if (pathname === "/" || pathname === "/registration") {
        navigate("/userProfile");
      } else {
        const user = JSON.parse(localStorage.users).find(
          ({ email }) => email === localStorage.loggedUser
        );
        return user;
      }
    } else if (pathname === "/userProfile" || pathname === "/changePassword") {
      navigate("/");
    }
  };

  const getUsers = () => {
    if (localStorage.users) setUsers(JSON.parse(localStorage.users));
  };

  return [checkLoggedUser, getUsers, users];
};

export default useLocalStorageUsers;
