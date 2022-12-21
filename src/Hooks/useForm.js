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

  const checkEmptyFields = () =>
    fields.some(({ id }) => valuesError[id] === true);

  // altera o valor dentro do array sempre que o valor do campo mudar
  // e mantém o valor dos outros campos
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setValues({ ...values, [id]: value });
    if (value !== "") setValuesError({ ...valuesError, [id]: false });
  };

  const handleBlur = ({ target }) => {
    const { id, value } = target;
    if (value === "") setValuesError({ ...valuesError, [id]: true });
  };

  return { values, valuesError, checkEmptyFields, handleChange, handleBlur };
};

export default useForm;
