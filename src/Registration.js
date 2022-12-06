import React from "react";
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
    id: "passwordConfirm",
    type: "password",
    placeholder: "Confirmar senha",
  },
];

const Registration = ({ goToLogin }) => {
  // Cria um array com o nome do id de cada campo e o valor vazio
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );
  const [msg, setMsg] = React.useState(null);

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

  const register = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      if (localStorage.getItem("users")) {
        const users = JSON.parse(localStorage.getItem("users"));
        localStorage.setItem("users", JSON.stringify([...users, values]));
      } else {
        localStorage.setItem("users", JSON.stringify([values]));
      }
      goToLogin();
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
      <a href="#" onClick={goToLogin}>
        Mudar de pagina
      </a>
    </form>
  );
};

export default Registration;
