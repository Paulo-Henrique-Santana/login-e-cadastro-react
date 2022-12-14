import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Input from "../../Components/Input/Input";
import * as L from "./style_ChangePassword";
import * as G from "../../style_global";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";

const fields = [
  {
    id: "currentPassword",
    type: "password",
    placeholder: "Senha atual",
  },
  {
    id: "newPassword",
    type: "password",
    placeholder: "Senha nova",
  },
  {
    id: "confirmNewPassword",
    type: "password",
    placeholder: "Confirmar senha nova",
  },
];

const ChangePassword = () => {
  const [values, handleChange] = useForm(fields);
  const [checkLoggedUser] = useLocalStorageUsers();
  const [user, setUser] = React.useState(null);
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(checkLoggedUser());
  }, []);

  const validateFields = () => {
    if (fields.some(({ id }) => values[id] === "")) {
      setMsg("Preencha todos os campos");
    } else if (values.currentPassword !== user.password) {
      setMsg("Senha atual está incorreta");
    } else if (values.newPassword !== values.confirmNewPassword) {
      setMsg("Confirmação de senha não confere");
    } else if (values.newPassword === user.password) {
      setMsg("A senha nova não pode ser a mesma que a senha atual");
    } else {
      return true;
    }
  };

  const changePassword = (event) => {
    event.preventDefault();
    if (validateFields()) {
      const users = JSON.parse(localStorage.users).map((user) => {
        if (user.email === localStorage.loggedUser)
          user.password = values.newPassword;
        return user;
      });
      localStorage.users = JSON.stringify(users);
      navigate("/userProfile?passwordChanged=true");
    }
  };

  return (
    <L.Section>
      <G.Title>Alterar Senha</G.Title>
      <G.Form onSubmit={changePassword}>
        {fields.map((field) => (
          <Input
            key={field.id}
            {...field}
            value={values[field.id]}
            onChange={handleChange}
          />
        ))}
        <G.Msg>{msg}</G.Msg>
        <G.Button>Confirmar</G.Button>
        <L.Paragraph>
          <G.StyledLink to="/userProfile">Voltar</G.StyledLink>
        </L.Paragraph>
      </G.Form>
    </L.Section>
  );
};

export default ChangePassword;
