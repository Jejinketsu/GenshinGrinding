import React from "react";
import Input from "../../components/CustomForm/Input";
import useForm from "../../components/CustomHooks/useForm";

const ItensForms = () => {
  const itemNome = useForm("number");

  return (
    <div>
      <Input label="Nome" type="text" name="itemNome" {...itemNome} />
    </div>
  );
};

export default ItensForms;
