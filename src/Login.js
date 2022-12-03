import React from "react";
import Input from "./Forms/Input";

const registrationFields = [
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

const Login = ({ changePage }) => {
  const [loginForm, setLoginForm] = React.useState(
    registrationFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setLoginForm({ ...loginForm, [id]: value });
  };

  return (
    <div>
      {registrationFields.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={loginForm[field.id]}
          onChange={handleChange}
        />
      ))}
      <a href="#" onClick={changePage}>
        Mudar de pagina
      </a>
    </div>
  );
};

export default Login;
