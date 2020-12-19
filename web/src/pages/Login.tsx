import { Link } from 'react-router-dom';

import '../styles/pages/Form.css';

import logo from '../images/logo-genshin-2.png';

function Login() {
  return (
    <div id='page-login'>
      <div className='banner-genshin'></div>

      <div className='box-login'>
        <img src={logo} alt='' id='logo-genshin-login' />

        <form className='form'>
          <div className='input-block'>
            <label htmlFor=''>Usuário</label>
            <input type='text' />

            <label htmlFor=''>Senha</label>
            <input type='password' />

            <button className='enter-app'>Entrar</button>
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
