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

  // Altera para true o valor de erro dos campos não preenchidos
  // e retorna se há algum campos vazio
  const checkEmptyFields = () => {
    setValuesError(
      fields.reduce((acc, { id }) => {
        if (values[id] === "") return { ...acc, [id]: true };
        else return { ...acc, [id]: false };
      }, {})
    );

    return fields.some(({ id }) => valuesError[id] === true);
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
