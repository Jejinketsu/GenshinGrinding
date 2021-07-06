import React from "react";
import "../../styles/components/ItensForm.css";
import Input from "../../components/CustomForm/Input";
import InputFile from "../../components/CustomForm/InputFile";
import Select from "../../components/CustomForm/Select";
import useForm from "../../components/CustomHooks/useForm";
import useSelect from "../../components/CustomHooks/useSelect";
import Title from "../../components/CustomForm/Title";
import Button from "../../components/CustomForm/Button";
import useInputFile from "../../components/CustomHooks/useInputFile";
import OkMessage from "../../components/CustomForm/OkMessage";

const ItensForms = () => {
  const itemName = useForm("text");
  const itemDescription = useForm("text");
  const itemImage = useInputFile();

  const TypeItemSelect = useSelect([
    "Stone Ascension Material",
    "Boss Ascension Material",
    "World Ascension Material",
    "Level Ascension Material",
  ]);

  const raritySelect = useSelect([
    "★ One Star",
    "★★ Two Stars",
    "★★★ Three Stars",
    "★★★★ Four Stars",
    "★★★★★ Five Stars",
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    // REALIZAR POST NO BD;
  }

  return (
    <div>
      <Title title="Itens" />

      <form onSubmit={handleSubmit} className="ItensCadForm">
        <Input
          label="Name"
          type="text"
          name="itemName"
          classComponent="input1"
          {...itemName}
        />

        <Select
          label="Type Item"
          classComponent="select1"
          {...TypeItemSelect}
        />
        <Select label="Rarity" classComponent="select2" {...raritySelect} />

        <Input
          label="Description"
          type="text"
          name="itemDescription"
          classComponent="input2"
          {...itemDescription}
        />

        <InputFile
          label="Upload Image"
          name="img"
          classComponent="input3"
          {...itemImage}
        />

        <Button Text="Confirm" classComponent="button" />
      </form>
    </div>
  );
};

export default ItensForms;
