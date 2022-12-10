import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.loggedUser) {
      setUser(
        JSON.parse(localStorage.users).find(
          ({ email }) => email === localStorage.loggedUser
        )
      );
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1>Seus Dados</h1>
      {user && (
        <div>
          <p>
            Nome Completo: {user.firstName} {user.lastName}
          </p>
          <p>Nome de usuário: {user.user}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <Link to="/" onClick={() => localStorage.removeItem("loggedUser")}>
        Sair
      </Link>
    </div>
  );
};

export default UserProfile;
