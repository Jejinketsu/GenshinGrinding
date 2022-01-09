import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/Form.css';

import logo from '../images/logo-genshin-2.png';
import { func } from 'prop-types';
import useForm from '../components/CustomHooks/useForm';
import Input from '../components/CustomForm/Input';

function Login(props) {
  const navigate = useNavigate();

  /*
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  */
  
  const username = useForm('email');
  const password = useForm('password');

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
    /*api.defaults.headers.common['Authorization'] = result.data.token;*/

    navigate('/characters');

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
            <Input label="Username" type="email" name="username" {...username} required />
            <Input label="Password" type="password" name="password" {...password} />
            <button type='submit' className='enter-app'>Login</button>
          </div>
        </form>

        <Link to='/register'>
          <li id='clique-to-register'>Clique aqui para se cadastrar</li>
        </Link>
        <Link to='/'>
          <li id='clique-to-register'>Voltar ao início</li>
        </Link>
      </div>
    </div>
  );
}

export default Login;
