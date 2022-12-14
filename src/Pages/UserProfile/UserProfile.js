import React from "react";
import Head from "../../Components/Head";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import * as L from "./style_userProfile";
import * as G from "../../style_global";

const UserProfile = () => {
  const [msg, setMsg] = React.useState(localStorage.getItem("msg") || "");
  const { loggedUser } = useLocalStorageUsers();

  React.useEffect(() => {
    if (localStorage.getItem("msg")) {
      setTimeout(() => {
        localStorage.removeItem("msg");
        setMsg("");
      }, 3000);
    }
  }, []);

  return (
    <L.Section>
      <Head title="Perfil do usuário" description="Perfil do usuário" />
      <G.Title>Seus Dados</G.Title>
      {loggedUser && (
        <div>
          <L.Data>
            <L.DataTitle>Nome Completo</L.DataTitle>
            {loggedUser.firstName} {loggedUser.lastName}
          </L.Data>
          <L.Data>
            <L.DataTitle>Nome de usuário</L.DataTitle>
            {loggedUser.username}
          </L.Data>
          <L.Data>
            <L.DataTitle>Email</L.DataTitle>
            {loggedUser.email}
          </L.Data>
        </div>
      )}
      {msg && <G.Msg>{msg}</G.Msg>}
      <L.StyledLink to="/changePassword">Alterar senha</L.StyledLink>
      <L.Logout to="/" onClick={() => localStorage.removeItem("loggedUser")}>
        Sair
      </L.Logout>
    </L.Section>
  );
};

export default UserProfile;
