import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";
import Input from "./Input";

const fields = [
  {
    id: "currentPassword",
    type: "password",
    placeholder: "Senha atual",
  },
  {
    id: "newPassword",
    type: "password",
    placeholder: "Senha nova",
  },
  {
    id: "confirmNewPassword",
    type: "password",
    placeholder: "Confirmar senha nova",
  },
];

const ChangePassword = () => {
  const [values, handleChange] = useForm(fields);
  const [msg, setMsg] = React.useState();
  const [user, setUser] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(
      JSON.parse(localStorage.users).find(
        ({ email }) => email === localStorage.loggedUser
      )
    );
  }, []);

  const validateFields = () => {
    if (fields.some(({ id }) => values[id] === "")) {
      setMsg("Preencha todos os campos");
    } else if (values.currentPassword !== user.password) {
      setMsg("Senha atual está incorreta");
    } else if (values.newPassword !== values.confirmNewPassword) {
      setMsg("Confirmação de senha não confere");
    } else if (values.newPassword === user.password) {
      setMsg("A senha nova não pode ser a mesma que a senha atual");
    } else {
      return true;
    }
  };

  const changePassword = (event) => {
    event.preventDefault();
    if (validateFields()) {
      const users = JSON.parse(localStorage.users).map((user) => {
        if (user.email === localStorage.loggedUser)
          user.password = values.newPassword;
        return user;
      });
      localStorage.users = JSON.stringify(users);
      navigate("/userProfile?passwordChanged=true");
    }
  };

  return (
    <form onSubmit={changePassword}>
      {fields.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={values[field.id]}
          onChange={handleChange}
        />
      ))}
      {msg && <p>{msg}</p>}
      <Link to="/userProfile">Voltar</Link>
      <button>Confirmar</button>
    </form>
  );
};

export default ChangePassword;
