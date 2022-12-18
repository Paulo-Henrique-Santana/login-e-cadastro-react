import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "../../Components/Head";
import Input from "../../Components/Input/Input";
import useForm from "../../Hooks/useForm";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import useMsg from "../../Hooks/useMsg";
import * as L from "./style_ChangePassword";
import * as G from "../../style_global";

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
  const [user, setUser] = React.useState(null);
  const [checkLoggedUser] = useLocalStorageUsers();
  const { values, valuesError, checkEmptyFields, handleChange } =
    useForm(fields);
  const [error, addError] = useMsg();
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(checkLoggedUser());
  }, []);

  const validateFields = () => {
    if (checkEmptyFields()) {
      addError("Preencha todos os campos");
    } else if (values.currentPassword !== user.password) {
      addError("Senha atual está incorreta");
    } else if (values.newPassword !== values.confirmNewPassword) {
      addError("Confirmação de senha não confere");
    } else if (values.newPassword === user.password) {
      addError("A senha nova não pode ser a mesma que a senha atual");
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
      <Head title="Alterar senha" description="Alterar a senha do usuário" />
      <G.Title>Alterar Senha</G.Title>
      <G.Form onSubmit={changePassword}>
        {fields.map((field) => (
          <Input
            key={field.id}
            value={values[field.id]}
            onChange={handleChange}
            error={valuesError[field.id]}
            {...field}
          />
        ))}
        <G.Error>{error}</G.Error>
        <G.Button>Confirmar</G.Button>
        <L.Paragraph>
          <G.StyledLink to="/userProfile">Voltar</G.StyledLink>
        </L.Paragraph>
      </G.Form>
    </L.Section>
  );
};

export default ChangePassword;
