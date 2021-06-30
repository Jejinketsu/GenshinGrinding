import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/Form.css';

import logo from '../images/logo-genshin-2.png';

function Register(props) {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [file, setFile] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData();

    data.append('nickname', nickname);
    data.append('username', username);
    data.append('password', password);
    data.append('file', file);

    const response = await api.post('/signup', data);

    navigate('/');
  }

  return (
    <div id='page-login'>
      <div className='banner-genshin'></div>

      <div className='box-login'>
        <img src={logo} alt='' id='logo-genshin-login' />

        <form className='form' onSubmit={handleSubmit}>
          <div className='input-block'>
            <label htmlFor='nickname'>Nickname</label>
            <input type='text' id='nickname' value={nickname} onChange={e => setNickname(e.target.value)}/>

            <label htmlFor='username'>Usuário</label>
            <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}/>

            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <label htmlFor='confirm_password'>Confirmar Senha</label>
            <input type='password' id='repassword' value={rePassword} onChange={e => setRePassword(e.target.value)}/>

            <label htmlFor='file'>Image</label>
            <input type='file' id='file' onChange={e => setFile(e.target.files[0])}/>

            <button type='submit' className='enter-app'>Cadastrar</button>
          </div>
        </form>

        <Link to='/'>
          <li id='clique-to-register'>Clique aqui para entrar</li>
        </Link>
      </div>
    </div>
  );
}

export default Register;
