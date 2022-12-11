import React from "react";

const useForm = (fields) => {
  // Cria um array com o nome do id de cada campo e o valor vazio
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );
  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
  };
  return [values, handleChange];
};

export default useForm;
