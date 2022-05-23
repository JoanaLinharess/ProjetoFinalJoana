import React, {useState} from 'react';
import './login.css';
import {Link, Navigate} from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha]= useState();
    const [msgTipo, setMsgTipo]= useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado=>{
            setMsgTipo('sucesso') 
            setTimeout(()=>{
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            },2000);
        }).catch(erro=>{
            setMsgTipo('erro')
        });
    }
        

    return(
        <div>

        {useSelector(state => state.usuarioLogado) > 0 ?<Navigate to='/fundamentalaluno'/> :null}

        <form className=" login-content mx-auto">
        <h1 className="h3 mb-3 fw-normal text-center py-4">Faça o Login</h1>
        <div className="form-content">
        <label htmlFor="floatingInput">Email</label>
        <input onChange={(e)=> setEmail(e.target.value)}type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Senha</label>
        <input onChange={(e)=> setSenha(e.target.value)}type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        
        <button onClick={logar} className="w-100 btn btn-lg btn-primary form-control" type="button">Logar</button> 
       <div className="msg-login text-center my-5">
            {msgTipo === 'sucesso' && <span><strong>Você está conectado!</strong></span>}
                {msgTipo ==='erro' &&<span><strong>Algo deu errado! Verifique os dados inseridos.</strong></span>}
        </div> 
        <div className="opcoes-login mt-5 text-center">
                <Link to="/recuperar-senha" className="mx-2">Recuperar Senha</Link>
                <span className="text-white"></span>
                <Link to='novousuario' className="mx-2">Cadastrar</Link>
        </div>
        <p className="mt-5 mb-3 text-center">&copy; 2017–2022</p>
        </div>
      </form>
      </div>
    )
}

export default Login;