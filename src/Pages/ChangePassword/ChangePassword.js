import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "../../Components/Head";
import Input from "../../Components/Input/Input";
import useForm from "../../Hooks/useForm";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
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
  const { loggedUser, users } = useLocalStorageUsers();
  const { values, valuesError, checkEmptyFields, handleChange, handleBlur } =
    useForm(fields);
  const [error, addError] = React.useState("");
  const navigate = useNavigate();

  const validateFields = () => {
    if (checkEmptyFields()) {
      addError("Preencha todos os campos");
    } else if (values.currentPassword !== loggedUser.password) {
      addError("Senha atual está incorreta");
    } else if (values.newPassword !== values.confirmNewPassword) {
      addError("Confirmação de senha não confere");
    } else if (values.newPassword === loggedUser.password) {
      addError("A senha nova não pode ser a mesma que a senha atual");
    } else {
      return true;
    }
  };

  const changePassword = (event) => {
    event.preventDefault();
    if (validateFields()) {
      localStorage.setItem(
        "users",
        JSON.stringify(
          users.map((user) => {
            if (user.email === loggedUser.email)
              user.password = values.newPassword;
            return user;
          })
        )
      );
      localStorage.setItem("msg", "Senha alterada com sucesso!");
      navigate("/userProfile");
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
            onBlur={handleBlur}
            error={valuesError[field.id]}
            {...field}
          />
        ))}
        {error && <G.Error>{error}</G.Error>}
        <G.Button>Confirmar</G.Button>
        <L.Paragraph>
          <G.StyledLink to="/userProfile">Voltar</G.StyledLink>
        </L.Paragraph>
      </G.Form>
    </L.Section>
  );
};

export default ChangePassword;
