import React from "react";
import Input from "./Forms/Input";

const registrationFields = [
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

const Registration = ({ changePage }) => {
  // Cria um array com o nome do id de cada campo e o valor vazio
  const [registrationForm, setregistrationForm] = React.useState(
    registrationFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setregistrationForm({ ...registrationForm, [id]: value });
  };

  const register = async () => {
    localStorage.setItem("users", JSON.stringify(registrationForm));
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {registrationFields.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={registrationForm[field.id]}
          onChange={handleChange}
        />
      ))}
      <button onClick={register}>Sign up</button>
      <a href="#" onClick={changePage}>
        Mudar de pagina
      </a>
    </form>
  );
};

export default Registration;
