import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = React.useState();
  const [msg, setMsg] = React.useState();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(useLocation().search);

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
    if (urlParams.get("passwordChanged")) {
      setMsg("Senha alterada com sucesso");
      setTimeout(() => {
        setMsg(null);
      }, 3000);
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
          <Link to="/changePassword">Alterar senha</Link>
          {msg && <p>{msg}</p>}
        </div>
      )}
      <Link to="/" onClick={() => localStorage.removeItem("loggedUser")}>
        Sair
      </Link>
    </div>
  );
};

export default UserProfile;
