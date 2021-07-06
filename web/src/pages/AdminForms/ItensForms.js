import React from "react";
import "../../styles/components/DashboardForms.css";
import Input from "../../components/CustomForm/Input";
import Select from "../../components/CustomForm/Select";
import useForm from "../../components/CustomHooks/useForm";
import useSelect from "../../components/CustomHooks/useSelect";
import Title from "../../components/CustomForm/Title";
import Button from "../../components/CustomForm/Button";

const ItensForms = () => {
  const [img, setImg] = React.useState({});
  const itemName = useForm("text");
  const itemDescription = useForm("text");

  const itemSelect = useSelect([
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

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // REALIZAR POST NO BD;
  }

  return (
    <div>
      <Title title="Itens" />

      <form onSubmit={handleSubmit} className="CadForm">
        <Input
          label="Name"
          type="text"
          name="itemName"
          classComponent="input1"
          {...itemName}
        />
        <Select label="Type Item" classComponent="select1" {...itemSelect} />
        <Select label="Rarity" classComponent="select2" {...raritySelect} />
        <Input
          label="Description"
          type="text"
          name="itemDescription"
          classComponent="input2"
          {...itemDescription}
        />

        <label className="labelImage" htmlFor="img">Upload image</label>
        <input
          className="file input3"
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        <label className="previewImg" htmlFor="img">
          {img.preview && (
            <div
              className="preview"
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
        </label>
        <Button Text="Confirm" classComponent="button" />
      </form>
    </div>
  );
};

export default ItensForms;
