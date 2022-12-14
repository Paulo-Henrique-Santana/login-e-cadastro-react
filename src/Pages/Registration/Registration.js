import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Input from "../../Components/Input/Input";
import * as S from "./style_registration";
import * as G from "../../style_global";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import Head from "../../Components/Head";

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
  const [values, handleChange] = useForm(fields);
  const [checkLoggedUser, getUsers, users] = useLocalStorageUsers();
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    checkLoggedUser();
    getUsers();
  }, []);

  const validateFields = () => {
    if (fields.some((field) => values[field.id] === "")) {
      setError("Preencha todos os campos");
    } else if (values.password !== values.confirmPassword) {
      setError("Confirmação de senha não confere");
    } else if (
      users &&
      users.some(({ username }) => username === values.username)
    ) {
      setError("Nome de usuário já cadastrado");
    } else if (users && users.some(({ email }) => email === values.email)) {
      setError("Email já cadastrado");
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
        localStorage.users = JSON.stringify([...users, user]);
      } else {
        localStorage.users = JSON.stringify([user]);
      }
      navigate("/?msg=registeredUser");
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
            {...field}
            value={values[field.id]}
            onChange={handleChange}
          />
        ))}
        <G.Error>{error}</G.Error>
        <G.Button>Cadastrar</G.Button>
      </G.Form>
      <G.Paragraph>
        Já possui uma conta?
        <G.StyledLink to="/"> Faça login</G.StyledLink>
      </G.Paragraph>
    </S.Section>
  );
};

export default Registration;
