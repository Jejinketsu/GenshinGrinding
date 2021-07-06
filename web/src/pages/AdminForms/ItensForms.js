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

import api from '../../services/api';

const ItensForms = () => {
  const itemName = useForm("text");
  const itemDescription = useForm("text");
  const itemImage = useInputFile();

  const TypeItemSelect = useSelect([
    "Character EXP Material",
    "Character Ascension Material",
    "Talent Level-Up Material",
    "Common Ascension Material",
    "Weapon Ascension Material",
    "Local Specialties"
  ]);

  const raritySelect = useSelect([1, 2, 3, 4, 5]);

  const tagSelect = useSelect([
    "stone",
    "boss_item",
    "event",
    "book",
    "world",
    "local",
    "level"
  ])

  async function handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData();

    data.append("name", itemName.value);
    data.append("type", TypeItemSelect.value);
    data.append("rarity", raritySelect.value);
    data.append("tag", tagSelect.value);
    data.append("description", itemDescription.value);
    data.append("file", itemImage.value);

    alert()

    api.post('/create_item', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then((value) => {
      alert(value.status);
    })
    
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

        <Select label="Type Item" classComponent="select1" {...TypeItemSelect} />
        <Select label="Rarity" classComponent="select2" {...raritySelect} />
        <Select label="Tag" classComponent="select3" {...tagSelect} />
        
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
