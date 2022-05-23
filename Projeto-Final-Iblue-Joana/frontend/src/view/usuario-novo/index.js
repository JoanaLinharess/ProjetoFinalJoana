import React, {useState} from 'react';
import firebase from '../../config/firebase';
import '@firebase/firestore';
import '@firebase/auth';
import Navbar from '../../componentes/navbar';
import './usuario-novo.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

 
  



function NovoUsuario(){

    
    const [email, setEmail] = useState();
    const [senha, setSenha]= useState();
    const [msgTipo, setMsgTipo]= useState();
    const [serie, setSerie]= useState();
    const [nome, setNome]= useState();
    const [msg, setMsg]= useState();
    const [carregando, setCarregando]= useState();

    
   


    function cadastrar(){
    
        setCarregando(1);

        setMsgTipo(null);

        if(!email || !senha || !serie || !nome){
            setMsgTipo('erro')
            setMsg('Voce precisa preencher todos os campos para realizar o cadastro')
            setCarregando(0);
            return;
        }  
        
        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
             setCarregando(0);
             setMsgTipo('sucesso')
                db.collection('usuarios').add({
                   nome:nome,
                   serie:serie,
                   email: email,
                 })
          }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro')
            switch(erro.message) 
            {
            case 'Password should be at least 6 characters':
                setMsg('A senha deve ter pelo menos 6 caracteres!');  
                break;
            case 'The email address is already in use by another account.':
                setMsg('Este email já está sendo utilizado por outro usuário!'); 
                break; 
            case 'The email address is badly formatted.':
                setMsg('O formato do seu email é inválido!'); 
                break;
             default:
                setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                break; 
            }
          })
          const db = firebase.firestore();
    }


    return(
        <>
        <Navbar/>
        <div className="form-cadastro ">
        <form className=" form-login mx-auto mt-3">
            
          <h1 className="h3 mb-3 text-black font-weight-bold text-center">Cadastro</h1>
            <label>Nome Completo:</label>
            <input onChange={(e)=> setNome(e.target.value)} type="name" className="form-control " placeholder="Nome Completo" />
            <label htmlFor="email" className="form-label">Email:</label>
            <input onChange={(e) => setEmail(e.target.value) }  type="email" className="form-control " placeholder="Email" />
            <label htmlFor="password" className="form-label">Senha:</label>
            <input onChange={(e) => setSenha(e.target.value) }  type="password" className="form-control " placeholder="Senha" />

                <label htmlFor="inputSerie" className="form-label">Selecione seu período</label>
                <select onChange={(e)=> setSerie(e.target.value)} id="inputState" className="form-select form-control">
                <option disabled selected value>Selecione seu período</option>
                <option>Fundamental I</option>
                <option>Fundamental II</option>
                </select>
                {
                     carregando? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="visually-hidden"></span></div></div>
                    : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastar</button>
                }

                <div className="msg-login text-center">
                {msgTipo === 'sucesso' && <span><strong>Usuário cadastrado com sucesso!</strong></span>}
                {msgTipo ==='erro' &&<span><strong>{msg}</strong></span>}
                </div> 
        
        </form>

        </div>
        </>
    )
}

export default NovoUsuario;