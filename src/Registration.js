import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Forms/Input";

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
    id: "user",
    type: "text",
    placeholder: "Nome de usuário",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "cpf",
    type: "text",
    placeholder: "CPF",
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
  // Cria um array com o nome do id de cada campo e o valor vazio
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
    } else if (values.password !== values.confirmPassword) {
      setMsg("As senhas devem ser iguais");
    } else {
      return true;
    }
  };

  const register = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      const user = { ...values };
      delete user.confirmPassword;
      if (localStorage.getItem("users")) {
        const users = JSON.parse(localStorage.getItem("users"));
        localStorage.setItem("users", JSON.stringify([...users, user]));
      } else {
        localStorage.setItem("users", JSON.stringify([user]));
      }
      navigate("/");
    }
  };

  return (
    <form onSubmit={register}>
      {fields.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={values[field.id]}
          onChange={handleChange}
        />
      ))}
      {msg && <p>{msg}</p>}
      <button>Cadastrar</button>
      <p>
        Já possui uma conta?
        <Link to="/"> Faça login</Link>
      </p>
    </form>
  );
};

export default Registration;
