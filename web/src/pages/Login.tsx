import React from 'react';


import '../styles/pages/Login.css';

import Logo from '../images/logo-genshin-2.png';


function Login(){
    return(
        <div id="page-login">   
            <div className="banner-genshin"></div>
            <div className="box-login">
                <img src={Logo} alt="" id="logo-genshin-login"/>
                <form className="form">
                    <div className="input-block">                    
                        <label htmlFor="">Usuário</label>
                        <input type="text"/>
                        <label htmlFor="">Senha</label>
                        <input type="password"/>
                        
                        <button className="enter-app">Login</button>
                        
                    </div>
                    <a href="/register"><li id="clique-to-register">Clique aqui para se cadastrar</li></a>
                </form>
            </div>
        </div>
    );
}

export default Login;