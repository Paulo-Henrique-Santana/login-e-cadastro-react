import React from "react";
import { useLocation } from "react-router-dom";
import Head from "../../Components/Head";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import useMsg from "../../Hooks/useMsg";
import * as S from "./style_userProfile";
import * as G from "../../style_global";

const UserProfile = () => {
  const [user, setUser] = React.useState();
  const [checkLoggedUser] = useLocalStorageUsers();
  const [msg, addMsg] = useMsg();
  const urlParams = new URLSearchParams(useLocation().search);

  React.useEffect(() => {
    setUser(checkLoggedUser());

    if (urlParams.get("passwordChanged")) addMsg("Senha alterada com sucesso");
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
