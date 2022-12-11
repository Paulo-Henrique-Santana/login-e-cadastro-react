import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";
import Input from "../Components/Input/Input";

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
  const [msg, setMsg] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.loggedUser) navigate("/userProfile");
    if (localStorage.users) setUsers(JSON.parse(localStorage.users));
  }, []);

  const validateFields = () => {
    if (fields.some((field) => values[field.id] === "")) {
      setMsg("Preencha todos os campos");
    } else if (values.password !== values.confirmPassword) {
      setMsg("Confirmação de senha não confere");
    } else if (
      users &&
      users.some(({ username }) => username === values.username)
    ) {
      setMsg("Nome de usuário já cadastrado");
    } else if (users && users.some(({ email }) => email === values.email)) {
      setMsg("Email já cadastrado");
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
    <section>
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
      </form>
      <p>
        Já possui uma conta?
        <Link to="/"> Faça login</Link>
      </p>
    </section>
  );
};

export default Registration;
