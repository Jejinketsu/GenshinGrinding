import React from "react";
import "../../styles/components/DashboardForms.css";
import Input from "../../components/CustomForm/Input";
import useForm from "../../components/CustomHooks/useForm";
import Title from "../../components/CustomForm/Title";

const ItensForms = () => {
  const itemName = useForm("text");
  const itemDescription = useForm("text");

  return (
    <div className="CadForm">
      <Title title="Itens" />
      <form>
        <Input label="Name" type="text" name="itemName" {...itemName} />
        <Input label="Description" type="text" name="itemDescription" {...itemDescription} />
      </form>
    </div>
  );
};

export default ItensForms;
