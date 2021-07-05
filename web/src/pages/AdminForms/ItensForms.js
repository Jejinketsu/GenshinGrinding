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

  return (
    <div className="CadForm">
      <Title title="Itens" />

      <form>
        <Input label="Name" type="text" name="itemName" {...itemName} />
        <Select label="Type Item" {...itemSelect} />
        <Select label="Rarity" {...raritySelect} />
        <Input
          label="Description"
          type="text"
          name="itemDescription"
          {...itemDescription}
        />
        <input
          className="file"
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        <div className="previewImg">
          {img.preview && (
            <div
              className="preview"
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
        </div>
        <Button Text="Confirm" />
      </form>
    </div>
  );
};

export default ItensForms;
