import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Input from "../../Components/Input/Input";
import * as S from "./style_login";

const fields = [
  {
    id: "email",
    type: "email",
    placeholder: "Email",
    error: "",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Senha",
    error: "",
  },
];

const Login = () => {
  const [values, handleChange] = useForm(fields);
  const [msg, setMsg] = React.useState("");
  const [error, setError] = React.useState("");
  const [users, setUsers] = React.useState(null);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(useLocation().search);

  React.useEffect(() => {
    if (localStorage.loggedUser) navigate("userProfile");
    if (urlParams.get("msg")) {
      setMsg("Usuário cadastrado com sucesso");
      setTimeout(() => setMsg(null), 3000);
    }
    if (localStorage.users) setUsers(JSON.parse(localStorage.users));
  }, []);

  const validateFields = () => {
    if (fields.some((field) => values[field.id] === "")) {
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
            values.email === user.email && values.password === user.password
        );
        if (user) {
          localStorage.loggedUser = user.email;
          navigate("userProfile");
        }
      }
    }
  };

  return (
    <S.Section>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={validateLogin}>
        {fields.map((field) => (
          <Input
            key={field.id}
            {...field}
            value={values[field.id]}
            onChange={handleChange}
          />
        ))}
        {error ? <S.Error>{error}</S.Error> : <S.Msg>{msg}</S.Msg>}
        <S.Button>Entrar</S.Button>
      </S.Form>
      <S.Paragraph>
        Ainda não tem conta?
        <S.StyledLink to="registration"> Cadastre-se</S.StyledLink>
      </S.Paragraph>
    </S.Section>
  );
};

export default Login;
