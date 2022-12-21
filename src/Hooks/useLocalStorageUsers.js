import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLocalStorageUsers = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [users, setUsers] = React.useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null
  );

  const [user, setUser] = React.useState(
    localStorage.getItem("loggedUser")
      ? users.find(({ email }) => email === localStorage.getItem("loggedUser"))
      : null
  );

  React.useEffect(() => {
    if (user && (pathname === "/" || pathname === "/registration")) {
      navigate("/userProfile");
    } else if (
      !user &&
      (pathname === "/userProfile" || pathname === "/changePassword")
    ) {
      navigate("/");
    }
  }, [navigate, pathname, user]);

  return { user, setUser, users, setUsers };
};

export default useLocalStorageUsers;
