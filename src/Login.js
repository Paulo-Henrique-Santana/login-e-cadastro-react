import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Forms/Input";

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
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );
  const [msg, setMsg] = React.useState(null);
  const navigate = useNavigate();

  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
  };

  // verifica se há algum campo vazio
  const validateFields = () => {
    if (fields.some((field) => values[field.id] === "")) {
      setMsg("Preencha todos os campos");
      return false;
    }
    return true;
  };

  // verifica se o email e senha condiz com o de algum usuário cadastrado
  const validateLogin = (event) => {
    event.preventDefault();
    if (validateFields()) {
      if (localStorage.getItem("users")) {
        const user = JSON.parse(localStorage.getItem("users")).some(
          (user) =>
            values.email === user.email && values.password === user.password
        );
        if (user) navigate("userProfile");
      }
    }
  };

  return (
    <form onSubmit={validateLogin}>
      {fields.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={values[field.id]}
          onChange={handleChange}
        />
      ))}
      {msg && <p>{msg}</p>}
      <button>Entrar</button>
      <p>
        Ainda não tem conta?
        <Link to="registration"> Cadastre-se</Link>
      </p>
    </form>
  );
};

export default Login;