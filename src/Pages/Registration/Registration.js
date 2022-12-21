import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "../../Components/Head";
import Input from "../../Components/Input/Input";
import useForm from "../../Hooks/useForm";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import useMsg from "../../Hooks/useMsg";
import * as S from "./style_registration";
import * as G from "../../style_global";

const fields = [
  {
    id: "firstName",
    type: "text",
    placeholder: "Primeiro nome",
  },
  {
    id: "lastName",
    type: "text",
    placeholder: "Sobrenome",
  },
  {
    id: "username",
    type: "text",
    placeholder: "Nome de usuário",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Senha",
  },
  {
    id: "confirmPassword",
    type: "password",
    placeholder: "Confirmar senha",
  },
];

const Registration = () => {
  const { users } = useLocalStorageUsers();
  const { values, valuesError, checkEmptyFields, handleChange, handleBlur } =
    useForm(fields);
  const { error, addError } = useMsg();
  const navigate = useNavigate();

  const validateFields = () => {
    if (checkEmptyFields()) {
      addError("Preencha todos os campos");
    } else if (values.password !== values.confirmPassword) {
      addError("Confirmação de senha não confere");
    } else if (
      users &&
      users.some(({ username }) => username === values.username)
    ) {
      addError("Nome de usuário já cadastrado");
    } else if (users && users.some(({ email }) => email === values.email)) {
      addError("Email já cadastrado");
    } else {
      return true;
    }
  };

  const register = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      const user = { ...values };
      delete user.confirmPassword;
      if (users) {
        localStorage.setItem("users", JSON.stringify([...users, user]));
      } else {
        localStorage.setItem("users", JSON.stringify([user]));
      }
      localStorage.setItem("msg", "Usuário cadastrado com sucesso");
      navigate("/");
    }
  };

  return (
    <S.Section>
      <G.Title>Cadastro</G.Title>
      <Head title="Cadastro" description="Cadastro de usuário" />
      <G.Form onSubmit={register}>
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
        <G.Error>{error}</G.Error>
        <G.Button>Cadastrar</G.Button>
      </G.Form>
      <G.TextBox>
        <G.Paragraph>Já possui uma conta?</G.Paragraph>
        <G.StyledLink to="/"> Faça login</G.StyledLink>
      </G.TextBox>
    </S.Section>
  );
};

export default Registration;
