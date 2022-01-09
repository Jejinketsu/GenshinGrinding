import React from 'react';
import { Form } from './styles';
import Input from '../../components/CustomForm/Input';
import InputFile from '../../components/CustomForm/InputFile';
import Select from '../../components/CustomForm/Select';
import useForm from '../../components/CustomHooks/useForm';
import useSelect from '../../components/CustomHooks/useSelect';
import Button from '../../components/CustomForm/Button';
import useInputFile from '../../components/CustomHooks/useInputFile';
import OkMessage from '../../components/CustomForm/OkMessage';

import api from '../../services/api';

const ItensForms = () => {
  const itemName = useForm('text');
  const itemDescription = useForm('text');
  const itemImage = useInputFile();
  const [success, setSuccess] = React.useState(null);
  const TypeItemSelect = useSelect([
    'Character EXP Material',
    'Character Ascension Material',
    'Talent Level-Up Material',
    'Common Ascension Material',
    'Weapon Ascension Material',
    'Local Specialties',
  ]);
  const raritySelect = useSelect([1, 2, 3, 4, 5]);
  const tagSelect = useSelect([
    'stone',
    'boss_item',
    'event',
    'book',
    'world',
    'local',
    'level',
  ]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', itemName.value);
    data.append('type', TypeItemSelect.value);
    data.append('rarity', raritySelect.value);
    data.append('tag', tagSelect.value);
    data.append('description', itemDescription.value);
    data.append('file', itemImage.value.raw);

    api
      .post('/create_item', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((value) => {
        if (value.status === 201) setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          label='Name'
          type='text'
          name='itemName'
          classComponent='left-column'
          {...itemName}
        />

        <Select
          label='Type Item'
          classComponent='left-column'
          {...TypeItemSelect}
        />
        <Select label='Rarity' classComponent='select2' {...raritySelect} />
        <Select label='Tag' classComponent='select3' {...tagSelect} />

        <Input
          label='Description'
          type='text'
          name='itemDescription'
          classComponent='left-column'
          {...itemDescription}
        />
      </div>

      <InputFile
        label='Upload Image'
        name='img'
        classComponent='right-column'
        {...itemImage}
      />
      

      <Button Text='Confirm' classComponent='button' />
      {success && <OkMessage message='Item successful registered!' />}
    </Form>
  );
};

export default ItensForms;
