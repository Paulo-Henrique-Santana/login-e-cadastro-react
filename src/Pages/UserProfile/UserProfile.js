import React from "react";
import { useLocation } from "react-router-dom";
import Head from "../../Components/Head";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import useMsg from "../../Hooks/useMsg";
import * as L from "./style_userProfile";
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
    <L.Section>
      <Head title="Perfil do usuário" description="Perfil do usuário" />
      <G.Title>Seus Dados</G.Title>
      {user && (
        <div>
          <L.Data>
            <L.DataTitle>Nome Completo</L.DataTitle>
            <L.DataValue>
              {user.firstName} {user.lastName}
            </L.DataValue>
          </L.Data>
          <L.Data>
            <L.DataTitle>Nome de usuário</L.DataTitle>
            <L.DataValue> {user.username}</L.DataValue>
          </L.Data>
          <L.Data>
            <L.DataTitle>Email</L.DataTitle>
            <L.DataValue> {user.email}</L.DataValue>
          </L.Data>
        </div>
      )}
      <G.Msg>{msg}</G.Msg>
      <G.StyledLink to="/changePassword">Alterar senha</G.StyledLink>
      <L.Logout to="/" onClick={() => localStorage.removeItem("loggedUser")}>
        Sair
      </L.Logout>
    </L.Section>
  );
};

export default UserProfile;
