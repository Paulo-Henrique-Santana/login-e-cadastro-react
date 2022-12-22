import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Input from "../../Components/Input/Input";
import * as L from "./style_login";
import * as G from "../../style_global";
import useLocalStorageUsers from "../../Hooks/useLocalStorageUsers";
import Head from "../../Components/Head";

const fields = [
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
];

const Login = () => {
  const [msg, setMsg] = React.useState(localStorage.getItem("msg") || "");
  const [error, setError] = React.useState();
  const { users } = useLocalStorageUsers();
  const { values, valuesError, checkEmptyFields, handleChange, handleBlur } =
    useForm(fields);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("msg")) {
      setTimeout(() => {
        localStorage.removeItem("msg");
        setMsg("");
      }, 3000);
    }
  }, []);

  const validateFields = () => {
    if (checkEmptyFields()) {
      setError("Preencha todos os campos");
    } else if (users && !users.some(({ email }) => email === values.email)) {
      setError("Email não cadastrado");
    } else if (
      users &&
      users.some(
        ({ email, password }) =>
          email === values.email && password !== values.password
      )
    ) {
      setError("Senha incorreta");
    } else {
      return true;
    }
  };

  // verifica se o email e senha condiz com o de algum usuário cadastrado
  const validateLogin = (event) => {
    event.preventDefault();
    if (validateFields()) {
      if (users) {
        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          localStorage.setItem("loggedUser", user.email);
          navigate("userProfile");
        }
      }
    }
  };

  return (
    <L.Section>
      <Head title="Login" description="Login de usuário" />
      <G.Title>Login</G.Title>
      <G.Form onSubmit={validateLogin}>
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
        {error ? <G.Error>{error}</G.Error> : <G.Msg>{msg}</G.Msg>}
        <G.Button>Entrar</G.Button>
      </G.Form>
      <G.TextBox>
        <G.Paragraph>Ainda não tem conta?</G.Paragraph>
        <G.StyledLink to="registration">Cadastre-se</G.StyledLink>
      </G.TextBox>
    </L.Section>
  );
};

export default Login;
