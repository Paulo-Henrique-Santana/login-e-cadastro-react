import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Forms/Input";

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
  // Cria um array com o nome do id de cada campo e o valor vazio
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );
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

  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
  };

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
