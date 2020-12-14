import React from 'react';



import '../styles/pages/Login.css';

import Logo from '../images/logo-genshin-2.png';


function Register(){
    return(
        <div id="page-login">   
            <div className="banner-genshin"></div>
            <div className="box-login">
                <img src={Logo} alt="" id="logo-genshin-login"/>
                <form className="form">
                    <div className="input-block">                    
                        <label htmlFor="">Nickname</label>
                        <input type="text"/>
                        <label htmlFor="">Usuário</label>            
                        <input type="text"/>
                        <label htmlFor="">Senha</label>
                        <input type="password"/>
                        <label htmlFor="">Confirmar Senha</label>
                        <input type="password"/>
                        
                        <button className="enter-app">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;