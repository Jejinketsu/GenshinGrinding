import React from "react";

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(null);
  const NumberRegex = /^\d+$/;

  function validate(value) {
    if (value.length === 0) {
      setErro("FILL IN A VALUE");
    } else if (type === "number" && !NumberRegex.test(value)) {
      setErro("USE ONLY NUMBERS");
    } else {
      setErro(null);
    }
  }

  function onChange({ target }) {
    if (erro) validate(target.value);
    setValue(target.value);
  }

  return { value, setValue, erro, onChange, onBlur: () => validate(value) };
};

export default useForm;
