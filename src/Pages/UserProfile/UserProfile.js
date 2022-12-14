import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style_userProfile";
import * as G from "../../style_global";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import Head from "../../Components/Head";

const UserProfile = () => {
  const [user, setUser] = React.useState();
  const [checkLoggedUser] = useLocalStorageUsers();
  const [msg, setMsg] = React.useState("");
  const urlParams = new URLSearchParams(useLocation().search);

  React.useEffect(() => {
    setUser(checkLoggedUser());

    if (urlParams.get("passwordChanged")) {
      setMsg("Senha alterada com sucesso");
      setTimeout(() => setMsg(null), 3000);
    }
  }, []);

  return (
    <S.Section>
      <Head title="Perfil do usuário" description="Perfil do usuário" />
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
