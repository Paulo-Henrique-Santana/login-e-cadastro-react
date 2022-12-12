import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style_userProfile";
import * as G from "../../style_global";

const UserProfile = () => {
  const [user, setUser] = React.useState();
  const [msg, setMsg] = React.useState("");
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
      setTimeout(() => setMsg(null), 3000);
    }
  }, []);

  return (
    <S.Section>
      <G.Title>Seus Dados</G.Title>
      {user && (
        <div>
          <S.Data>
            <S.DataTitle>Nome Completo</S.DataTitle> {user.firstName}{" "}
            {user.lastName}
          </S.Data>
          <S.Data>
            <S.DataTitle>Nome de usuário</S.DataTitle> {user.username}
          </S.Data>
          <S.Data>
            <S.DataTitle>Email</S.DataTitle> {user.email}
          </S.Data>
        </div>
      )}
      <G.Msg>{msg}</G.Msg>
      <G.StyledLink to="/changePassword">Alterar senha</G.StyledLink>
      <S.Logout to="/" onClick={() => localStorage.removeItem("loggedUser")}>
        Sair
      </S.Logout>
    </S.Section>
  );
};

export default UserProfile;
