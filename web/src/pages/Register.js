import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/Form.css';

import logo from '../images/logo-genshin-2.png';
import useForm from '../components/CustomHooks/useForm';
import Input from '../components/CustomForm/Input';
import useInputFile from '../components/CustomHooks/useInputFile';

function Register(props) {
  const navigate = useNavigate();
  
  /*
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [file, setFile] = useState(null);
  */

  const nickname = useForm();
  const username = useForm('email');
  const password = useForm('password');
  const rePassword = useForm('password');
  const file = useInputFile('');

  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData();

    data.append('nickname', nickname);
    data.append('username', username);
    data.append('password', password);
    data.append('file', file);

    const response = await api.post('/signup', data);

    navigate('/login');
  }

  return (
    <div id='page-login'>
      <div className='banner-genshin'></div>

      <div className='box-login'>
        <Link to='/'>
          <img src={logo} alt='' id='logo-genshin-login' />
        </Link>

        <form className='form' onSubmit={handleSubmit}>
          <div className='input-block'>
            <Input label="Nickname" type="text" name="nickname" {...nickname} required />
            <Input label="Username" type="email" name="username" {...username} required />
            <Input label="Password" type="password" name="password" {...password} required />
            <Input label="Confirm password" type="password" name="rePassword" {...rePassword} required />
            <Input label="Image" type='file' name="file" {...file} />
            <button type='submit' className='enter-app'>Cadastrar</button>
          </div>
        </form>

        <Link to='/login'>
          <li id='clique-to-register'>Clique aqui para fazer login</li>
        </Link>
        <Link to='/'>
          <li id='clique-to-register'>Voltar ao início</li>
        </Link>
      </div>
    </div>
  );
}

export default Register;
