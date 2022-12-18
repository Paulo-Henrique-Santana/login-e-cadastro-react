import React from "react";

const useForm = (fields) => {
  // Cria um array com o nome do id de cada campo e o valor vazio
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  const [valuesError, setValuesError] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: false };
    }, {})
  );

  const checkEmptyFields = () => {
    setValuesError(
      fields.reduce((acc, field) => {
        if (values[field.id] === "") return { ...acc, [field.id]: true };
        else return { ...acc, [field.id]: false };
      }, {})
    );
    if (fields.some((field) => values[field.id] === "")) return true;
  };

  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
    if (value !== "") setValuesError({ ...valuesError, [id]: false });
  };
  return { values, valuesError, checkEmptyFields, handleChange };
};

export default useForm;
