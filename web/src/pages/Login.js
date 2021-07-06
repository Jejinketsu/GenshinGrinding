import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/Form.css';

import logo from '../images/logo-genshin-2.png';
import { func } from 'prop-types';

function Login(props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData();

    data.append('username', username);
    data.append('password', password);

    const result = await api.get('/login', {
      auth: {
        username: username,
        password: password,
      }
    });

    localStorage.setItem("token", result.data.token);
    //api.defaults.headers.common['Authorization'] = result.data.token;

    navigate('/characters');

  }

  return (
    <div id='page-login'>
      <div className='banner-genshin'></div>

      <div className='box-login'>
        <img src={logo} alt='' id='logo-genshin-login' />

        <form className='form' onSubmit={handleSubmit}>
          <div className='input-block'>
          <label htmlFor='username'>Usuário</label>
            <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}/>

            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' className='enter-app'>Login</button>
          </div>
        </form>

        <Link to='/register'>
          <li id='clique-to-register'>Clique aqui para se cadastrar</li>
        </Link>
      </div>
    </div>
  );
}

export default Login;
